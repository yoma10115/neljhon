"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import confetti from "canvas-confetti"
import styles from "./page.module.css"

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
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Will you be my Valentine?</h1>
        <div className={styles.buttonContainer}>
          <motion.button
            className={styles.yesButton}
            style={{ fontSize: yesButtonSize }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleYesClick}
          >
            Yes
          </motion.button>
          <motion.button
            className={styles.noButton}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNoClick}
          >
            {getNoButtonText()}
          </motion.button>
        </div>
      </div>
      {yesPressed && (
        <div className={styles.celebration}>
          <h2 className={styles.celebrationTitle}>Yay! Happy Valentine's Day!</h2>
          <p className={styles.celebrationText}>I'm so glad you said yes! 💖</p>
        </div>
      )}
    </div>
  )
}

