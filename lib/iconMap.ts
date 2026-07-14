import {
  Award, BarChart3, Blocks, Bot, Brain, Bug, Camera, Cloud, Code, Container,
  Database, Eye, FileCode, FileText, Gauge, GitBranch, Globe,
  Hammer, Layers, Layout, Link, Mail, Map, Monitor, Music,
  Paintbrush, PenTool, PieChart, Plug, Radar, Repeat, Rocket,
  Search, Server, Share2, Shield, Smartphone, Tags, Target,
  Terminal, TrendingUp, Users, Webhook, Workflow, Wrench, Zap,
} from 'lucide-react'

type IconComponent = React.ComponentType<{ className?: string; strokeWidth?: number }>

export const ICON_MAP: Record<string, IconComponent> = {
  Award, BarChart3, Blocks, Bot, Brain, Bug, Camera, Cloud, Code, Container,
  Database, Eye, FileCode, FileText, Gauge, GitBranch, Globe,
  Hammer, Layers, Layout, Link, Mail, Map, Monitor, Music,
  Paintbrush, PenTool, PieChart, Plug, Radar, Repeat, Rocket,
  Search, Server, Share2, Shield, Smartphone, Tags, Target,
  Terminal, TrendingUp, Users, Webhook, Workflow, Wrench, Zap,
}

export function resolveIcon(name?: string | null): IconComponent | null {
  if (!name) return null
  return ICON_MAP[name] ?? null
}
