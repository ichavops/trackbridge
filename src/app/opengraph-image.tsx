import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'TrackBridge — Ask. Know. Decide.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #160733 0%, #1e0d4a 55%, #0f0520 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Logo mark */}
        <div
          style={{
            background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
            borderRadius: '28px',
            width: '100px',
            height: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '36px',
            fontSize: '38px',
            fontWeight: 800,
            color: 'white',
            letterSpacing: '-1px',
          }}
        >
          TB
        </div>

        {/* Wordmark */}
        <div
          style={{
            fontSize: '72px',
            fontWeight: 800,
            color: 'white',
            lineHeight: 1,
            marginBottom: '18px',
            letterSpacing: '-3px',
          }}
        >
          TrackBridge
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '30px',
            color: 'rgba(255,255,255,0.45)',
            marginBottom: '48px',
            letterSpacing: '1px',
          }}
        >
          Ask. Know. Decide.
        </div>

        {/* Descriptor */}
        <div
          style={{
            fontSize: '20px',
            color: 'rgba(255,255,255,0.28)',
            textAlign: 'center',
            maxWidth: '680px',
            lineHeight: 1.5,
          }}
        >
          AI intelligence layer for professional services firms
        </div>

        {/* Bottom pill */}
        <div
          style={{
            position: 'absolute',
            bottom: '48px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '9999px',
            padding: '10px 24px',
            fontSize: '15px',
            color: 'rgba(255,255,255,0.40)',
            letterSpacing: '0.5px',
          }}
        >
          trackbridge.ai
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
