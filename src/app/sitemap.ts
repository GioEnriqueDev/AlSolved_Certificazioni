import { MetadataRoute } from 'next';
import { certifications } from '@/data/certificazioniData';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.alsolvedcertificazioni.com';

    const routes = ['', '/check-up', '/certificazioni', '/chi-siamo', '/metodo', '/contatti'].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    const certificationRoutes = certifications.map((cert) => ({
        url: `${baseUrl}/certificazioni/${cert.id}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...routes, ...certificationRoutes];
}
