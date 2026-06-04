import { getPayload } from 'payload'
import config from '@payload-config'
import Image from 'next/image'
import { Press_Start_2P } from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const retro = Press_Start_2P({ weight: '400', subsets: ['latin'], display: 'swap' })

export default async function NotFound() {
  const payload = await getPayload({ config })
  const [header, footer] = await Promise.all([
    payload.findGlobal({ slug: 'header' }),
    payload.findGlobal({ slug: 'footer' }),
  ])

  return (
    <>
      <Header data={header} />
      <main className={`grid w-full place-content-center gap-5 bg-background px-4 py-16 text-center md:py-24 ${retro.className}`}>
        <div className="font-bold text-6xl tracking-tight text-foreground sm:text-8xl">
          404
        </div>

        <div className="flex justify-center -mt-10">
          <Image
            alt="Confused ogre at a computer"
            src="/ogre-404.png"
            width={200}
            height={200}
            style={{ imageRendering: 'pixelated' }}
          />
        </div>

        <h1 className="font-bold text-2xl tracking-tight text-foreground sm:text-4xl">
          You made the Ogre angry!
        </h1>

        <p className="text-muted-foreground text-xs">
          This room doesn&apos;t exist. Turn back before it&apos;s too late.
        </p>

        <div className="flex justify-center">
          <a href="/">
            <button className="mt-2 border-2 border-foreground bg-foreground px-6 py-3 text-sm font-bold text-background transition-all hover:bg-background hover:text-foreground">
              Return to Home Page
            </button>
          </a>
        </div>
      </main>
      <Footer data={footer} />
    </>
  )
}
