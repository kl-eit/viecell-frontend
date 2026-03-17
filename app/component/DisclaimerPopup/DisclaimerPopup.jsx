"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CloseIcon } from "@/app/shared/icons/CloseIcon";

const STORAGE_KEY = "viecell_disclaimer_dismissed_at_v1";
const SHOW_DELAY_MS = 5000;
const EXPIRY_DAYS = 30;
const EXPIRY_MS = EXPIRY_DAYS * 24 * 60 * 60 * 1000;

export default function DisclaimerPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const dismissedAtRaw = window.localStorage.getItem(STORAGE_KEY);
      const dismissedAt = dismissedAtRaw ? Number(dismissedAtRaw) : 0;
      const isDismissedAndValid =
        Number.isFinite(dismissedAt) && dismissedAt > 0
          ? Date.now() - dismissedAt < EXPIRY_MS
          : false;

      if (!isDismissedAndValid) {
        const timer = window.setTimeout(() => setIsOpen(true), SHOW_DELAY_MS);
        return () => window.clearTimeout(timer);
      }
    } catch {
      const timer = window.setTimeout(() => setIsOpen(true), SHOW_DELAY_MS);
      return () => window.clearTimeout(timer);
    };
  }, []);

  const dismiss = () => {
    setIsOpen(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {
      // ignore
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <button
        type="button"
        className="absolute inset-0 bg-black/50"
        aria-label="Close disclaimer overlay"
        onClick={dismiss}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Regulatory and medical disclaimer"
        className="relative w-full max-w-4xl rounded-2xl border border-lime-200 bg-white shadow-xl"
      >
        <div className="p-4 sm:p-6">
        <button
            type="button"
            onClick={dismiss}
            className="shrink-0 rounded-lg p-2 text-neutral-600 hover:text-lime-900 hover:bg-lime-50 transition-colors cursor-pointer absolute top-3 right-3"
            aria-label="Dismiss disclaimer"
          >
            <CloseIcon />
          </button>
          <div className="min-w-0 flex-1">
            <div className="text-lime-900 font-['Roboto_Condensed'] font-bold text-base sm:text-lg leading-6">
              Regulatory &amp; Medical Disclaimer
            </div>

            <div className="mt-3 text-neutral-600 text-sm sm:text-[15px] leading-6 max-h-[60vh] overflow-auto pr-2">
              <p>
                Viecell is committed to the responsible advancement of
                regenerative medicine in accordance with the regulatory
                framework of India.
              </p>
              <p className="mt-2">
                Stem cell–based interventions are an evolving area of biomedical
                science. As per the prevailing guidelines issued by the
                Government of India, the Department of Health Research (DHR),
                Indian Council of Medical Research (ICMR), and applicable
                judicial directions,{" "}
                <strong>
                  stem cell therapy is considered standard medical care only for
                  specific hematopoietic stem cell transplantation indications
                  approved by the Ministry of Health and Family Welfare.
                </strong>
              </p>
              <p className="mt-2">
                Except for such approved indications,{" "}
                <strong>
                  stem cell–based interventions may only be offered within the
                  framework of ethically approved scientific research or
                  clinical studies conducted in accordance with applicable
                  regulatory approvals.
                </strong>
              </p>
              <p className="mt-2">Viecell’s</p>
              <ul className="mt-1 list-disc pl-5">
                <li>
                  Adheres to all applicable{" "}
                  <strong>ICMR National Guidelines for Stem Cell Research.</strong>
                </li>
                <li>
                  Conducts regenerative medicine activities{" "}
                  <strong>
                    only under appropriate ethical oversight and regulatory
                    compliance where applicable.
                  </strong>
                </li>
              </ul>
              <p className="mt-2">
                Information provided on this website is{" "}
                <strong>
                  intended solely for educational and scientific awareness
                  purposes and should not be interpreted as a claim of cure,
                  guaranteed treatment outcome, or replacement for standard
                  medical care.
                </strong>
              </p>
              <p className="mt-2">
                Patients are strongly advised to consult qualified medical
                professionals before making healthcare decisions.
              </p>
              <p className="mt-2">
                Viecell reserves the right to modify, update, or revise
                information on this website to maintain compliance with
                evolving scientific evidence and regulatory requirements in
                India.
              </p>
            </div>

         

            <div className="mt-5 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={dismiss}
                className="inline-flex items-center justify-center btn fw-500 rounded-[100px] cursor-pointer group relative inline-flex  bg-lime-900 text-white hover:bg-lime-800 text-sm px-6 py-3 "
              >
               I Understand
              </button>
            </div>
          </div>

        
        </div>
      </div>
    </div>
  );
}

