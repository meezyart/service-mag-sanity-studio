import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Documents
import page from './documents/page'

// hipline
import choreographers from './documents/hipline/choreographers'
import classMenu from './documents/hipline/classMenu'
import passBlock from './documents/hipline/pass'
import loveClubBlock from './documents/hipline/loveClub'
import testimonialBlock from './documents/hipline/testimonial'
import article from './documents/articles/article'
import articleCategory from './documents/articles/category'
import sectionsHeader from './documents/sections/header'
import sectionsFooter from './documents/sections/footer'
import sectionsMobile from './documents/sections/mobile'
import menu from './documents/menu'
import route from './documents/route'
import settingsSeo from './documents/settings/seo'
import settingsFavicons from './documents/settings/favicons'
import settingsSocial from './documents/settings/social'
import settingsAnalytics from './documents/settings/analytics'
import settingsContactInfo from './documents/settings/contactInfo'
import settingsLogo from './documents/settings/logo'
import settingsAnnouncements from './documents/settings/announcements'

// Objects
import richTextBlock from './objects/blocks/richText'
// import imageBlock from './objects/blocks/image'
import youtubeBlock from './objects/blocks/youtube'
import vimeoBlock from './objects/blocks/vimeo'
import socialBlock from './objects/blocks/socialBlock'
import iconBlock from './objects/blocks/icons'
import contactBlock from './objects/blocks/contact'
import cta from './objects/cta'

import simpleBlockContent from './objects/blocks/simpleBlockContent'
// import bioPortableText from './objects/blocks/bioPortableText'
// import bodyPortableText from './objects/blocks/bioPortableText'
// import { instagram, videoEmbed } from './objects/blocks/embeds'
import excerptPortableText from './objects/blocks/excerptPortableText'
import link from './objects/blocks/link'
// import pageMetaData from './objects/pageMetaData'

import mainImage from './objects/blocks/mainImage'
import openGraph from './objects/blocks/openGraph'
import fileAsset from './objects/blocks/fileAsset'
import simpleSection from './objects/blocks/simpleSection'
import navLink from './objects/blocks/navLink'
import navPage from './objects/blocks/navPage'
import navSlug from './objects/blocks/navSlug'
import timelineBlock from './objects/blocks/timelineBlock'
import navDropDown from './objects/blocks/navDropdown'
import faqSection from './objects/sections/faq'
import picContentSection from './objects/sections/picContent'
import richTextSection from './objects/sections/richText'
import testimonialSection from './objects/sections/testimonials'
import latestArticlesSection from './objects/sections/latestArticles'
import heroSection from './objects/sections/heroBanner'
import classMenuSection from './objects/hipline/classMenu'
import dancerSection from './objects/hipline/dancerSection'
import pageTitleSection from './objects/hipline/pageTitle'
import classPassSection from './objects/hipline/classPass'
import timelineSection from './objects/hipline/timeline'
import contactSection from './objects/hipline/contact'
import bckgrdColorBlock from './objects/hipline/bckgrdOpts'
import classScheduleSection from './objects/hipline/classSchedule'
import loveClubSection from './objects/hipline/loveClub'
import infoBoxSection from './objects/hipline/infoBox'
import menuItem from './objects/menuItem'
import socialSiteFacebook from './objects/settings/facebook'
import socialSiteTwitter from './objects/settings/twitter'
import socialSiteInstagram from './objects/settings/instagram'
import socialSiteYouTube from './objects/settings/youtube'

export default createSchema({
    name: 'default',
    types: schemaTypes.concat([
        /* Documents */
        page,
        sectionsHeader,
        sectionsFooter,
        sectionsMobile,
        menu,
        route,
        settingsSeo,
        settingsFavicons,
        settingsSocial,
        settingsAnalytics,
        settingsContactInfo,
        settingsAnnouncements,
        settingsLogo,
        choreographers,
        infoBoxSection,
        classMenu,
        article,
        articleCategory,
        contactSection,
        // passMenu,
        passBlock,
        contactBlock,
        loveClubBlock,
        testimonialBlock,
        picContentSection,
        testimonialSection,
        timelineSection,
        pageTitleSection,
        classMenuSection,
        dancerSection,
        heroSection,
        classPassSection,
        classScheduleSection,
        loveClubSection,
        bckgrdColorBlock,
        iconBlock,
        // passCategory,
        /* Objects */
        // bioPortableText,
        // bodyPortableText,
        link,
        navLink,
        navPage,
        navSlug,
        navDropDown,
        simpleBlockContent,
        excerptPortableText,
        // instagram,
        // videoEmbed,
        openGraph,
        richTextBlock,
        // imageBlock,
        youtubeBlock,
        vimeoBlock,
        socialBlock,
        simpleSection,
        richTextSection,
        faqSection,
        timelineBlock,
        latestArticlesSection,
        menuItem,
        fileAsset,
        cta,
        mainImage,
        socialSiteFacebook,
        socialSiteTwitter,
        socialSiteInstagram,
        socialSiteYouTube
    ])
})
