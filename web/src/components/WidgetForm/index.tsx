import { useState } from "react";

import bugImgUrl from '../../assets/bug.svg'
import ideaImgUrl from '../../assets/idea.svg'
import thoughtImgUrl from '../../assets/thought.svg'

import { FeedbackOptionStep } from "./Steps/FeedbackOptionStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";
  
export const feedbackOptions = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImgUrl,
      alt: 'Imagem de um inseto'
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImgUrl,
      alt: 'Imagem de uma lâmpada'
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImgUrl,
      alt: 'Imagem de uma nuvem de pensamento'
    },
  }
}

export type FeedbackType = keyof typeof feedbackOptions

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)

  function handleResetFeedback() {
    setFeedbackSent(false)
    setFeedbackType(null)
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      { feedbackSent ? (
        <FeedbackSuccessStep onResetFeedbackRequested={handleResetFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackOptionStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onResetFeedbackRequested={handleResetFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      ) }

      <footer className="text-zinc-400 text-xs">
        Feito com ♥ por <a className="underline underline-offset-2" href="https://github.com/sampaiocode" target="_blank">Deivit Eduardo</a>
      </footer>
    </div>
  )
}