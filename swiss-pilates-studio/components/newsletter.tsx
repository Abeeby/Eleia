'use client'

import React, { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [consent, setConsent] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && firstName && consent) {
      setIsSubmitted(true)
      // Ici, vous intégreriez avec votre service d'email
    }
  }

  return (
    <section className="space-section bg-studio-gray-50">
      <div className="container-narrow">
        <div className="max-w-2xl mx-auto text-center">
          {!isSubmitted ? (
            <>
              <h2 className="text-3xl mb-2">
                Inscrivez-vous à notre <strong>Newsletter</strong>
              </h2>
              <p className="text-lg mb-12 opacity-80">
                pour des offres exclusives et des invitations à des événements spéciaux.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Prénom"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="input"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Adresse e-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="input"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="checkbox mt-1 mr-3"
                    required
                  />
                  <label htmlFor="consent" className="text-sm opacity-80">
                    J'accepte de recevoir des emails marketing et je sais que je peux me désinscrire à tout moment.
                  </label>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn-primary">
                    S'abonner
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="py-12">
              <h3 className="text-2xl mb-4">Merci pour votre inscription!</h3>
              <p className="opacity-80">
                Nous vous avons envoyé un email de confirmation. 
                Veuillez cliquer sur le lien d'activation pour confirmer votre adresse email.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Newsletter