import { feedbackOptions, FeedbackType } from ".."
import { CloseButton } from "../../CloseButton";

interface FeedbackOptionStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackOptionStep({ onFeedbackTypeChanged }: FeedbackOptionStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

      <div className="py-8 flex gap-2 w-full">
        { Object.entries(feedbackOptions).map(([key, value]) => {
          return (
            <button 
              type="button"
              className="bg-zinc-800 w-24 py-5 rounded-lg flex-1 flex flex-col items-center gap-2 border-2 border-transparent outline-none transition-colors hover:border-brand-500 focus:border-brand-500"
              key={key}
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          )
        }) }
      </div>
    </>
  )
}