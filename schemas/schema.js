import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Documents
import articlePage from './documents/page'

// workflow
import editions from './documents/editions'

import testimonialBlock from './documents/testimonial'
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
import youtubeBlock from './objects/blocks/youtube'
import vimeoBlock from './objects/blocks/vimeo'
import socialBlock from './objects/blocks/socialBlock'
import iconBlock from './objects/blocks/icons'
import contactBlock from './objects/blocks/contact'
import cta from './objects/cta'

import excerptPortableText from './objects/blocks/excerptPortableText'

import mainImage from './objects/blocks/mainImage'
import openGraph from './objects/blocks/openGraph'
import fileAsset from './objects/blocks/fileAsset'
import linkList from './objects/blocks/linkList'
import simpleSection from './objects/blocks/simpleSection'
import navLink from './objects/blocks/navLink'
import navPage from './objects/blocks/navPage'
import navSlug from './objects/blocks/navSlug'
import navDropDown from './objects/blocks/navDropdown'
import dykSection from './objects/sections/didYou'
import picContentSection from './objects/sections/picContent'
import richTextSection from './objects/sections/richText'
import testimonialSection from './objects/sections/testimonials'
import latestArticlesSection from './objects/sections/latestArticles'
import heroSection from './objects/sections/heroBanner'
import tomSection from './objects/sections/timeOfMind'


import menuItem from './objects/menuItem'
import socialSiteFacebook from './objects/settings/facebook'
import socialSiteTwitter from './objects/settings/twitter'
import socialSiteInstagram from './objects/settings/instagram'
import socialSiteYouTube from './objects/settings/youtube'

export default createSchema({
    name: 'default',
    types: schemaTypes.concat([
        /* Documents */
        articlePage,
        sectionsHeader,
        sectionsFooter,
        sectionsMobile,
        menu,
        route,
        tomSection,
        settingsSeo,
        settingsFavicons,
        settingsSocial,
        settingsAnalytics,
        settingsContactInfo,
        settingsAnnouncements,
        settingsLogo,
        article,

        articleCategory,
        // Primitive
        contactBlock,
        testimonialBlock,
        picContentSection,
        heroSection,
        iconBlock,
        testimonialSection,
        // Work Flow related
        linkList,
        editions,
        navLink,
        navPage,
        navSlug,
        navDropDown,
        excerptPortableText,
        // instagram,
        // videoEmbed,
        openGraph,
        richTextBlock,
        youtubeBlock,
        vimeoBlock,
        socialBlock,
        simpleSection,
        richTextSection,
        dykSection,
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
