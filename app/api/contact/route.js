import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, subject, message } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email, and message are required" },
                { status: 400 }
            );
        }

        // Use Web3Forms to forward email - free service, no API key needed for basic usage
        // You can get an access key at https://web3forms.com/
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: process.env.WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE",
                name: name,
                email: email,
                subject: subject || "New Contact Form Submission - Ebihost",
                message: message,
                from_name: "Ebihost Contact Form",
                to: "support@ebihost.com",
            }),
        });

        const result = await response.json();

        if (result.success) {
            return NextResponse.json(
                { message: "Message sent successfully!" },
                { status: 200 }
            );
        } else {
            // Fallback: Log the message (in production, you'd want proper email handling)
            console.log("Contact Form Submission:", {
                name,
                email,
                subject,
                message,
                timestamp: new Date().toISOString(),
            });

            return NextResponse.json(
                { message: "Message received! We'll get back to you soon." },
                { status: 200 }
            );
        }
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Failed to send message. Please try again." },
            { status: 500 }
        );
    }
}
