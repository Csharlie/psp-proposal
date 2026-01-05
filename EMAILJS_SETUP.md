# EmailJS Beállítási Útmutató

## 1. Regisztráció az EmailJS-re

1. Menj a https://www.emailjs.com oldalra
2. Kattints a "Sign Up Free" gombra
3. Hozz létre egy fiókot (Google/GitHub/Email)

## 2. Email Service hozzáadása

1. Bejelentkezés után kattints az "Email Services" menüpontra
2. Kattints az "Add New Service" gombra
3. Válaszd ki az email szolgáltatódat (Gmail ajánlott)
4. Kövesd a lépéseket:
   - Gmail esetén: Engedélyezd az EmailJS hozzáférést
   - Másold ki a **Service ID**-t (pl. "service_abc123")

## 3. Email Template létrehozása

1. Kattints az "Email Templates" menüpontra
2. Kattints a "Create New Template" gombra
3. Állítsd be a template-et:

### Template beállítások:

**Template Name:** PSPro Proposal Request

**Subject:** 
```
Új ajánlat kérés - {{project_name}}
```

**Content (HTML):**
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2>Új ajánlat kérés érkezett!</h2>
  
  <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <h3>Ügyfél adatok:</h3>
    <p><strong>Név:</strong> {{client_name}}</p>
    <p><strong>Email:</strong> {{client_email}}</p>
    <p><strong>Cég:</strong> {{company_name}}</p>
    <p><strong>Projekt:</strong> {{project_name}}</p>
  </div>
  
  <p><strong>Ajánlat URL:</strong><br>
  <a href="{{quote_url}}">{{quote_url}}</a></p>
  
  <hr style="margin: 30px 0;">
  
  <p style="color: #666; font-size: 12px;">
    Ez egy automatikus email az ajánlatkérő rendszerből.
  </p>
</div>
```

**To Email (Neked):**
```
hello@pspro.hu
```

**Reply To (Ügyfélnek):**
```
{{client_email}}
```

4. Mentsd el a template-et
5. Másold ki a **Template ID**-t (pl. "template_xyz789")

## 4. Public Key megszerzése

1. Kattints az "Account" menüpontra
2. Az "API Keys" szekcióban találod a **Public Key**-t
3. Másold ki (pl. "Ab1Cd2Ef3Gh4...")

## 5. Beállítások a kódban

Nyisd meg a következő fájlt:
```
src/config/email.ts
```

Cseréld ki a placeholder értékeket:

```typescript
export const EMAIL_CONFIG = {
  publicKey: 'Ab1Cd2Ef3Gh4...',        // Az Account -> API Keys-ből
  serviceId: 'service_abc123',         // Email Services -> Service ID
  templateId: 'template_xyz789',       // Email Templates -> Template ID
  recipientEmail: 'hello@pspro.hu',    // A saját email címed
};
```

## 6. Tesztelés

1. Build-eld a projektet: `npm run build`
2. Töltsd fel az FTP-re
3. Nyisd meg az oldalt böngészőben
4. Kattints az "Ez az ajánlat érdekel" gombra
5. Töltsd ki az űrlapot egy teszt email címmel
6. Ellenőrizd, hogy megérkezik-e az email neked és a teszt címre

## 7. Díjmentes korlátok

- **200 email/hónap** ingyen
- Ha többre van szükség, fizetős csomagok érhetők el

## Hibaelhárítás

**Hiba: "Service ID not found"**
- Ellenőrizd, hogy jól másoltad-e be a Service ID-t

**Hiba: "Template ID not found"**
- Ellenőrizd, hogy jól másoltad-e be a Template ID-t

**Hiba: "Public Key invalid"**
- Ellenőrizd, hogy az Account -> API Keys oldalról másoltad-e

**Az email nem érkezik meg:**
- Nézd meg az EmailJS Dashboard -> History oldalon a küldési státuszt
- Ellenőrizd a spam mappát
- Győződj meg róla, hogy a template "To Email" mező helyesen van kitöltve

## Automatikus másolat az ügyfélnek

Ha szeretnéd, hogy az ügyfél is kapjon egy másolatot:

1. A Template-ben add hozzá a BCC mezőhöz: `{{client_email}}`
2. Vagy hozz létre egy második template-et csak az ügyfélnek
3. És küldj két emailt (egyet neked, egyet az ügyfélnek)

Ehhez módosítsd a `QuoteEmailModal.tsx` fájlt a `handleSubmit` függvényben.
