import StringArtScreenshotGenerator from './StringArtScreenshotClient';
import { readFile } from 'fs/promises';
import { join } from 'path';

const locales = ['en', 'es', 'pt', 'fr', 'de', 'it', 'ja', 'ko', 'zh', 'ru'];

async function getStringArtTranslations(locale: string) {
  try {
    const filePath = join(process.cwd(), 'locales', locale, 'stringart.json');
    const fileContent = await readFile(filePath, 'utf-8');
    return JSON.parse(fileContent);
  } catch {
    const fallbackPath = join(process.cwd(), 'locales', 'en', 'stringart.json');
    const fallbackContent = await readFile(fallbackPath, 'utf-8');
    return JSON.parse(fallbackContent);
  }
}

export default async function StringArtScreenshotPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const translations = await getStringArtTranslations(locale);
  
  return <StringArtScreenshotGenerator locale={locale} translations={translations} />;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}