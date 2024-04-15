import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import HeaderImg from "../components/header-img";
import DynamicStringDisplay from "@site/src/components/dynamic-string-display";
import {Image} from "antd";

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Image src={'./img/avatar.jpg'} width={'15vw'} height={'15vw'} style={{borderRadius: '50%'}}/>
                <Heading as="h1" className="hero__title">
                    策君丶Blog
                </Heading>
                {/*<p className="hero__subtitle">部分博客图片加载不出是服务器文件丢失了，后续有空回去看看有无备份</p>*/}
                <DynamicStringDisplay
                    content={["一觉游仙好梦，任它竹冷松寒。\r", "轩辕事，古今谈，风流河山。\r", "沉醉负白首，舒怀成大观。\r", "醒，亦在人间；\r", "梦，亦在人间 。"]}/>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/personal-project/docusaurus-blog">
                        本站构建
                    </Link>
                    <Link
                        className="button button--secondary button--lg"
                        to="https://old.zxsvici.top" target="_blank">
                        之前使用的Java博客
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <HomepageHeader/>
            {/*<main>*/}
            {/*    <HomepageFeatures/>*/}
            {/*</main>*/}
            {/*  <HeaderImg/>*/}
        </Layout>
    );
}
