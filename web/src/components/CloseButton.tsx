import { X } from 'phosphor-react'
import { Popover } from '@headlessui/react'

export function CloseButton() {
  return (
    <Popover.Button className="text-zinc-400 hover:text-zinc-100 absolute top-5 right-5 transition-all duration-200" title="Fechar formulário de feedback">
      <X className="w-4 h-4" weight="bold" />
    </Popover.Button>
  )
}