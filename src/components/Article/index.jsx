import React from 'react'
import { Link } from 'react-router-dom'
import 'highlight.js/styles/tomorrow.css'
import './markdown.less'
import './article.less'
import Toc from '@/components/Toc'

const Article = ({ id, title, tags, publishDate, content, toc, mode }) => {
    const date = new Date(publishDate)
    const enMonth = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
    const [month, day, year] = [enMonth[date.getMonth()], date.getDate() + 'TH', date.getFullYear()]
    return (
        <article className="article post">
            <h1 className="article-title">{mode ? title : <Link to={'/post/' + id}>{title}</Link>}</h1>
            <div className="article-date">{`${month || ''} ${day} ${year || ''}`}</div>
            {/* 目录大于三级的才显示 TOC  */}
            {/* {toc && toc.childrenNode.length >= 3 && (
                <aside className="article-toc">
                    <Toc toc={toc} />
                </aside>
            )} */}
            <div className="article-content">
                <div className="post-body markdown-body" dangerouslySetInnerHTML={{ __html: content }} />
            </div>
            <div className="article-info">
                {mode ? null : <Link to={'/post/' + id}>MORE</Link>}
                <div className="article-tags">
                    Tags:
                    {tags.map((e) => (
                        <Link to={'/archive/tag/' + e} key={e} className="article-tags-link">
                            {e}
                        </Link>
                    ))}
                </div>
            </div>
        </article>
    )
}
export default Article
