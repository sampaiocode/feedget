import { CloseButton } from "../../CloseButton";
import successImage from '../../../assets/success.svg'

interface FeedbackSuccessStepProps {
  onResetFeedbackRequested: () => void;
}

export function FeedbackSuccessStep({ onResetFeedbackRequested }: FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="py-10 w-[304px] flex flex-col items-center">
        <img src={successImage} alt="Imagem de confirmação" />

        <span className="text-xl mt-2">Agradecemos o feedback!</span>

        <button 
          type="button" 
          className="bg-zinc-800 px-6 py-2 mt-6 leading-6 rounded-md border-transparent text-sm hover:bg-zinc-700 transition-colors outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
          onClick={onResetFeedbackRequested}
        >
          Quero enviar outro
        </button>
      </div>
    </>
  )
}