import { AmbientColor } from '@/components/decorations/ambient-color';
import { Register } from '@/components/register';

export async function generateStaticParams() {
  // Return supported locales for static export
  return [
    { locale: 'en' },
    { locale: 'tr' }
  ];
}

export default function RegisterPage() {
  return (
    <div className="relative overflow-hidden">
      <AmbientColor />
      <Register />
    </div>
  );
}
