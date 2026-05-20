'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUp, ArrowDown, ArrowRight } from 'lucide-react'
import type { Page } from '@/payload-types'

type ProjectsData = Extract<NonNullable<Page['layout']>[number], { blockType: 'projects' }>
type ProjectCard = NonNullable<ProjectsData['projects']>[number]
type Stat = NonNullable<ProjectCard['stats']>[number]

function StatBadge({ stat }: { stat: Stat }) {
  const isUp = stat.trend === 'up'
  const isDown = stat.trend === 'down'

  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <div
        className={`flex items-center gap-1 text-lg font-bold ${
          isUp ? 'text-emerald-400' : isDown ? 'text-amber-400' : 'text-foreground'
        }`}
      >
        {isUp && <ArrowUp className="size-4" />}
        {isDown && <ArrowDown className="size-4" />}
        <span>{stat.value}</span>
      </div>
      {stat.label && <p className="text-xs text-foreground/50">{stat.label}</p>}
    </div>
  )
}

function Card({ project, index }: { project: ProjectCard; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-6 transition-colors hover:border-foreground/20 hover:bg-foreground/[0.05]"
    >
      <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>

      {project.description && (
        <p className="mt-3 text-sm leading-relaxed text-foreground/60">
          {project.description}
        </p>
      )}

      {project.stats && project.stats.length > 0 && (
        <div className="mt-6 grid grid-cols-3 gap-4 rounded-xl bg-foreground/[0.03] p-4">
          {project.stats.map((stat, i) => (
            <StatBadge key={stat.id ?? i} stat={stat} />
          ))}
        </div>
      )}

      <div className="mt-auto flex justify-end pt-6">
        {project.buttonHref ? (
          <a
            href={project.buttonHref}
            target={project.buttonHref.startsWith('http') ? '_blank' : undefined}
            rel={project.buttonHref.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="inline-flex items-center gap-2 rounded-lg border border-foreground/10 bg-foreground/5 px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-foreground/20 hover:bg-foreground/10"
          >
            {project.buttonLabel || 'Explore'}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-lg border border-foreground/10 bg-foreground/5 px-5 py-2.5 text-sm font-medium text-foreground/50">
            {project.buttonLabel || 'Explore'}
            <ArrowRight className="size-4" />
          </span>
        )}
      </div>
    </motion.div>
  )
}

export function Projects({ data }: { data: ProjectsData }) {
  return (
    <section className="relative w-full bg-background px-6 py-12 md:px-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        {data.heading && (
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-3xl font-bold text-foreground md:text-4xl"
          >
            {data.heading}
          </motion.h2>
        )}

        {data.description && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-center text-foreground/60"
          >
            {data.description}
          </motion.p>
        )}

        {data.projects && data.projects.length > 0 && (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.projects.map((project, i) => (
              <Card key={project.id ?? i} project={project} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
