import { NextRequest, NextResponse } from "next/server";

const FRAPPE_API_URL = process.env.FRAPPE_API_URL;
const FRAPPE_API_KEY = process.env.FRAPPE_API_KEY;
const FRAPPE_API_SECRET = process.env.FRAPPE_API_SECRET;

export async function POST(request: NextRequest) {
  try {
    // ==========================================
    // 1. CHECK FRAPPE CONFIGURATION
    // ==========================================

    if (
      !FRAPPE_API_URL ||
      !FRAPPE_API_KEY ||
      !FRAPPE_API_SECRET
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Frappe API configuration is missing.",
        },
        { status: 500 }
      );
    }

    // ==========================================
    // 2. READ REQUEST BODY
    // ==========================================

    const body = await request.json();

    const {
      // Company
      companyName,
      contactPerson,

      // Support both frontend field names
      businessEmail,
      email,

      phoneNumber,
      phone,

      country,
      website,

      // Product
      productName,
      productCategory,
      productDescription,
      quantity,
      unit,

      // Shipping
      destinationCountry,
      destinationPort,
      incoterm,
      deliveryDate,

      // Requirements
      packagingRequirements,
      qualityRequirements,
      certifications,
      targetPrice,
      currency,
      additionalRequirements,

      // Additional sourcing options
      oem,
      privateLabel,
    } = body;

    // ==========================================
    // 3. NORMALIZE FRONTEND FIELD NAMES
    // ==========================================

    const finalEmail =
      businessEmail?.trim() || email?.trim() || "";

    const finalPhone =
      phoneNumber?.trim() || phone?.trim() || "";

    const finalCompanyName =
      companyName?.trim() || "";

    const finalContactPerson =
      contactPerson?.trim() || "";

    const finalCountry =
      country?.trim() || "";

    // ==========================================
    // 4. VALIDATE REQUIRED DATA
    // ==========================================

    if (
      !finalCompanyName ||
      !finalContactPerson ||
      !finalEmail ||
      !finalPhone ||
      !finalCountry
    ) {
      console.error("Missing required company information:", {
        companyName: finalCompanyName || "MISSING",
        contactPerson: finalContactPerson || "MISSING",
        businessEmail: finalEmail || "MISSING",
        phoneNumber: finalPhone || "MISSING",
        country: finalCountry || "MISSING",
      });

      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required company information.",
          missingFields: {
            companyName: !finalCompanyName,
            contactPerson: !finalContactPerson,
            businessEmail: !finalEmail,
            phoneNumber: !finalPhone,
            country: !finalCountry,
          },
        },
        { status: 400 }
      );
    }

    // ==========================================
    // 5. NORMALIZE EMAIL
    // ==========================================

    const normalizedEmail =
      finalEmail.toLowerCase();

    // ==========================================
    // 6. FRAPPE CONFIGURATION
    // ==========================================

    const frappeUrl =
      FRAPPE_API_URL.replace(/\/$/, "");

    const headers = {
      Authorization: `token ${FRAPPE_API_KEY}:${FRAPPE_API_SECRET}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    // ==========================================
    // 7. PREPARE CONTACT NAME
    // CRM Lead requires first_name
    // ==========================================

    const nameParts =
      finalContactPerson.split(/\s+/);

    const firstName = nameParts[0];

    const lastName =
      nameParts.length > 1
        ? nameParts.slice(1).join(" ")
        : "";

    // ==========================================
    // 8. CREATE FRAPPE CRM LEAD
    // ==========================================

    const crmLeadPayload = {
      first_name: firstName,

      ...(lastName
        ? { last_name: lastName }
        : {}),

      organization_name: finalCompanyName,

      email: normalizedEmail,

      mobile_no: finalPhone,

      ...(website?.trim()
        ? {
            website: website.trim(),
          }
        : {}),

      country: finalCountry,

      // Remove this if Website is not a valid
      // CRM Lead Source option in Frappe CRM
      source: "Website",
    };

    console.log(
      "Creating CRM Lead:",
      JSON.stringify(crmLeadPayload, null, 2)
    );

    const leadResponse = await fetch(
      `${frappeUrl}/api/resource/CRM%20Lead`,
      {
        method: "POST",
        headers,
        body: JSON.stringify(crmLeadPayload),
        cache: "no-store",
      }
    );

    const leadResult =
      await leadResponse.json();

    // ==========================================
    // CRM LEAD ERROR
    // ==========================================

    if (!leadResponse.ok) {
      console.error(
        "CRM Lead creation failed:",
        JSON.stringify(leadResult, null, 2)
      );

      return NextResponse.json(
        {
          success: false,
          message: "Unable to create CRM Lead.",
          frappeStatus: leadResponse.status,
          error: leadResult,
        },
        {
          status: leadResponse.status,
        }
      );
    }

    const leadName =
      leadResult?.data?.name;

    if (!leadName) {
      console.error(
        "CRM Lead response missing name:",
        JSON.stringify(leadResult, null, 2)
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "CRM Lead was created but no Lead ID was returned.",
          error: leadResult,
        },
        { status: 500 }
      );
    }

    console.log(
      "CRM Lead created:",
      leadName
    );

    // ==========================================
    // 9. CREATE GLOBALATLAS SOURCING RFQ
    // ==========================================

    const rfqPayload = {
      // IMPORTANT:
      // Your RFQ "lead" field must be:
      //
      // Field Type: Link
      // Options: CRM Lead
      //
      lead: leadName,

      // ========================================
      // COMPANY
      // ========================================

      company_name: finalCompanyName,

      contact_person: finalContactPerson,

      business_email: normalizedEmail,

      phone_number: finalPhone,

      country: finalCountry,

      ...(website?.trim()
        ? {
            website: website.trim(),
          }
        : {}),

      // ========================================
      // PRODUCT
      // ========================================

      ...(productName?.trim()
        ? {
            product_name:
              productName.trim(),
          }
        : {}),

      ...(productCategory?.trim()
        ? {
            product_category:
              productCategory.trim(),
          }
        : {}),

      ...(productDescription?.trim()
        ? {
            product_description:
              productDescription.trim(),
          }
        : {}),

      ...(quantity
        ? {
            quantity_required: quantity,
          }
        : {}),

      ...(unit?.trim()
        ? {
            unit: unit.trim(),
          }
        : {}),

      // ========================================
      // SHIPPING
      // ========================================

      ...(destinationCountry?.trim()
        ? {
            destination_country:
              destinationCountry.trim(),
          }
        : {}),

      ...(destinationPort?.trim()
        ? {
            preferred_port:
              destinationPort.trim(),
          }
        : {}),

      ...(incoterm?.trim()
        ? {
            incoterm:
              incoterm.trim(),
          }
        : {}),

      ...(deliveryDate?.trim()
        ? {
            delivery_date:
              deliveryDate.trim(),
          }
        : {}),

      // ========================================
      // REQUIREMENTS
      // ========================================

      ...(packagingRequirements?.trim()
        ? {
            packaging_requirements:
              packagingRequirements.trim(),
          }
        : {}),

      ...(qualityRequirements?.trim()
        ? {
            quality_requirements:
              qualityRequirements.trim(),
          }
        : {}),

      ...(certifications?.trim()
        ? {
            certifications:
              certifications.trim(),
          }
        : {}),

      ...(targetPrice
        ? {
            target_price: targetPrice,
          }
        : {}),

      ...(currency?.trim()
        ? {
            currency:
              currency.trim(),
          }
        : {}),

      ...(additionalRequirements?.trim()
        ? {
            additional_requirements:
              additionalRequirements.trim(),
          }
        : {}),

      // ========================================
      // SOURCING OPTIONS
      // ========================================
      //
      // These fieldnames must exist in your
      // GlobalAtlas Sourcing RFQ DocType.
      // Remove them if they don't exist.
      //
      ...(typeof oem === "boolean"
        ? {
            oem: oem ? 1 : 0,
          }
        : {}),

      ...(typeof privateLabel === "boolean"
        ? {
            private_label:
              privateLabel ? 1 : 0,
          }
        : {}),

      source: "Website",
    };

    console.log(
      "Creating GlobalAtlas Sourcing RFQ:",
      JSON.stringify(rfqPayload, null, 2)
    );

    const rfqResponse = await fetch(
      `${frappeUrl}/api/resource/GlobalAtlas%20Sourcing%20RFQ`,
      {
        method: "POST",
        headers,
        body: JSON.stringify(rfqPayload),
        cache: "no-store",
      }
    );

    const rfqResult =
      await rfqResponse.json();

    // ==========================================
    // RFQ ERROR
    // ==========================================

    if (!rfqResponse.ok) {
      console.error(
        "RFQ creation failed:",
        JSON.stringify(rfqResult, null, 2)
      );

      return NextResponse.json(
        {
          success: false,

          message:
            "CRM Lead was created, but the sourcing RFQ could not be created.",

          lead: leadName,

          frappeStatus:
            rfqResponse.status,

          error: rfqResult,
        },
        {
          status: rfqResponse.status,
        }
      );
    }

    // ==========================================
    // 10. SUCCESS
    // ==========================================

    const rfqName =
      rfqResult?.data?.name;

    console.log(
      "GlobalAtlas Sourcing RFQ created:",
      rfqName
    );

    return NextResponse.json(
      {
        success: true,

        message:
          "Your sourcing request has been submitted successfully.",

        lead: {
          name: leadName,
        },

        rfq: {
          name: rfqName,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(
      "Request Quote API Error:",
      error
    );

    return NextResponse.json(
      {
        success: false,

        message:
          "Something went wrong while submitting your request.",

        error:
          error instanceof Error
            ? error.message
            : String(error),
      },
      { status: 500 }
    );
  }
}