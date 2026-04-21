import type { FaqItem } from "@/core/types/content";

type FaqItemRowProps = {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
};

export function FaqItemRow({ item, isOpen, onToggle, id }: FaqItemRowProps) {
  const panelId = `${id}-panel`;
  const buttonId = `${id}-button`;

  return (
    <article className="rounded-2xl border border-stroke bg-white p-4 md:p-6">
      <h3>
        <button
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 text-left text-lg font-semibold"
        >
          <span>{item.question}</span>
          <span className="text-2xl text-accent" aria-hidden="true">
            {isOpen ? "−" : "+"}
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] pt-3" : "grid-rows-[0fr]"}`}
      >
        <p className="overflow-hidden text-base leading-7 text-muted">{item.answer}</p>
      </div>
    </article>
  );
}
