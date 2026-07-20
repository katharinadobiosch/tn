"use client";

import { useActionState, useEffect, useState } from "react";
import {
  updateSiteSettings,
  type SiteSettingsState,
} from "@/app/actions/siteSettingsActions";
import { weekdays, type OpeningHoursSchedule } from "@/lib/siteSettings.shared";

type OpeningHoursFormProps = {
  openingHoursSchedule: OpeningHoursSchedule;
};

const initialState: SiteSettingsState = {
  success: false,
  message: "",
};

export function OpeningHoursForm({
  openingHoursSchedule,
}: OpeningHoursFormProps) {
  const [state, formAction, isPending] = useActionState(
    updateSiteSettings,
    initialState,
  );

  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (!state.success) {
      return;
    }

    setShowSuccess(true);

    const timeout = window.setTimeout(() => {
      setShowSuccess(false);
    }, 2500);

    return () => window.clearTimeout(timeout);
  }, [state]);

  const buttonText = isPending
    ? "Wird gespeichert …"
    : showSuccess
      ? "✓ Gespeichert"
      : "Öffnungszeiten speichern";

  return (
    <form
      action={formAction}
      className="mb-12 border-t border-[#24231F]/15 pt-8"
    >
      <h2 className="font-heading text-3xl">Öffnungszeiten</h2>

      <div className="mt-6 grid gap-4">
        {weekdays.map(({ key, label }) => {
          const day = openingHoursSchedule[key];

          return (
            <div
              key={key}
              className="grid items-end gap-4 md:grid-cols-[160px_1fr_1fr_160px]"
            >
              <p className="pb-3 text-sm">{label}</p>

              <div>
                <label htmlFor={`${key}_from`} className="mb-2 block text-sm">
                  Von
                </label>

                <input
                  id={`${key}_from`}
                  name={`${key}_from`}
                  type="time"
                  defaultValue={day.from}
                  className="w-full border border-[#24231F]/20 bg-transparent px-4 py-3"
                />
              </div>

              <div>
                <label htmlFor={`${key}_to`} className="mb-2 block text-sm">
                  Bis
                </label>

                <input
                  id={`${key}_to`}
                  name={`${key}_to`}
                  type="time"
                  defaultValue={day.to}
                  className="w-full border border-[#24231F]/20 bg-transparent px-4 py-3"
                />
              </div>

              <label className="flex gap-3 pb-3 text-sm">
                <input
                  name={`${key}_closed`}
                  type="checkbox"
                  defaultChecked={day.closed}
                />
                Geschlossen
              </label>
            </div>
          );
        })}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="mt-8 min-w-52 bg-[#1F2F20] px-6 py-3 text-sm text-white transition-colors duration-200 hover:bg-[#2F432F] disabled:cursor-wait disabled:opacity-60"
      >
        {buttonText}
      </button>

      {state.message && !state.success && (
        <p className="mt-3 text-sm text-red-700" role="alert">
          {state.message}
        </p>
      )}
    </form>
  );
}
