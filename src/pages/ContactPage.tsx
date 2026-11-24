import {FormEvent, useState} from 'react';
import {Building2, CheckCircle2, Linkedin, Mail, MapPin, Phone, Send, User} from 'lucide-react';
import {COMPANY_INFO, CONTACT_CONTENT} from '../data/siteContent';

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  consent: boolean;
  company_website: string;
}

const INITIAL_FORM: FormState = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  consent: false,
  company_website: '',
};

type SubmitStatus = 'idle' | 'submitting' | 'sent' | 'mailtoFallback' | 'error';

export function ContactPage() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const buildMailtoHref = () => {
    const subjectText = encodeURIComponent(
      form.subject.trim() ? `[SiriGro Inquiry] ${form.subject.trim()}` : 'SiriGro Consultancy Inquiry',
    );
    const bodyText = encodeURIComponent(
      [
        `Name: ${form.name.trim()}`,
        `Email: ${form.email.trim()}`,
        `Phone: ${form.phone.trim() || 'Not provided'}`,
        '',
        form.message.trim(),
      ].join('\n'),
    );
    return `mailto:${COMPANY_INFO.email}?subject=${subjectText}&body=${bodyText}`;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');

    if (form.name.trim().length < 2) {
      setStatus('error');
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (form.message.trim().length < 5) {
      setStatus('error');
      setErrorMessage('Please include a brief message describing your inquiry.');
      return;
    }
    if (!form.consent) {
      setStatus('error');
      setErrorMessage('Please confirm your consent to receive a reply via email.');
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch('/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(form),
      });

      const contentType = response.headers.get('content-type') || '';
      if (response.ok && contentType.includes('application/json')) {
        const result = (await response.json()) as {ok?: boolean; error?: string};
        if (result.ok) {
          setStatus('sent');
          setForm(INITIAL_FORM);
          return;
        }
        setStatus('error');
        setErrorMessage(result.error || 'Could not send message. Please email info@sirigro.com.');
        return;
      }

      // Static/dev preview without PHP runtime: offer verified mailto draft handoff without faking delivery
      setStatus('mailtoFallback');
    } catch {
      setStatus('mailtoFallback');
    }
  };

  return (
    <section className="bg-[#F6F8F6] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-widest text-[#1B6B3A] uppercase">
            {CONTACT_CONTENT.kicker}
          </p>
          <h1 className="mt-3 font-display text-3xl leading-tight font-medium tracking-tight text-[#0F2419] sm:text-5xl">
            {CONTACT_CONTENT.headline}
          </h1>
          <p className="mt-5 text-lg font-semibold text-[#0F2419]">{CONTACT_CONTENT.leadHeading}</p>
          <p className="mt-2 max-w-[65ch] text-base leading-relaxed text-[#3E5246] sm:text-[17px]">
            {CONTACT_CONTENT.leadBody}
          </p>
        </div>

        {/* Clean Two-Column Contact Directory + Form */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Structured Contact Details (fixes Website_slordigheden SC3 alignment & vertical spacing) */}
          <aside className="flex flex-col justify-between rounded-2xl border border-[#D6E0D8] bg-white p-6 sm:p-8 lg:col-span-5">
            <div>
              <h2 className="font-display text-2xl font-medium text-[#0F2419]">Contact details</h2>
              <p className="mt-2 text-sm text-[#3E5246]">
                Direct access to principal consultant Andro Tjin.
              </p>

              <dl className="mt-8 divide-y divide-[#ECF1ED]">
                <div className="flex items-start gap-4 py-4 first:pt-0">
                  <User className="mt-0.5 h-5 w-5 shrink-0 text-[#1B6B3A]" aria-hidden="true" />
                  <div>
                    <dt className="text-xs font-semibold tracking-wider text-[#5A6F62] uppercase">
                      Consultant
                    </dt>
                    <dd className="mt-1 text-base font-medium text-[#0F2419]">
                      {COMPANY_INFO.founderName}
                    </dd>
                    <dd className="text-sm text-[#3E5246]">{COMPANY_INFO.founderRole}</dd>
                  </div>
                </div>

                <div className="flex items-start gap-4 py-4">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#1B6B3A]" aria-hidden="true" />
                  <div>
                    <dt className="text-xs font-semibold tracking-wider text-[#5A6F62] uppercase">
                      Phone
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={COMPANY_INFO.phoneHref}
                        className="inline-flex min-h-[36px] items-center text-base font-medium text-[#0F2419] transition-colors hover:text-[#1B6B3A]"
                      >
                        {COMPANY_INFO.phoneDisplay}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-4 py-4">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#1B6B3A]" aria-hidden="true" />
                  <div>
                    <dt className="text-xs font-semibold tracking-wider text-[#5A6F62] uppercase">
                      Email
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={COMPANY_INFO.emailHref}
                        className="inline-flex min-h-[36px] items-center text-base font-medium text-[#0F2419] transition-colors hover:text-[#1B6B3A]"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-4 py-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#1B6B3A]" aria-hidden="true" />
                  <div>
                    <dt className="text-xs font-semibold tracking-wider text-[#5A6F62] uppercase">
                      Postal Address
                    </dt>
                    <dd className="mt-1 text-base text-[#0F2419]">{COMPANY_INFO.address}</dd>
                  </div>
                </div>

                <div className="flex items-start gap-4 py-4 last:pb-0">
                  <Building2
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#1B6B3A]"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-xs font-semibold tracking-wider text-[#5A6F62] uppercase">
                      Registration
                    </dt>
                    <dd className="mt-1 text-sm text-[#3E5246]">
                      Chamber of Commerce (KvK): <strong className="text-[#0F2419]">{COMPANY_INFO.kvk}</strong>
                    </dd>
                    <dd className="mt-0.5 text-sm text-[#3E5246]">
                      VAT: <strong className="text-[#0F2419]">{COMPANY_INFO.vat}</strong>
                    </dd>
                  </div>
                </div>
              </dl>
            </div>

            <div className="mt-8 border-t border-[#D6E0D8] pt-6">
              <p className="text-xs font-semibold tracking-wider text-[#5A6F62] uppercase">
                Follow Us
              </p>
              <a
                href={COMPANY_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex min-h-[44px] items-center gap-2.5 rounded-lg border border-[#D6E0D8] bg-[#F6F8F6] px-4 py-2 text-sm font-semibold text-[#0F2419] transition-colors hover:border-[#1B6B3A] hover:text-[#1B6B3A]"
              >
                <Linkedin className="h-4 w-4 text-[#1B6B3A]" aria-hidden="true" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </aside>

          {/* Right Column: Accessible Contact Form */}
          <div className="rounded-2xl border border-[#D6E0D8] bg-white p-6 sm:p-8 lg:col-span-7">
            <h2 className="font-display text-2xl font-medium text-[#0F2419]">Send a message</h2>
            <p className="mt-2 text-sm text-[#3E5246]">
              Share a brief overview of your project, challenge or question.
            </p>

            {status === 'sent' ? (
              <div
                role="status"
                className="mt-8 rounded-xl border border-[#B5D6C0] bg-[#ECF1ED] p-6"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-[#1B6B3A]" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#0F2419]">
                      Thank you for your message
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#3E5246]">
                      Your inquiry has been sent to {COMPANY_INFO.email}. Andro Tjin will respond
                      promptly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="mt-5 inline-flex min-h-[44px] items-center rounded-lg border border-[#1B6B3A] px-4 py-2 text-sm font-semibold text-[#1B6B3A] transition-colors hover:bg-white"
                    >
                      Send another inquiry
                    </button>
                  </div>
                </div>
              </div>
            ) : status === 'mailtoFallback' ? (
              <div
                role="status"
                className="mt-8 rounded-xl border border-[#B5D6C0] bg-[#ECF1ED] p-6"
              >
                <h3 className="text-lg font-semibold text-[#0F2419]">
                  Email server handler unavailable in preview mode
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#3E5246]">
                  When hosted on Verpex cPanel, this form delivers directly via PHP mail. In this
                  static preview environment, you can send your pre-filled inquiry directly with
                  your email client:
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={buildMailtoHref()}
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#1B6B3A] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#14532D]"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    <span>Open pre-filled email to {COMPANY_INFO.email}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="inline-flex min-h-[44px] items-center rounded-lg border border-[#D6E0D8] bg-white px-4 py-2.5 text-sm font-medium text-[#0F2419] transition-colors hover:border-[#1B6B3A]"
                  >
                    Edit message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
                {/* Spam Honeypot */}
                <div className="sr-only" aria-hidden="true">
                  <label htmlFor="company_website">Company website</label>
                  <input
                    id="company_website"
                    name="company_website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.company_website}
                    onChange={(e) => setForm({...form, company_website: e.target.value})}
                  />
                </div>

                {status === 'error' && errorMessage && (
                  <div
                    role="alert"
                    className="rounded-lg border border-[#DC2626]/30 bg-[#FEF2F2] px-4 py-3 text-sm font-medium text-[#991B1B]"
                  >
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-semibold text-[#0F2419]"
                    >
                      Full Name <span className="text-[#1B6B3A]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => setForm({...form, name: e.target.value})}
                      className="mt-2 block min-h-[44px] w-full rounded-lg border border-[#D6E0D8] bg-white px-3.5 py-2.5 text-base text-[#0F2419] placeholder:text-[#7D9988] focus:border-[#1B6B3A] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-semibold text-[#0F2419]"
                    >
                      Email Address <span className="text-[#1B6B3A]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@organisation.com"
                      value={form.email}
                      onChange={(e) => setForm({...form, email: e.target.value})}
                      className="mt-2 block min-h-[44px] w-full rounded-lg border border-[#D6E0D8] bg-white px-3.5 py-2.5 text-base text-[#0F2419] placeholder:text-[#7D9988] focus:border-[#1B6B3A] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-sm font-semibold text-[#0F2419]"
                    >
                      Phone Number <span className="font-normal text-[#5A6F62]">(optional)</span>
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+31 6 0000 0000"
                      value={form.phone}
                      onChange={(e) => setForm({...form, phone: e.target.value})}
                      className="mt-2 block min-h-[44px] w-full rounded-lg border border-[#D6E0D8] bg-white px-3.5 py-2.5 text-base text-[#0F2419] placeholder:text-[#7D9988] focus:border-[#1B6B3A] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-sm font-semibold text-[#0F2419]"
                    >
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      placeholder="e.g. Seed enhancement / Biologicals"
                      value={form.subject}
                      onChange={(e) => setForm({...form, subject: e.target.value})}
                      className="mt-2 block min-h-[44px] w-full rounded-lg border border-[#D6E0D8] bg-white px-3.5 py-2.5 text-base text-[#0F2419] placeholder:text-[#7D9988] focus:border-[#1B6B3A] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-semibold text-[#0F2419]"
                  >
                    Message <span className="text-[#1B6B3A]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    placeholder="How can SiriGro support your organisation?"
                    value={form.message}
                    onChange={(e) => setForm({...form, message: e.target.value})}
                    className="mt-2 block w-full rounded-lg border border-[#D6E0D8] bg-white px-3.5 py-2.5 text-base text-[#0F2419] placeholder:text-[#7D9988] focus:border-[#1B6B3A] focus:outline-none"
                  />
                </div>

                <div className="flex items-start gap-3 pt-1">
                  <input
                    id="contact-consent"
                    name="consent"
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => setForm({...form, consent: e.target.checked})}
                    className="mt-1 h-4 w-4 rounded border-[#D6E0D8] text-[#1B6B3A] focus:ring-[#1B6B3A]"
                  />
                  <label htmlFor="contact-consent" className="text-sm leading-relaxed text-[#3E5246]">
                    I consent to SiriGro using the submitted details to reply to my inquiry via
                    email. <span className="text-[#1B6B3A]">*</span>
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex min-h-[48px] items-center gap-2 rounded-lg bg-[#1B6B3A] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#14532D] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <Send className="h-4 w-4" aria-hidden="true" />
                    <span>{status === 'submitting' ? 'Sending inquiry…' : 'Send inquiry'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
