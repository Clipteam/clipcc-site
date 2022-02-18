import { styled } from '@stitches/react'
import Head from 'next/head'
import Image from 'next/image'
import { Button, Card, Text } from '@nextui-org/react';
import { Container, Row, Col } from '@nextui-org/react';
import { Parallax } from 'react-parallax'
import { useTranslations } from 'next-intl';
import styles from '../styles/Home.module.css'

export default function Home() {
  const t = useTranslations();
  return (
    <div>
      <Head>
        <title>ClipCC</title>
        <meta name="description" content={t('meta.description')} />
        <meta name="keywords" content="ClipCC,Scratch,Clipteam,Scratch Editor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.content}>
          <Text
            size={72}
            weight="bold"
            className={styles.title}
          >
            ClipCC
          </Text>
          <Text
            size={48}
            weight="bold"
            className={styles.title}
            css={{
              textGradient: '45deg, $blue500 -20%, $green500 50%'
            }}
          >
            {t('head.title')}
          </Text>
          <div className={styles.buttons}>
            <Button
              size="lg"
              shadow color="primary"
              className={styles.button}
              auto
            >{t('head.try')}</Button>
            <Button
              color="gray200"
              size="lg"
              className={styles.button}
              auto
            >
              {t('head.download')}
            </Button>
            <Button
              color="gray200"
              size="lg"
              className={styles.button}
              auto
            >
              {t('head.document')}
            </Button>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className={styles.waveUp}
        >
          <path
            fill="#0099ff"
            fillOpacity="1"
            d="M0,160L48,160C96,160,192,160,288,176C384,192,480,224,576,218.7C672,213,768,171,864,181.3C960,192,1056,256,1152,266.7C1248,277,1344,235,1392,213.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
          <path
            fill="#0099ff"
            fillOpacity="0.4"
            d="M0,64L26.7,80C53.3,96,107,128,160,128C213.3,128,267,96,320,101.3C373.3,107,427,149,480,165.3C533.3,181,587,171,640,176C693.3,181,747,203,800,208C853.3,213,907,203,960,192C1013.3,181,1067,171,1120,186.7C1173.3,203,1227,245,1280,234.7C1333.3,224,1387,160,1413,128L1440,96L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className={styles.waveDown}
        >
          <path
            fill="#0099ff"
            fillOpacity="1"
            d="M0,64L26.7,85.3C53.3,107,107,149,160,181.3C213.3,213,267,235,320,240C373.3,245,427,235,480,208C533.3,181,587,139,640,122.7C693.3,107,747,117,800,138.7C853.3,160,907,192,960,186.7C1013.3,181,1067,139,1120,122.7C1173.3,107,1227,117,1280,133.3C1333.3,149,1387,171,1413,181.3L1440,192L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
          />
          <path
            fill="#0099ff"
            fillOpacity="0.4"
            d="M0,32L26.7,69.3C53.3,107,107,181,160,218.7C213.3,256,267,256,320,245.3C373.3,235,427,213,480,186.7C533.3,160,587,128,640,122.7C693.3,117,747,139,800,160C853.3,181,907,203,960,229.3C1013.3,256,1067,288,1120,293.3C1173.3,299,1227,277,1280,234.7C1333.3,192,1387,128,1413,96L1440,64L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
          />
        </svg>
        <div className={styles.content}>
          <Text
            size={48}
            css={{
              textGradient: '45deg, $purple500 -20%, $blue500 50%'
            }}
            className={styles.title}
          >
            {t('body.why')}
          </Text>
          <Container className={styles.features}>
            <Row justify="center" align="center">
              <Card
                bordered
                shadow={false}
                clickable
                css={{ mw: "400px", margin: '1rem'}}
              >
                <Text
                  size={21}
                  weight="bold"
                >
                  {t('body.extension.title')}
                </Text>
                {t('body.extension.desc')}
              </Card>
              <Card
                bordered
                shadow={false}
                clickable
                css={{ mw: "400px", margin: '1rem' }}
              >
                <Text
                  size={21}
                  weight="bold"
                >
                  {t('body.globalfunc.title')}
                </Text>
                {t('body.globalfunc.desc')}
              </Card>
              <Card
                bordered
                shadow={false}
                clickable
                css={{ mw: "400px", margin: '1rem' }}
              >
                <Text
                  size={21}
                  weight="bold"
                >
                  {t('body.customreporter.title')}
                </Text>
                {t('body.customreporter.desc')}
              </Card>
            </Row>
            <Row justify="center" align="center">
              <Card
                bordered
                shadow={false}
                clickable
                css={{ mw: "400px", margin: '1rem' }}
              >
                <Text
                  size={21}
                  weight="bold"
                >
                  {t('body.printtext.title')}
                </Text>
                {t('body.printtext.desc')}
              </Card>
              <Card
                bordered
                shadow={false}
                clickable
                css={{ mw: "400px", margin: '1rem' }}
              >
                <Text
                  size={21}
                  weight="bold"
                >
                  {t('body.darkmode.title')}
                </Text>
                {t('body.darkmode.desc')}
              </Card>
              <Card
                bordered
                shadow={false}
                clickable
                css={{ mw: "400px", margin: '1rem' }}
              >
                <Text
                  size={21}
                  weight="bold"
                >
                  {t('body.opensource.title')}
                </Text>
                {t('body.opensource.desc')}
              </Card>
            </Row>
          </Container>
        </div>
      </main>

      <footer className={styles.footer}>
        &copy; {(new Date).getFullYear()}&nbsp;<strong>Clipteam</strong>&nbsp;all rights reserved
      </footer>
    </div>
  )
}

export async function getStaticProps({locale}) {
  return {
    props: {
      messages: (await import(`../locale/${locale}.json`)).default
    }
  };
}
