import { ArrowLeft } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { FeedbackType, feedbackOptions } from '..';
import { api } from '../../../lib/api';

import { CloseButton } from '../../CloseButton';
import { Loading } from '../../Loading';
import { ScreenshotButton } from '../ScreenshotButton';

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onResetFeedbackRequested: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onResetFeedbackRequested,
  onFeedbackSent
}: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState('');
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  const feedbackTypeInfo = feedbackOptions[feedbackType];

  async function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();

    setIsSendingFeedback(true);

    // console.log(
    //   commet,
    //   screenshot
    // );

    await api.post('/feedbacks', {
      type: feedbackType,
      comment,
      screenshot
    });

    setIsSendingFeedback(false);
    onFeedbackSent();
  }

  return (
    <>
      <header>
        <button
          type="button"
          className="text-zinc-400 hover:text-zinc-100 absolute top-5 left-5"
          onClick={onResetFeedbackRequested}
        >
          <ArrowLeft className="w-4 h-4" weight="bold" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className="w-6 h-6"
          />
          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>

      <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
        <textarea
          className="bg-transparent border-zinc-600 placeholder-zinc-400 text-zinc-100 text-sm min-w-[304px] w-full min-h-[112px] rounded-md outline-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none"
          placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
          onChange={e => setComment(e.target.value)}
        />

        <footer className="mt-2 flex items-center gap-2">
          <ScreenshotButton onScreenshotTook={setScreenshot} screenshot={screenshot} />

          <button
            type="submit"
            className="bg-brand-500 text-zinc-100 p-2 rounded-md flex-1 flex justify-center items-center text-sm border-transparent hover:bg-brand-300 transition-colors outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-brand-500"
            disabled={comment.length === 0 || isSendingFeedback}
          >
            {isSendingFeedback ? <Loading /> : 'Enviar feedback'}
          </button>
        </footer>
      </form>
    </>
  );
}
