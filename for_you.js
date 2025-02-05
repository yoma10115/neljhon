"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import confetti from "canvas-confetti"

export default function ValentinePage() {
  const [noCount, setNoCount] = useState(0)
  const [yesPressed, setYesPressed] = useState(false)
  const yesButtonSize = noCount * 20 + 16

  const handleNoClick = () => {
    setNoCount(noCount + 1)
  }

  const handleYesClick = () => {
    setYesPressed(true)
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    })
  }

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
    ]
    return phrases[Math.min(noCount, phrases.length - 1)]
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8 text-pink-600">Will you be my Valentine?</h1>
        <div className="flex flex-col gap-4 items-center">
          <motion.button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full"
            style={{ fontSize: yesButtonSize }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleYesClick}
          >
            Yes
          </motion.button>
          <motion.button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNoClick}
          >
            {getNoButtonText()}
          </motion.button>
        </div>
      </div>
      {yesPressed && (
        <div className="text-center mt-8">
          <h2 className="text-3xl font-bold text-pink-600">Yay! Happy Valentine's Day!</h2>
          <p className="mt-2">I'm so glad you said yes! 💖</p>
        </div>
      )}
    </div>
  )
}

