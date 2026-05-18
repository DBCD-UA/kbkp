import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { name, email, phone, company, message, productTitle, productCategory, productId } = body;

    if (!name?.trim() || !email?.trim()) {
        return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT ?? 587),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
            <div style="background: #1e293b; padding: 24px 32px; border-radius: 12px 12px 0 0;">
                <h1 style="color: #fff; margin: 0; font-size: 20px;">Нова комерційна пропозиція</h1>
                <p style="color: #94a3b8; margin: 4px 0 0; font-size: 14px;">КБКП — запит від клієнта</p>
            </div>

            <div style="background: #f8fafc; padding: 24px 32px; border: 1px solid #e2e8f0; border-top: none;">
                <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; margin: 0 0 16px;">Продукт</h2>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 130px;">Назва</td>
                        <td style="padding: 8px 0; font-weight: 600; font-size: 14px;">${productTitle}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Категорія</td>
                        <td style="padding: 8px 0; font-size: 14px;">${productCategory}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; color: #64748b; font-size: 14px;">ID продукту</td>
                        <td style="padding: 8px 0; font-size: 14px; color: #94a3b8;">${productId}</td>
                    </tr>
                </table>
            </div>

            <div style="background: #fff; padding: 24px 32px; border: 1px solid #e2e8f0; border-top: none;">
                <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; margin: 0 0 16px;">Контактні дані</h2>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 130px;">Ім'я</td>
                        <td style="padding: 8px 0; font-weight: 600; font-size: 14px;">${name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Email</td>
                        <td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td>
                    </tr>
                    ${phone ? `<tr>
                        <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Телефон</td>
                        <td style="padding: 8px 0; font-size: 14px;">${phone}</td>
                    </tr>` : ''}
                    ${company ? `<tr>
                        <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Компанія</td>
                        <td style="padding: 8px 0; font-size: 14px;">${company}</td>
                    </tr>` : ''}
                </table>
            </div>

            ${message ? `
            <div style="background: #f8fafc; padding: 24px 32px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
                <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; margin: 0 0 12px;">Коментар</h2>
                <p style="font-size: 14px; color: #334155; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
            ` : ''}
        </div>
    `;

    await transporter.sendMail({
        from: `"КБКП Website" <${process.env.SMTP_FROM}>`,
        to: process.env.QUOTE_EMAIL_TO,
        subject: `Запит КП: ${productTitle} — ${name}`,
        html: emailHtml,
        replyTo: email,
    });

    return NextResponse.json({ ok: true });
}
