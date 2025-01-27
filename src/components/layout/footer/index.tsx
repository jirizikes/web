import React from 'react'
import { ButtonSize } from 'components/buttons'
import { Link } from 'components/links'
import NewsletterBox from './newsletter-form'
import * as S from './styles'
import { useTranslation } from 'gatsby-plugin-react-i18next'

const Footer: React.FC = () => {
  const { t } = useTranslation()

  const SOCIAL_LINKS = [
    {
      name: t('components.sections.footer.online.facebook'),
      url: 'https://www.facebook.com/cesko.digital',
    },
    {
      name: t('components.sections.footer.online.twitter'),
      url: 'https://twitter.com/CeskoDigital',
    },
    {
      name: t('components.sections.footer.online.github'),
      url: 'https://github.com/cesko-digital',
    },
    {
      name: t('components.sections.footer.online.slack'),
      url: 'https://join.cesko.digital',
    },
  ]

  const PAGE_LINKS = [
    {
      name: t('components.sections.footer.pageLinks.projects'),
      url: '/projects',
    },
    {
      name: t('components.sections.footer.pageLinks.blog'),
      url: 'https://blog.cesko.digital',
    },
    {
      name: t('components.sections.footer.pageLinks.loginToSlack'),
      url: 'https://join.cesko.digital',
    },
    {
      name: t('components.sections.footer.pageLinks.submitProject'),
      url: 'https://join.cesko.digital',
    },
    {
      name: t('components.sections.footer.pageLinks.contribute'),
      url: 'https://join.cesko.digital',
    },
  ]

  return (
    <S.Wrapper>
      <S.Outer>
        <S.Container>
          <S.Info>
            <S.InfoBlock>
              <S.Heading>
                {t('components.sections.footer.pageLinks.title')}
              </S.Heading>
              <S.Navigation>
                <S.Links>
                  {PAGE_LINKS.map(({ name, url }, i) => (
                    <S.LinkItem key={i}>
                      <Link size={ButtonSize.Small} to={url}>
                        {name}
                      </Link>
                    </S.LinkItem>
                  ))}
                </S.Links>
              </S.Navigation>
            </S.InfoBlock>
            <S.InfoBlock>
              <S.Heading>
                {t('components.sections.footer.online.title')}
              </S.Heading>
              <S.Navigation>
                <S.Links>
                  {SOCIAL_LINKS.map(({ name, url }, index) => (
                    <S.LinkItem key={index}>
                      <Link size={ButtonSize.Small} to={url}>
                        {name}
                      </Link>
                    </S.LinkItem>
                  ))}
                </S.Links>
              </S.Navigation>
            </S.InfoBlock>
          </S.Info>
          <NewsletterBox />
          <S.Note>{t('components.sections.footer.footNote')}</S.Note>
        </S.Container>
      </S.Outer>
    </S.Wrapper>
  )
}

export default Footer
