import { useState } from "react";
import QRCode from "react-qr-code";
import { QRCodeSVG } from 'qrcode.react';

export function App() {
  const [message, setMessage] = useState('')
  const [savedMessages, setSavedMessages] = useState<string[]>([])

  function handleSaveMessage() {
    setSavedMessages(state => [...state, message])
  }

  function handleRecallMessage(message: string) {
    setMessage(message)
  }

  return (
    <div className="min-h-screen bg-stone-800 flex items-center justify-center p-10">
      <div className="border border-stone-500 rounded-md bg-stone-700 overflow-hidden p-6 flex flex-col justify-between gap-6">

        <div className="bg-white p-10 lg:py-10 flex items-center justify-center rounded-md gap-10">
          
            <QRCode className="h-[256px] w-[256px]" value={message}/>
          
            <QRCodeSVG className="h-[256px] w-[256px]" value={message} />

        </div>

        <div>
          <p className="text-sm text-zinc-300 italic">
            O que deseja codificar?
          </p>
          <div className="flex gap-2 items-center">
            <input 
              type="text" 
              className="w-full bg-transparent border-2 border-stone-500 focus:border-green-600 outline-none text-white mt-auto rounded-md p-2"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button 
              className="text-sm text-white bg-green-600 rounded-md p-2 hover:bg-green-700"
              onClick={handleSaveMessage}
            >
              Salvar
            </button>
          </div>
        </div>

        {!!savedMessages.length && 
          (<div className="space-y-1">
            <p className="text-sm text-zinc-300 italic">
              Suas mensagens salvas
            </p>
            {savedMessages.map((message, i) => (
              <button 
                key={`message-${i}`} 
                className="text-sm text-white bg-stone-600 rounded-md p-2 hover:bg-stone-800 w-full" 
                type="button"
                onClick={() => handleRecallMessage(message)}
              >
                {message}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
