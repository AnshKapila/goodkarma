"use client";

import { useState } from "react";
import { Check, Copy, MessageCircle, Mail } from "lucide-react";

interface ShareBarProps {
  title: string;
  urlPath?: string;
  showColleagueShare?: boolean;
  className?: string;
}

export function ShareBar({
  title,
  urlPath,
  showColleagueShare = false,
  className = "",
}: ShareBarProps) {
  const [copied, setCopied] = useState(false);

  const getFullUrl = () => {
    if (typeof window !== "undefined") {
      return urlPath ? `${window.location.origin}${urlPath}` : window.location.href;
    }
    return `https://goodkarmabrand.com${urlPath || ""}`;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getFullUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  const shareText = encodeURIComponent(`${title} — Good Karma Naturally Dyed Organic Cotton:`);
  const shareUrl = encodeURIComponent(getFullUrl());
  const whatsappUrl = `https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}`;

  const colleagueSubject = encodeURIComponent(`Clinical Resource: ${title} — Good Karma`);
  const colleagueBody = encodeURIComponent(
    `Hello,\n\nI thought you might find this clinical resource and textile analysis interesting:\n\n${title}\n${getFullUrl()}\n\nGood Karma provides 100% GOTS-certified organic cotton innerwear, naturally dyed and free from elastane, synthetic stretch, and PFAS fixatives.`
  );
  const mailtoUrl = `mailto:?subject=${colleagueSubject}&body=${colleagueBody}`;

  return (
    <div className={`flex flex-wrap items-center gap-3 pt-6 border-t border-border/50 text-xs text-muted-foreground ${className}`}>
      <span className="font-medium uppercase tracking-wider text-ink/70 mr-1">Share guide:</span>

      {/* Copy Link */}
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/70 bg-white hover:bg-paper hover:text-ink transition-colors font-medium cursor-pointer shadow-2xs"
        aria-label="Copy page link"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-sage" />
            <span className="text-sage font-semibold">Link copied!</span>
          </>
        ) : (
          <>
            <Copy className="w-3.5 h-3.5 text-muted-foreground" />
            <span>Copy link</span>
          </>
        )}
      </button>

      {/* WhatsApp Share */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-200 bg-emerald-50/50 hover:bg-emerald-100/60 text-emerald-800 transition-colors font-medium shadow-2xs"
        aria-label="Share on WhatsApp"
      >
        <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
        <span>WhatsApp</span>
      </a>

      {/* Send to a Colleague (Doctors page) */}
      {showColleagueShare && (
        <a
          href={mailtoUrl}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sage/40 bg-sage/10 hover:bg-sage/20 text-sage transition-colors font-medium shadow-2xs"
          aria-label="Send to a colleague via email"
        >
          <Mail className="w-3.5 h-3.5 text-sage" />
          <span>Send to a colleague</span>
        </a>
      )}
    </div>
  );
}
