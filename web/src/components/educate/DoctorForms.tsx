"use client";

import { useState } from "react";
import { Download, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DoctorResourcePackForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-sage/10 border border-sage/30 rounded-xl p-6 text-center max-w-[320px]">
        <CheckCircle2 className="w-8 h-8 text-sage mx-auto mb-2" />
        <h4 className="text-sm font-semibold text-ink mb-1">Kit Dispatched</h4>
        <p className="text-xs text-muted-foreground font-light">
          The 2026 Clinical Resource Pack (PDF) has been dispatched to <strong className="text-ink">{email}</strong>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full md:w-auto flex flex-col gap-3 min-w-[280px]">
      <input 
        type="text" 
        placeholder="Dr. Full Name / Clinic" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        required 
        className="px-4 py-2.5 rounded-lg border border-border/80 text-xs text-ink focus:outline-none focus:border-sage bg-white"
      />
      <input 
        type="email" 
        placeholder="practice@clinic.com" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required 
        className="px-4 py-2.5 rounded-lg border border-border/80 text-xs text-ink focus:outline-none focus:border-sage bg-white"
      />
      <Button variant="primary" icon="download" fullWidthMobile={true}>
        Download Resource Pack
      </Button>
    </form>
  );
}

export function DoctorConsultationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    clinic: "",
    email: "",
    address: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 md:p-10 rounded-xl border border-sage/40 shadow-sm text-center">
        <CheckCircle2 className="w-12 h-12 text-sage mx-auto mb-3" />
        <h3 className="text-xl font-editorial italic text-ink mb-2">
          Inquiry Received
        </h3>
        <p className="text-p2 text-muted-foreground font-light max-w-[500px] mx-auto">
          Thank you, {formData.name || "Doctor"}. Our clinical liaison team will review your credentials and dispatch your practice swatch kit within two business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-paper p-8 rounded-xl border border-border/60 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-ink mb-1">Full Name & Title</label>
          <input 
            type="text" 
            placeholder="e.g. Dr. Priya Sharma, MD" 
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required 
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-xs text-ink focus:outline-none focus:border-sage"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-ink mb-1">Primary Specialty</label>
          <input 
            type="text" 
            placeholder="e.g. Dermatology / Gynaecology" 
            value={formData.specialty}
            onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
            required 
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-xs text-ink focus:outline-none focus:border-sage"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-ink mb-1">Clinic or Hospital Name</label>
          <input 
            type="text" 
            placeholder="Practice Name" 
            value={formData.clinic}
            onChange={(e) => setFormData({ ...formData, clinic: e.target.value })}
            required 
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-xs text-ink focus:outline-none focus:border-sage"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-ink mb-1">Professional Email</label>
          <input 
            type="email" 
            placeholder="clinician@hospital.org" 
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required 
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-xs text-ink focus:outline-none focus:border-sage"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-ink mb-1">Clinic Mailing Address (for Swatch Kit delivery)</label>
        <textarea 
          rows={3} 
          placeholder="Enter practice address..." 
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          required 
          className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-xs text-ink focus:outline-none focus:border-sage resize-none"
        />
      </div>

      <Button variant="primary" icon="arrow">
        Submit Practice Inquiry
      </Button>
    </form>
  );
}
