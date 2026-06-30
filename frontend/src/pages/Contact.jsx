import { useState } from 'react';
import { Copy, Check, Mail } from 'lucide-react';
import { CONTACT } from '@/constants/testIds';

const EMAIL = 'Cristianopenido@hotmail.com';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch (e) {
      const ta = document.createElement('textarea');
      ta.value = EMAIL;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <div data-testid={CONTACT.page} className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <p className="overline mb-6">Contato</p>
          <h1 className="font-display text-5xl md:text-7xl font-light tracking-tighter leading-[1] text-ink">
            Escreva
            <br />
            <span className="italic text-burgundy">uma carta</span>
          </h1>
          <p className="mt-8 font-body text-lg text-graphite leading-relaxed">
            Para tratativas literárias, convites para eventos, parcerias editoriais
            ou simples leitura compartilhada, escreva diretamente ao autor.
          </p>
        </div>

        <div className="lg:col-span-7 lg:pt-4">
          <div className="bg-cream border border-stone-200 p-8 md:p-12 shadow-[inset_0_0_60px_rgba(0,0,0,0.02)]">
            <p className="overline mb-6 flex items-center gap-2">
              <Mail size={12} className="text-burgundy" />
              E-mail
            </p>
            <p
              data-testid={CONTACT.emailDisplay}
              className="font-display text-3xl md:text-5xl text-ink leading-tight break-all"
            >
              {EMAIL}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={handleCopy}
                data-testid={CONTACT.copyButton}
                className="group inline-flex items-center gap-3 bg-ink text-ivory px-6 py-4 text-xs uppercase tracking-[0.25em] hover:bg-burgundy transition-colors duration-500"
              >
                {copied ? (
                  <>
                    <Check size={14} /> Copiado
                  </>
                ) : (
                  <>
                    <Copy size={14} /> Copiar endereço
                  </>
                )}
              </button>

              <a
                href={`mailto:${EMAIL}`}
                data-testid={CONTACT.mailtoLink}
                className="inline-flex items-center gap-2 px-6 py-4 text-xs uppercase tracking-[0.25em] text-graphite hover:text-burgundy transition-colors duration-500 border border-stone-300 hover:border-burgundy"
              >
                Abrir no e-mail
              </a>
            </div>
          </div>

          <p className="mt-8 text-sm text-ash font-body italic leading-relaxed">
            “A escrita é a arte de transformar o silêncio em forma. Toda correspondência
            atravessa este mesmo gesto.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
