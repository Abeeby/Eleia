import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface ServiceCardProps {
  title: string
  subtitle: string
  description: string
  options: string[]
  image: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, subtitle, description, options, image }) => {
  return (
    <article className="service-card group cursor-pointer h-full">
      <Link href="/booking">
        <div className="relative h-[500px] md:h-[600px]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="service-card-overlay" />
          
          <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
            <div>
              <h3 className="text-4xl md:text-5xl font-light mb-8">{title}</h3>
              
              <div className="mb-8">
                <p className="text-lg mb-4">{subtitle}</p>
                <ul className="space-y-2">
                  {options.map((option, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-1 h-1 bg-studio-black rounded-full mr-3" />
                      <span className="text-sm">{option}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <p className="text-sm leading-relaxed mb-8 opacity-90">
                {description}
              </p>
              
              <span className="inline-block text-sm uppercase tracking-wider border-b border-studio-black pb-1 
                             group-hover:border-studio-gray-600 transition-colors duration-300">
                Réserver maintenant
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default ServiceCard