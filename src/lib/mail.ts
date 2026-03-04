import nodemailer from "nodemailer"

export async function sendPartnerApprovedMail(email: string, companyName: string) {

  const transporter = nodemailer.createTransport({
    service: "gmail", // 🔥 Bunu kullan
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  await transporter.sendMail({
    from: `"LSG Teknoloji" <${process.env.SMTP_USER}>`,
    to: email,
    subject: "Technology Partner Başvurunuz Onaylandı 🎉",
    html: `
      <div style="font-family: Arial, sans-serif; padding: 24px;">
        <h2>Merhaba ${companyName},</h2>
        <p>Technology Partner başvurunuz başarıyla onaylanmıştır.</p>
        <p>Teknik ekibimiz kısa süre içinde sizinle iletişime geçecektir.</p>
        <br/>
        <strong>LSG Teknoloji</strong>
      </div>
    `,
  })
}

export async function sendPartnerRejectedMail(
  email: string,
  companyName: string
) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  await transporter.sendMail({
    from: `"LSG Teknoloji" <${process.env.SMTP_USER}>`,
    to: email,
    subject: "Technology Partner Başvurunuz Hakkında",
    html: `
      <div style="font-family: Arial, sans-serif; padding: 24px;">
        <h2>Merhaba ${companyName},</h2>
        
        <p>Technology Partner başvurunuzu detaylı şekilde değerlendirdik.</p>

        <p>
          Şu aşamada programımıza dahil edemiyoruz ancak
          ilerleyen dönemlerde tekrar değerlendirmek isteriz.
        </p>

        <p>
          İlginiz ve güveniniz için teşekkür ederiz.
        </p>

        <br/>
        <strong>LSG Teknoloji Partner Ekibi</strong>
      </div>
    `,
  })
}

