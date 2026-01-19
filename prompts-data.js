// PM Prompts Data - Curated from Dean Peters' Product Manager Prompts Library
window.PROMPTS_DATA = [
    {
        id: 'jobs-to-be-done',
        title: 'Jobs-to-be-Done 分析',
        category: 'research',
        description: '基于 Osterwalder 价值主张画布的客户圈层，帮助您从客户视角系统性地探索他们的工作任务、痛点和收益。深入理解客户需求，打造真正解决问题的产品。',
        usage: '在已经了解目标客户群体（行为、偏好、现有解决方案）的情况下使用，让 AI 引导您完成结构化的 JTBD 分析。',
        tags: ['用户需求', 'JTBD', '价值主张', '客户洞察'],
        content: `## Jobs-to-be-Done Template

### 1. Customer Jobs
Identify the jobs your customers are trying to get done. Break these down into:

#### Functional Jobs:
- [List the functional tasks customers need to perform]

#### Social Jobs:
- [List ways customers want to be perceived socially]

#### Emotional Jobs:
- [List emotional states customers seek to achieve or avoid]

### 2. Pains
Describe the pains customers experience in their journey. Include:

#### Challenges:
- [List obstacles customers face]

#### Costliness:
- [List what customers find too costly in terms of time, money, or effort]

#### Risks:
- [List potential negative outcomes customers fear]

### 3. Gains
Outline the gains customers seek. Consider:

#### Must-have Gains:
- [List essential gains for customer satisfaction]

#### Expected Gains:
- [List gains customers expect as standard]

#### Desired Gains:
- [List gains that would delight customers]

#### Unexpected Gains:
- [List surprises that could exceed customer expectations]

Please analyze the customer segment and fill in each section based on the context provided.`
    },
    {
        id: 'user-story-template',
        title: 'User Story 用户故事模板',
        category: 'agile',
        description: '结合 Mike Cohn 用户故事格式和 Gherkin 验收标准，帮助产品经理和开发团队创建清晰、简洁、可执行的用户故事。确保需求被正确理解和实现。',
        usage: '在已提供产品概述、目标用户画像、产品目标和竞品情况的前提下使用。让 AI 帮助您编写高质量的用户故事。',
        tags: ['敏捷开发', 'User Story', '需求文档', 'Scrum'],
        content: `## User Story Template

**Title**: [Feature Name]

### User Story
As a [type of user],
I want to [action/goal],
So that [benefit/value].

### Context
**Background**: [Provide context about why this feature is needed]
**User Persona**: [Brief description of the target user]
**User Goals**: [What the user is trying to achieve]

### Acceptance Criteria (Gherkin Format)

**Scenario 1**: [Brief scenario name]
- **Given** [precondition/context]
- **When** [action performed by user]
- **Then** [expected outcome]
- **And** [additional expected outcome if applicable]

**Scenario 2**: [Brief scenario name]
- **Given** [precondition/context]
- **When** [action performed by user]
- **Then** [expected outcome]

### Additional Notes
- **Priority**: [High/Medium/Low]
- **Dependencies**: [Any dependencies on other features or systems]
- **Open Questions**: [Any uncertainties that need clarification]

Please create a user story for [specific feature] based on the product context we've discussed.`
    },
    {
        id: 'positioning-statement',
        title: 'Positioning Statement 定位声明',
        category: 'strategy',
        description: '使用经典的产品定位声明框架，清晰定义产品的目标市场、关键差异化和核心价值。帮助团队和利益相关方达成一致的产品理解。',
        usage: '在产品规划初期或重新定位时使用。确保您已经了解目标市场、竞争对手和产品独特价值。',
        tags: ['产品定位', '市场策略', '差异化', '价值主张'],
        content: `## Positioning Statement Template

Create a positioning statement using the following format:

**For** [target customer segment]

**Who** [statement of need or opportunity]

**The** [product name] **is a** [product category]

**That** [key benefit/compelling reason to buy]

**Unlike** [primary competitive alternative]

**Our product** [statement of primary differentiation]

---

### Supporting Elements

**Target Market**:
- [Describe the ideal customer profile]
- [Market size and characteristics]

**Market Category**:
- [Define the product category/space]
- [How customers currently think about this category]

**Key Insight**:
- [The fundamental customer insight that drives this positioning]

**Proof Points**:
- [Evidence that supports your differentiation claims]
- [Customer testimonials, metrics, or data]

**Communication Pillars**:
- [3-5 key messages that support the positioning]

Based on our product context, help me craft a compelling positioning statement that will align our team and stakeholders.`
    },
    {
        id: 'customer-journey-mapping',
        title: 'Customer Journey Mapping 客户旅程地图',
        category: 'research',
        description: '系统化地绘制客户与产品互动的完整旅程，识别关键触点、痛点和机会点。可视化客户体验，发现产品改进的切入点。',
        usage: '在优化现有产品体验或设计新产品流程时使用。需要提供客户画像和产品互动场景。',
        tags: ['客户体验', 'CX', '用户旅程', '触点优化'],
        content: `## Customer Journey Mapping Template

### Journey Overview
**Customer Persona**: [Name and brief description]
**Scenario**: [The specific use case or goal]
**Timeframe**: [How long does this journey typically take]

### Journey Stages

For each stage, analyze:

#### Stage 1: [Awareness/Discovery]
- **What the customer is doing**: [Actions and behaviors]
- **Thoughts & Emotions**: [What they're thinking and feeling]
- **Touchpoints**: [Where they interact with your product/brand]
- **Pain Points**: [Frustrations or obstacles]
- **Opportunities**: [Areas for improvement]

#### Stage 2: [Consideration]
- **What the customer is doing**:
- **Thoughts & Emotions**:
- **Touchpoints**:
- **Pain Points**:
- **Opportunities**:

#### Stage 3: [Decision/Purchase]
- **What the customer is doing**:
- **Thoughts & Emotions**:
- **Touchpoints**:
- **Pain Points**:
- **Opportunities**:

#### Stage 4: [Onboarding/First Use]
- **What the customer is doing**:
- **Thoughts & Emotions**:
- **Touchpoints**:
- **Pain Points**:
- **Opportunities**:

#### Stage 5: [Regular Use/Retention]
- **What the customer is doing**:
- **Thoughts & Emotions**:
- **Touchpoints**:
- **Pain Points**:
- **Opportunities**:

#### Stage 6: [Advocacy/Expansion]
- **What the customer is doing**:
- **Thoughts & Emotions**:
- **Touchpoints**:
- **Pain Points**:
- **Opportunities**:

### Key Insights
- **Moments of Truth**: [Critical moments that define the experience]
- **Biggest Pain Points**: [Top 3 areas of friction]
- **Quick Wins**: [Immediate improvements to make]
- **Long-term Opportunities**: [Strategic enhancements]

Help me map out the customer journey for [specific scenario] based on our customer persona.`
    },
    {
        id: 'product-requirements-doc',
        title: 'PRD 产品需求文档',
        category: 'strategy',
        description: '完整的产品需求文档模板，涵盖背景、目标、用户需求、功能规格、成功指标等关键要素。确保产品开发有清晰的方向和标准。',
        usage: '在启动新功能或产品时使用。适合需要详细文档的正式项目场景。',
        tags: ['PRD', '需求文档', '产品规格', '项目管理'],
        content: `## Product Requirements Document (PRD)

### 1. Executive Summary
- **Product/Feature Name**:
- **Author**:
- **Date**:
- **Status**: [Draft/In Review/Approved]
- **One-liner**: [Single sentence describing the product/feature]

### 2. Background & Context
- **Problem Statement**: [What problem are we solving?]
- **Why Now**: [Why is this important now?]
- **Strategic Alignment**: [How does this align with company goals?]

### 3. Goals & Success Metrics
**Objectives**:
- [Primary objective]
- [Secondary objectives]

**Key Results**:
- [Measurable outcome 1]
- [Measurable outcome 2]
- [Measurable outcome 3]

**Success Metrics**:
- [Metric 1: Target]
- [Metric 2: Target]

### 4. Target Users
**Primary Persona**:
- Who: [Description]
- Needs: [Key needs]
- Current Behavior: [How they currently solve this]

**Secondary Personas**: [If applicable]

### 5. User Stories & Use Cases
- As a [user type], I want to [action], so that [benefit]
- [Additional user stories]

### 6. Functional Requirements
**Must Have (P0)**:
- [Critical requirement 1]
- [Critical requirement 2]

**Should Have (P1)**:
- [Important requirement 1]
- [Important requirement 2]

**Nice to Have (P2)**:
- [Optional requirement 1]

### 7. Non-Functional Requirements
- **Performance**: [Load time, response time expectations]
- **Security**: [Security considerations]
- **Scalability**: [Scale requirements]
- **Accessibility**: [Accessibility standards]

### 8. User Experience
- **User Flow**: [High-level description]
- **Key Screens/States**: [List main UI screens]
- **Design Requirements**: [Link to designs or describe requirements]

### 9. Technical Considerations
- **Dependencies**: [System or feature dependencies]
- **Constraints**: [Technical constraints]
- **Integration Points**: [APIs or systems to integrate with]

### 10. Launch Plan
- **Rollout Strategy**: [Phased, full launch, beta, etc.]
- **Timeline**: [Key milestones]
- **Go-to-Market**: [How will we announce/market this]

### 11. Open Questions & Risks
- **Open Questions**: [Unresolved questions]
- **Risks**: [Potential risks and mitigation strategies]

### 12. Appendix
- **Research**: [Links to user research]
- **Competitive Analysis**: [Competitor info]
- **References**: [Additional resources]

Please help me create a comprehensive PRD for [product/feature name] based on our discussions.`
    },
    {
        id: 'competitive-analysis',
        title: 'Competitive Analysis 竞品分析',
        category: 'analysis',
        description: '系统化的竞争对手分析框架，帮助您评估竞品的优势、劣势、定位和策略，发现市场机会和差异化空间。',
        usage: '在制定产品策略、功能规划或市场定位时使用。需要提供竞争对手信息和您的产品背景。',
        tags: ['竞品分析', '市场研究', '竞争策略', 'SWOT'],
        content: `## Competitive Analysis Template

### Analysis Overview
- **Date**: [Date of analysis]
- **Analyst**: [Your name]
- **Purpose**: [Why conducting this analysis]

### Competitor Profiles

#### Competitor 1: [Name]
**Basic Info**:
- **Website**: [URL]
- **Founded**: [Year]
- **Size**: [Company size, funding]
- **Target Market**: [Who they serve]

**Product Overview**:
- **Core Features**: [Key capabilities]
- **Pricing**: [Pricing model and tiers]
- **Unique Value Prop**: [What they claim as differentiators]

**Strengths**:
- [Strength 1]
- [Strength 2]
- [Strength 3]

**Weaknesses**:
- [Weakness 1]
- [Weakness 2]
- [Weakness 3]

**Market Position**: [Market leader/challenger/niche player]

[Repeat for Competitor 2, 3, etc.]

### Feature Comparison Matrix

| Feature | Our Product | Competitor 1 | Competitor 2 | Competitor 3 |
|---------|-------------|--------------|--------------|--------------|
| [Feature 1] | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ |
| [Feature 2] | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ |
| [Feature 3] | ✅/❌ | ✅/❌ | ✅/❌ | ✅/❌ |

### SWOT Analysis

#### Our Product
**Strengths**:
- [What we do better]

**Weaknesses**:
- [Where we lag behind]

**Opportunities**:
- [Market gaps we can fill]

**Threats**:
- [Competitive or market threats]

### Strategic Insights

**Market Gaps**:
- [Unmet needs in the market]

**Differentiation Opportunities**:
- [How we can stand out]

**Competitive Threats**:
- [What to watch out for]

**Recommended Actions**:
- [Prioritized actions based on analysis]

Help me conduct a competitive analysis for [your product] against [key competitors].`
    },
    {
        id: 'proto-persona',
        title: 'Proto-Persona 原型用户画像',
        category: 'research',
        description: '快速创建初步用户画像，基于现有知识和假设。适合在正式用户研究前快速对齐团队对目标用户的理解。',
        usage: '在项目启动初期或资源有限时使用。后续可通过用户研究验证和完善。',
        tags: ['用户画像', 'Persona', '目标用户', '用户研究'],
        content: `## Proto-Persona Template

### Persona Overview
- **Name**: [Give the persona a name]
- **Age Range**: [Age range]
- **Role/Title**: [Job title or role]
- **Location**: [Geographic location]
- **Tech Savviness**: [Low/Medium/High]

### Background
- **Education**: [Education level]
- **Experience**: [Years of experience in relevant area]
- **Work Environment**: [Where and how they work]
- **Key Responsibilities**: [Main job responsibilities]

### Demographics
- **Income Level**: [Approximate income bracket]
- **Team Size**: [If relevant, size of team they work with]
- **Industry**: [Industry sector]

### Goals & Motivations
**Primary Goals**:
- [Goal 1]
- [Goal 2]
- [Goal 3]

**Motivations**:
- [What drives them]
- [What success looks like to them]

### Pain Points & Challenges
**Current Challenges**:
- [Challenge 1]
- [Challenge 2]
- [Challenge 3]

**Frustrations**:
- [What frustrates them in their current workflow]

### Behaviors & Preferences
**Daily Tools**:
- [Tools they use regularly]

**Information Sources**:
- [Where they get information]
- [Trusted sources]

**Decision-Making Style**:
- [How they make purchasing/adoption decisions]

**Communication Preferences**:
- [Preferred channels and styles]

### Needs & Expectations
**Must-Haves**:
- [Critical needs]

**Nice-to-Haves**:
- [Secondary needs]

**Deal-Breakers**:
- [What would make them reject a solution]

### Quote
"[A representative quote that captures this persona's mindset]"

### How Our Product Helps
- [How our product addresses their goals]
- [How we solve their pain points]
- [Value we provide]

Help me create a proto-persona for [target user type] based on what we know about our market.`
    },
    {
        id: 'product-roadmap',
        title: 'Product Roadmap 产品路线图',
        category: 'strategy',
        description: '战略性产品路线图规划框架，平衡短期执行和长期愿景。清晰传达产品方向和优先级，对齐团队和利益相关方。',
        usage: '在季度/年度规划、战略回顾或利益相关方沟通时使用。',
        tags: ['产品路线图', '战略规划', '优先级', 'OKR'],
        content: `## Product Roadmap Template

### Roadmap Overview
- **Timeframe**: [Q1 2024, 2024, Next 12 months, etc.]
- **Product**: [Product name]
- **Last Updated**: [Date]
- **Owner**: [Product leader]

### Strategic Context
**Vision**: [Where are we going long-term?]

**Mission**: [What are we trying to achieve?]

**Strategic Themes**:
- [Theme 1: e.g., Platform Scalability]
- [Theme 2: e.g., User Experience Excellence]
- [Theme 3: e.g., Market Expansion]

### Now (Current Quarter)
**Focus**: [What we're focused on now]

**Key Initiatives**:
1. **[Initiative Name]**
   - **Goal**: [What we're trying to achieve]
   - **Why Now**: [Why this is a priority]
   - **Success Metrics**: [How we'll measure success]
   - **Status**: [On track/At risk/Off track]

2. **[Initiative Name]**
   - [Same structure]

### Next (Next Quarter)
**Focus**: [Where we're heading next]

**Planned Initiatives**:
1. **[Initiative Name]**
   - **Goal**:
   - **Dependencies**: [What needs to happen first]
   - **Estimated Impact**: [High/Medium/Low]

### Later (Future Quarters)
**Focus**: [Longer-term bets]

**Exploratory Initiatives**:
- [Initiative 1: Brief description]
- [Initiative 2: Brief description]

### Feature Prioritization

| Initiative | Strategic Theme | Customer Value | Business Value | Effort | Priority Score |
|------------|----------------|----------------|----------------|--------|----------------|
| [Feature 1] | [Theme] | High/Med/Low | High/Med/Low | High/Med/Low | [Calculated] |
| [Feature 2] | [Theme] | High/Med/Low | High/Med/Low | High/Med/Low | [Calculated] |

### What We're NOT Doing
**Intentional Trade-offs**:
- [What we've chosen not to prioritize and why]
- [Customer requests we're deferring]

### Success Criteria
**Q[X] Goals**:
- [OKR 1]
- [OKR 2]
- [OKR 3]

**Leading Indicators**:
- [Metric to track progress]

### Risks & Dependencies
**Key Risks**:
- [Risk 1 and mitigation]
- [Risk 2 and mitigation]

**Dependencies**:
- [What we're waiting on]
- [Cross-team dependencies]

### Feedback & Iteration
- **Last Review**: [Date]
- **Next Review**: [Date]
- **Stakeholders Aligned**: [List key stakeholders]

Help me create a strategic product roadmap for [timeframe] that balances [key strategic objectives].`
    },
    {
        id: 'feature-prioritization',
        title: 'Feature Prioritization 功能优先级',
        category: 'strategy',
        description: '使用 RICE、Kano Model 或 ICE 等框架，科学评估功能优先级。平衡用户价值、业务影响和开发成本，做出明智的取舍。',
        usage: '在面对大量功能需求时使用，帮助团队基于数据和框架做优先级决策。',
        tags: ['优先级', 'RICE', 'ICE', '功能评估'],
        content: `## Feature Prioritization Framework

### Prioritization Context
- **Product**: [Product name]
- **Timeframe**: [Planning period]
- **Team Capacity**: [Available sprint capacity]

### Method 1: RICE Scoring

**Formula**: RICE Score = (Reach × Impact × Confidence) / Effort

#### Feature Evaluation

| Feature | Reach | Impact | Confidence | Effort | RICE Score |
|---------|-------|--------|------------|--------|------------|
| [Feature 1] | [# users/quarter] | [3=Massive, 2=High, 1=Medium, 0.5=Low] | [100%=High, 80%=Medium, 50%=Low] | [Person-months] | [Calculated] |
| [Feature 2] | | | | | |

**Reach**: How many users will this impact per time period?
**Impact**: How much will this impact each user? (3=Massive, 2=High, 1=Medium, 0.5=Low, 0.25=Minimal)
**Confidence**: How confident are we in our estimates? (100%=High, 80%=Medium, 50%=Low)
**Effort**: How many person-months will this take?

### Method 2: Value vs Effort Matrix

```
High Value
│   [Quick Wins]         │  [Major Projects]
│                        │
│   ─────────────────────┼──────────────────
Low Value
│   [Fill-ins]          │  [Time Sinks]
│                        │
└────────────────────────┴──────────────────
    Low Effort              High Effort
```

**Quick Wins** (High Value, Low Effort):
- [Feature 1]
- [Feature 2]

**Major Projects** (High Value, High Effort):
- [Feature 1]

**Fill-ins** (Low Value, Low Effort):
- [Feature 1]

**Time Sinks** (Low Value, High Effort) - AVOID:
- [Feature 1]

### Method 3: Kano Model

**Must-Haves** (Basic Expectations):
- [Feature that causes dissatisfaction if missing]

**Performance** (Satisfaction proportional to quality):
- [Feature where better is better]

**Delighters** (Unexpected features that wow users):
- [Feature that exceeds expectations]

### Weighted Scoring Model

Create custom criteria based on your strategy:

| Feature | User Value (30%) | Business Impact (25%) | Strategic Fit (20%) | Effort (15%) | Risk (10%) | Total Score |
|---------|------------------|---------------------|-------------------|-------------|-----------|-------------|
| [Feature 1] | [1-5] | [1-5] | [1-5] | [1-5] | [1-5] | [Weighted] |

### Decision Framework

**Must-Dos** (Score 80-100):
- [Features to do now]

**Should-Dos** (Score 60-79):
- [Features to do next]

**Could-Dos** (Score 40-59):
- [Features to consider later]

**Won't-Dos** (Score <40):
- [Features to deprioritize/reject]

### Prioritized Backlog

**P0 - Critical**:
1. [Feature name] - [Brief reason]
2. [Feature name] - [Brief reason]

**P1 - High Priority**:
1. [Feature name] - [Brief reason]

**P2 - Medium Priority**:
1. [Feature name] - [Brief reason]

**P3 - Low Priority / Backlog**:
1. [Feature name] - [Brief reason]

### Rationale & Trade-offs

**Why we're prioritizing [Top Feature]**:
- [Reason 1]
- [Reason 2]

**What we're deferring and why**:
- [Feature name]: [Reason for deferral]

Help me prioritize [list of features] using the most appropriate framework for our situation.`
    },
    {
        id: 'stakeholder-communication',
        title: 'Stakeholder Update 利益相关方沟通',
        category: 'other',
        description: '结构化的利益相关方更新模板，清晰传达进展、决策、风险和下一步行动。保持透明度和对齐。',
        usage: '用于定期的利益相关方会议、邮件更新或决策汇报。',
        tags: ['沟通', '利益相关方', '项目更新', '汇报'],
        content: `## Stakeholder Update Template

### Update Header
- **Date**: [Date of update]
- **Project/Product**: [Name]
- **From**: [Your name/team]
- **Period Covered**: [Time period]
- **Next Update**: [Date]

### TL;DR (Executive Summary)
[2-3 sentences summarizing the most important points]

**Overall Status**: 🟢 On Track / 🟡 At Risk / 🔴 Off Track

### Key Highlights
**What Went Well** ✅:
- [Achievement 1]
- [Achievement 2]
- [Achievement 3]

**Key Metrics** 📊:
- [Metric 1]: [Current value] ([trend])
- [Metric 2]: [Current value] ([trend])
- [Metric 3]: [Current value] ([trend])

### Progress Update

#### Completed This Period ✅
1. **[Initiative/Feature Name]**
   - What we delivered: [Description]
   - Impact: [Expected or measured impact]

2. **[Initiative/Feature Name]**
   - What we delivered:
   - Impact:

#### In Progress 🚧
1. **[Initiative Name]**
   - Current status: [Brief status]
   - Expected completion: [Date]
   - Confidence: [High/Medium/Low]

2. **[Initiative Name]**
   - Current status:
   - Expected completion:
   - Confidence:

#### Coming Next ⏭️
1. **[Upcoming Initiative]**
   - Target start: [Date]
   - Why now: [Brief rationale]

### Challenges & Blockers 🚫

**Current Issues**:
1. **[Issue Name]**
   - Impact: [How this affects us]
   - Mitigation: [What we're doing about it]
   - Help Needed: [If any]

2. **[Issue Name]**
   - Impact:
   - Mitigation:
   - Help Needed:

### Decisions Needed 🤔

**High Priority**:
1. **[Decision Title]**
   - Context: [Why we need to decide]
   - Options: [Option A vs Option B]
   - Recommendation: [Your recommendation]
   - By When: [Decision deadline]

### Risks & Mitigation ⚠️

| Risk | Probability | Impact | Mitigation Plan |
|------|------------|--------|----------------|
| [Risk 1] | High/Med/Low | High/Med/Low | [What we're doing] |
| [Risk 2] | High/Med/Low | High/Med/Low | [What we're doing] |

### Customer Feedback 💬

**Recent Insights**:
- [Key feedback theme 1]
- [Key feedback theme 2]
- [Key feedback theme 3]

**What We're Doing About It**:
- [Action being taken]

### Looking Ahead 🔮

**Next 2 Weeks**:
- [Key milestone or deliverable]
- [Important activity]

**Next 30 Days**:
- [Major milestone]
- [Strategic focus]

### Questions or Feedback?
[How stakeholders can reach out or provide input]

---

**Meeting Cadence**: [How often you update]
**Detailed Docs**: [Links to more detailed documentation]

Help me create a stakeholder update for [product/project name] covering [time period].`
    },
    {
        id: 'okr-template',
        title: 'OKR 目标与关键结果',
        category: 'strategy',
        description: '制定清晰的 OKR（Objectives and Key Results），连接战略目标和可衡量的关键结果。确保团队聚焦在最重要的事情上。',
        usage: '在季度规划、年度规划或启动重要项目时使用。',
        tags: ['OKR', '目标设定', 'KPI', '绩效管理'],
        content: `## OKR Template

### OKR Overview
- **Period**: [Q1 2024 / 2024 / H1 2024]
- **Team/Product**: [Team or product name]
- **Owner**: [Who owns this OKR]

### OKR Framework Reminder

**Objective**: What do we want to achieve? (Qualitative, inspiring, memorable)
**Key Results**: How will we know we're making progress? (Quantitative, measurable, time-bound)

Good Key Results:
- Start with a verb (Increase, Reduce, Launch, Achieve)
- Include a number (metric or target)
- Are ambitious but achievable (70% confidence)

---

### Objective 1: [Inspiring, qualitative goal]

**Why this matters**: [Context and strategic importance]

**Key Results**:
- **KR1**: [Verb] [Metric] from [Baseline] to [Target] by [Date]
  - *Current: [Current value]*
  - *Target: [Target value]*
  - *Progress: [Progress indicator]*

- **KR2**: [Verb] [Metric] from [Baseline] to [Target] by [Date]
  - *Current: [Current value]*
  - *Target: [Target value]*
  - *Progress: [Progress indicator]*

- **KR3**: [Verb] [Metric] from [Baseline] to [Target] by [Date]
  - *Current: [Current value]*
  - *Target: [Target value]*
  - *Progress: [Progress indicator]*

**Confidence Level**: [70% / On Track / At Risk]

**Key Initiatives to Achieve This**:
- [Initiative 1]
- [Initiative 2]
- [Initiative 3]

---

### Objective 2: [Inspiring, qualitative goal]

**Why this matters**: [Context and strategic importance]

**Key Results**:
- **KR1**: [Verb] [Metric] from [Baseline] to [Target]
- **KR2**: [Verb] [Metric] from [Baseline] to [Target]
- **KR3**: [Verb] [Metric] from [Baseline] to [Target]

**Confidence Level**: [Assessment]

**Key Initiatives**:
- [Initiative 1]
- [Initiative 2]

---

### Objective 3: [Inspiring, qualitative goal]

[Same structure as above]

---

### Cross-functional Dependencies

**We depend on**:
- [Team X] for [specific dependency]
- [Team Y] for [specific dependency]

**Others depend on us**:
- [Team A] needs us to [specific deliverable]

### Resources & Constraints

**Team Capacity**: [Size, allocation]
**Budget**: [If applicable]
**Key Constraints**: [Time, resources, dependencies]

### Progress Tracking

**Check-in Cadence**: [Weekly/Bi-weekly]
**Review Meeting**: [When and with whom]
**Dashboard**: [Link to metrics dashboard if available]

### Scoring Rubric

**0.0 - 0.3**: We failed to make meaningful progress
**0.4 - 0.6**: We made progress but fell short
**0.7 - 0.9**: We achieved what we set out to do ✅
**1.0**: We exceeded expectations (may indicate sandbag)

### Examples of Good OKRs

**Objective**: Become the most loved product management tool for remote teams

**Key Results**:
- Increase NPS from 45 to 65
- Achieve 90% feature adoption for collaboration features
- Reduce time-to-value from 7 days to 2 days (measure: time to first workflow created)

---

Help me create OKRs for [team/product] for [time period] that align with [strategic goals].`
    },
    {
        id: 'release-notes',
        title: 'Release Notes 发布说明',
        category: 'other',
        description: '清晰、用户友好的发布说明模板，让用户了解新功能、改进和修复。平衡技术准确性和用户可读性。',
        usage: '在每次产品发布时使用，面向最终用户或内部团队。',
        tags: ['发布说明', '更新日志', '产品更新', '用户沟通'],
        content: `## Release Notes Template

### Release Information
- **Version**: [Version number, e.g., v2.5.0]
- **Release Date**: [Date]
- **Type**: [Major Release / Minor Release / Patch / Hotfix]

---

## 🎉 What's New

### [Feature Name]
**What it does**: [User-friendly description of the feature]

**Why it matters**: [The problem this solves or value it provides]

**How to use it**:
1. [Step 1]
2. [Step 2]
3. [Step 3]

**Learn More**: [Link to documentation or demo]

---

### [Feature Name 2]
[Same structure as above]

---

## ✨ Improvements

### [Area of Improvement]
- **What changed**: [Description]
- **Impact**: [How this benefits users]

### [Area of Improvement 2]
- **What changed**: [Description]
- **Impact**: [How this benefits users]

---

## 🐛 Bug Fixes

- **Fixed**: [Issue description] - [Brief explanation of what was wrong and what's fixed]
- **Fixed**: [Issue description]
- **Fixed**: [Issue description]

---

## 🔧 Technical Updates

*(Optional section for technical audience)*

- **Performance**: [Performance improvements]
- **Infrastructure**: [Backend or infrastructure changes]
- **Security**: [Security updates]
- **API Changes**: [Any API modifications]

---

## 📱 Platform Availability

- ✅ Web App
- ✅ iOS (v1.2.0+)
- ✅ Android (v1.2.0+)
- ⏳ Desktop (Coming next week)

---

## 💡 Coming Soon

Get excited for these features landing in the next release:
- [Upcoming feature 1]
- [Upcoming feature 2]
- [Upcoming feature 3]

---

## 📚 Resources

- **User Guide**: [Link]
- **Video Tutorial**: [Link]
- **API Documentation**: [Link]
- **Support**: [How to get help]

---

## 🙏 Thank You

Special thanks to the [teams/individuals] who made this release possible, and to our users who provided valuable feedback.

---

### For Internal Team

**Deployment Timeline**:
- Staging: [Date/Time]
- Production: [Date/Time]
- Rollout: [Percentage or phased plan]

**Rollback Plan**: [If needed]

**Known Issues**: [Any known issues not yet fixed]

**Monitoring**: [Key metrics to watch]

---

## Changelog (Technical)

### Added
- [Technical addition 1]
- [Technical addition 2]

### Changed
- [Technical change 1]
- [Technical change 2]

### Deprecated
- [What's being phased out]

### Removed
- [What's been removed]

### Fixed
- [Technical fix 1]
- [Technical fix 2]

### Security
- [Security updates]

---

Help me create release notes for [product name] [version] that highlight [key changes].`
    },
    {
        id: 'retrospective',
        title: 'Sprint Retrospective 迭代回顾',
        category: 'agile',
        description: '促进团队反思和改进的回顾会议框架。创建安全的环境让团队分享经验、识别问题和制定改进措施。',
        usage: '在每个 Sprint 结束时使用，促进团队持续改进。',
        tags: ['敏捷回顾', 'Scrum', '团队改进', '反思'],
        content: `## Sprint Retrospective Template

### Retrospective Overview
- **Sprint**: [Sprint number or name]
- **Date**: [Date of retro]
- **Facilitator**: [Who's facilitating]
- **Participants**: [Team members present]
- **Duration**: [Time allocated]

### Ground Rules
- Focus on learning, not blaming
- Everyone's voice matters
- Be specific with examples
- Commit to actions, not just discussions

---

## Part 1: Set the Stage (5 min)

**Check-in**: On a scale of 1-5, how are you feeling about this sprint?
- [Team member]: [Rating]
- [Team member]: [Rating]

---

## Part 2: Gather Data (15 min)

### What Went Well? 👍
(Things to celebrate and continue)

- [Team member 1]: [What went well]
- [Team member 2]: [What went well]
- [Team member 3]: [What went well]

**Patterns/Themes**:
- [Common theme 1]
- [Common theme 2]

---

### What Could Be Improved? 🤔
(Constructive observations, not complaints)

- [Team member 1]: [Area for improvement]
- [Team member 2]: [Area for improvement]
- [Team member 3]: [Area for improvement]

**Patterns/Themes**:
- [Common theme 1]
- [Common theme 2]

---

### What Puzzled Us? 🤷
(Questions, uncertainties, things that confused us)

- [Question or uncertainty 1]
- [Question or uncertainty 2]

---

## Part 3: Generate Insights (15 min)

### Mad/Sad/Glad Framework

**Mad** (Frustrations):
- [What made us frustrated]

**Sad** (Disappointments):
- [What disappointed us]

**Glad** (Celebrations):
- [What made us happy]

---

### Start, Stop, Continue

**Start Doing**:
- [New practice to adopt]

**Stop Doing**:
- [Practice to eliminate]

**Continue Doing**:
- [Practice to keep]

---

## Part 4: Decide What to Do (15 min)

### Top 3 Issues to Address
(Vote as a team on priorities)

1. **[Issue 1]**
   - Votes: [Number]
   - Why it matters: [Explanation]

2. **[Issue 2]**
   - Votes: [Number]
   - Why it matters: [Explanation]

3. **[Issue 3]**
   - Votes: [Number]
   - Why it matters: [Explanation]

---

### Action Items

| Action | Owner | Due Date | Success Criteria |
|--------|-------|----------|-----------------|
| [Specific action to take] | [Name] | [Date] | [How we'll know it worked] |
| [Action 2] | [Name] | [Date] | [Success criteria] |
| [Action 3] | [Name] | [Date] | [Success criteria] |

---

## Part 5: Close the Retrospective (5 min)

### Appreciation Round 💙
(Each person appreciates one teammate)

- [Team member 1] appreciates [Team member 2] for [specific thing]
- [Continue for each team member]

---

### Check-out
**One word describing how you feel now**:
- [Team member 1]: [Word]
- [Team member 2]: [Word]

---

## Follow-up

**Action Items Review**: [Next meeting to review progress]
**Next Retrospective**: [Date]

---

## Retrospective Metrics

**Sprint Velocity**: [Velocity]
**Sprint Goal Achievement**: [Met/Partially Met/Not Met]
**Team Happiness**: [Average score]

---

## Notes for Next Time

**Things to remember**:
- [Note 1]
- [Note 2]

**Experiments to Check In On**:
- [Experiment from previous retro]

---

### Alternative Formats

**Sailboat Retrospective**:
- ⛵ Wind (What's helping us go fast)
- ⚓ Anchor (What's holding us back)
- 🪨 Rocks (Risks ahead)
- 🏝️ Island (Our goal)

**4Ls Retrospective**:
- Liked (What we enjoyed)
- Learned (What we discovered)
- Lacked (What was missing)
- Longed For (What we wish we had)

Help me facilitate a retrospective for [team name] focusing on [specific sprint or time period].`
    },
    {
        id: 'user-interview-guide',
        title: 'User Interview Guide 用户访谈指南',
        category: 'research',
        description: '结构化的用户访谈指南，帮助您进行深入的定性研究。设计有效的问题，探索用户需求、行为和痛点。',
        usage: '在进行用户研究、验证假设或探索新机会时使用。',
        tags: ['用户访谈', '定性研究', '用户研究', '洞察'],
        content: `## User Interview Guide Template

### Interview Overview
- **Research Goal**: [What you want to learn]
- **Date**: [Interview date]
- **Interviewer**: [Your name]
- **Participant**: [Participant ID or pseudonym for privacy]
- **Duration**: [Planned duration, typically 30-60 min]

### Participant Background
- **Role**: [Job title or role]
- **Experience**: [Years in role/industry]
- **Company**: [Company type/size]
- **Recruited via**: [How you found them]

---

## Interview Structure (60 minutes)

### Introduction (5 minutes)

**Welcome & Build Rapport**:
- Thank you for joining today
- Brief intro about yourself
- Purpose of this interview
- How we'll use the information

**Set Expectations**:
- Duration: ~60 minutes
- Recording (if applicable): "Mind if I record for note-taking?"
- Confidentiality: "Your responses will be anonymized"
- No right or wrong answers

**Get Consent**:
- Permission to record
- Permission to take notes
- Permission to quote (anonymously)

---

### Warm-up Questions (5 minutes)
*(Build comfort, get context)*

1. "Tell me a bit about your role and what a typical day looks like for you."
2. "How long have you been doing [relevant activity]?"
3. "What are your main responsibilities related to [topic area]?"

---

### Current State & Context (15 minutes)
*(Understand their current situation)*

**Behavior & Workflow**:
1. "Walk me through the last time you [did relevant activity]."
   - *Listen for: Steps, tools, pain points*
   - *Follow-up*: "What happened before that?" "What happened next?"

2. "What tools or solutions do you currently use for [task]?"
   - *Probe*: "What do you like about them?" "What frustrates you?"

3. "How often do you [perform this task]?"
   - *Understand frequency and importance*

**Pain Points & Challenges**:
4. "What's the most frustrating part of [process/task]?"
   - *Follow-up*: "Can you give me a specific example?"

5. "What have you tried to solve this problem?"
   - *Understand attempted solutions*

6. "If you could wave a magic wand, what would you change about [process]?"

---

### Goals & Motivations (10 minutes)
*(Understand what they're trying to achieve)*

7. "What are you ultimately trying to accomplish with [activity]?"
   - *Uncover deeper goals beyond surface tasks*

8. "What does success look like for you?"
   - *Understand success criteria*

9. "What would happen if you couldn't do [task] anymore?"
   - *Assess criticality*

10. "Who else is involved or affected by this process?"
    - *Map stakeholders*

---

### Deep Dive into [Specific Topic] (15 minutes)
*(Focus on your research questions)*

**For New Product Validation**:
11. "Have you ever thought about [problem] before?"
12. "How important is solving this problem to you?" (1-10 scale)
13. "What would make you try a new solution for this?"
14. "What would make you pay for a solution to this problem?"

**For Feature Exploration**:
11. "Imagine if you could [proposed feature], how would that change things for you?"
12. "Where in your workflow would this fit?"
13. "What concerns or questions do you have about this?"

**For Existing Product Improvement**:
11. "What do you use [product] for most often?"
12. "What's missing from [product] that you wish it had?"
13. "If you could improve one thing about [product], what would it be?"

---

### Comparative & Decision-Making (5 minutes)

14. "How did you choose your current solution/tool?"
    - *Understand decision criteria*

15. "What other solutions did you consider?"
    - *Map competitive landscape*

16. "What would make you switch to a different solution?"
    - *Understand switching costs and motivations*

---

### Closing Questions (3 minutes)

17. "Is there anything I didn't ask that you think is important for me to know?"
    - *Often reveals unexpected insights*

18. "Do you know anyone else who might have valuable perspectives on this?"
    - *Snowball sampling*

---

### Wrap-up (2 minutes)

- Thank them for their time
- Explain next steps
- Offer to share findings (if appropriate)
- Incentive/compensation details

---

## Post-Interview Notes

### Key Insights
- [Insight 1]
- [Insight 2]
- [Insight 3]

### Interesting Quotes
- "[Quote that captures important insight]"
- "[Another memorable quote]"

### Patterns & Themes
- [Pattern observed]
- [Connection to other interviews]

### Follow-up Actions
- [Questions to explore further]
- [Additional research needed]

### Product Implications
- [How this affects product decisions]
- [Feature ideas that emerged]

---

## Interview Tips

**Do**:
- Ask open-ended questions
- Follow up with "Why?" and "Tell me more"
- Let silence happen (people often fill it with insights)
- Focus on past behavior, not hypotheticals
- Take notes on exact words used

**Don't**:
- Lead the witness ("Don't you think X would be useful?")
- Ask Yes/No questions
- Explain your solution too early
- Ask multiple questions at once
- Interrupt interesting tangents

**Good Follow-ups**:
- "Can you give me an example?"
- "What happened next?"
- "How did that make you feel?"
- "Why is that important?"
- "What do you mean by [word they used]?"

---

Help me create a user interview guide for researching [topic/problem area] with [target user segment].`
    },
    {
        id: 'product-launch-checklist',
        title: 'Product Launch Checklist 产品发布清单',
        category: 'other',
        description: '全面的产品发布检查清单，确保发布前所有关键环节都已就绪。涵盖产品、营销、运营、支持等多个维度。',
        usage: '在产品或重要功能发布前 2-4 周开始使用，确保无遗漏。',
        tags: ['产品发布', '上线检查', 'Go-to-Market', '发布管理'],
        content: `## Product Launch Checklist

### Launch Overview
- **Product/Feature**: [Name]
- **Launch Date**: [Target date]
- **Launch Type**: [Soft Launch / Full Launch / Beta / Phased Rollout]
- **Launch Lead**: [Person responsible]

---

## Pre-Launch: 4 Weeks Out

### Product Readiness
- [ ] **Feature Complete**: All P0 features are done
- [ ] **Core User Flows Tested**: Happy path works end-to-end
- [ ] **Performance Benchmarks Met**: Load times within targets
- [ ] **Security Review Complete**: Security team signed off
- [ ] **Legal/Compliance Review**: Terms, privacy, compliance checked
- [ ] **Accessibility**: WCAG standards met
- [ ] **Mobile Responsiveness**: Works on key devices
- [ ] **Browser Compatibility**: Tested on major browsers
- [ ] **Error Handling**: Graceful degradation in place
- [ ] **Rollback Plan**: Can we roll back if needed?

### Analytics & Monitoring
- [ ] **Success Metrics Defined**: Know what success looks like
- [ ] **Analytics Instrumented**: All key events tracked
- [ ] **Dashboards Created**: Real-time monitoring in place
- [ ] **Alerts Configured**: Will know if things break
- [ ] **A/B Test Setup**: If applicable, test is configured
- [ ] **Baseline Metrics Captured**: Know current performance

### Documentation
- [ ] **User Documentation**: Help center articles written
- [ ] **Video Tutorials**: If needed, recorded and edited
- [ ] **API Documentation**: If applicable, up to date
- [ ] **Internal Wiki Updated**: Team has context
- [ ] **FAQ Prepared**: Common questions answered
- [ ] **Release Notes Draft**: Ready to publish

---

## Pre-Launch: 2 Weeks Out

### Marketing & Communications
- [ ] **Launch Plan Finalized**: GTM strategy approved
- [ ] **Landing Page Live**: If needed
- [ ] **Email Campaigns Ready**: Templates and segments prepared
- [ ] **Blog Post Written**: Announcement draft ready
- [ ] **Social Media Plan**: Posts scheduled
- [ ] **Press/Media Outreach**: If applicable
- [ ] **Customer Preview**: Beta users or early access program
- [ ] **Internal Announcement**: Team knows about launch

### Sales & Customer Success
- [ ] **Sales Team Trained**: Pitch and demo ready
- [ ] **CS Team Briefed**: Support team knows what's coming
- [ ] **Sales Collateral**: One-pagers, decks ready
- [ ] **Demo Environment**: Clean demo account prepared
- [ ] **Pricing Finalized**: If new pricing, approved and loaded
- [ ] **Contract/Legal Templates**: Updated if needed

### Support & Operations
- [ ] **Support Team Trained**: FAQ and troubleshooting guide
- [ ] **Support Macros Created**: Canned responses ready
- [ ] **Escalation Process**: Know how to handle issues
- [ ] **Capacity Planning**: Support can handle volume
- [ ] **Knowledge Base Updated**: Self-service content ready

---

## Pre-Launch: 1 Week Out

### Testing & QA
- [ ] **QA Sign-off**: Testing team approves
- [ ] **User Acceptance Testing**: Stakeholders tested and approved
- [ ] **Load Testing**: Can handle expected traffic
- [ ] **Staging Environment Validated**: Matches production
- [ ] **Beta Feedback Incorporated**: If applicable
- [ ] **Edge Cases Tested**: Unusual scenarios handled

### Technical Readiness
- [ ] **Database Migrations Tested**: If applicable
- [ ] **Feature Flags Configured**: Can control rollout
- [ ] **Caching Strategy**: In place and tested
- [ ] **CDN Configuration**: If applicable
- [ ] **Backup Verified**: Recent backup exists and can restore
- [ ] **Monitoring**: 24/7 on-call rotation scheduled

### Go-to-Market Execution
- [ ] **Launch Day Timeline**: Hour-by-hour plan
- [ ] **Launch Team Assignments**: Everyone knows their role
- [ ] **Communication Channels**: Slack channel or war room set up
- [ ] **Stakeholder Briefing**: Executives briefed
- [ ] **Customer Comms Scheduled**: Emails queued
- [ ] **Social Media Queued**: Posts ready to go
- [ ] **Blog Post Scheduled**: Ready to publish

---

## Launch Day

### Technical Launch
- [ ] **Deploy to Production**: Code shipped
- [ ] **Feature Flags Enabled**: Rolled out to target % of users
- [ ] **Smoke Tests Pass**: Quick validation it works
- [ ] **Monitor Error Rates**: Watching for issues
- [ ] **Monitor Performance**: Response times normal
- [ ] **Database Performance**: No anomalies

### Communications Launch
- [ ] **Internal Announcement Sent**: Team knows we launched
- [ ] **Customer Email Sent**: Target segments notified
- [ ] **Blog Post Published**: Live on website
- [ ] **Social Media Posted**: Announced on channels
- [ ] **Press Release**: If applicable, distributed
- [ ] **Update Website**: Hero section, navigation updated

### Monitoring & Response
- [ ] **War Room Active**: Team monitoring together
- [ ] **Customer Feedback Monitored**: Listening for reactions
- [ ] **Support Tickets Triaged**: Addressing issues quickly
- [ ] **Metrics Dashboard Watched**: Tracking success metrics

---

## Post-Launch: First 24 Hours

- [ ] **All Systems Stable**: No major issues
- [ ] **Success Metrics Trending**: Moving in right direction
- [ ] **Critical Bugs Addressed**: Any launch day issues fixed
- [ ] **Customer Sentiment**: Feedback is positive or neutral
- [ ] **Team Debriefed**: Quick standup on learnings

---

## Post-Launch: First Week

### Review & Optimize
- [ ] **Metrics Review Meeting**: Analyze launch performance
- [ ] **Customer Feedback Synthesized**: Themes identified
- [ ] **Support Issues Triaged**: Common problems addressed
- [ ] **Documentation Updated**: Based on real questions
- [ ] **Quick Wins Identified**: Low-hanging fruit for improvement

### Communication
- [ ] **Internal Update**: Share results with company
- [ ] **Customer Thank You**: Acknowledge early adopters
- [ ] **Blog Post / Case Study**: Share success stories
- [ ] **Sales Team Update**: Give them ammunition

---

## Post-Launch: First Month

- [ ] **Full Retrospective**: What went well, what didn't
- [ ] **ROI Analysis**: Did we achieve our goals?
- [ ] **Roadmap Adjustments**: Based on learnings
- [ ] **Documentation Refresh**: Final updates
- [ ] **Celebrate**: Recognize the team's work 🎉

---

## Key Contacts

| Role | Name | Contact |
|------|------|---------|
| Launch Lead | [Name] | [Email/Slack] |
| Engineering Lead | [Name] | [Email/Slack] |
| Design Lead | [Name] | [Email/Slack] |
| Marketing Lead | [Name] | [Email/Slack] |
| Support Lead | [Name] | [Email/Slack] |
| Product Marketing | [Name] | [Email/Slack] |

---

## Launch Risks & Mitigation

| Risk | Probability | Impact | Mitigation |
|------|------------|--------|------------|
| [Risk 1] | High/Med/Low | High/Med/Low | [Plan] |
| [Risk 2] | High/Med/Low | High/Med/Low | [Plan] |

---

## Success Criteria

**Must-Have for Launch**:
- [Criterion 1]
- [Criterion 2]

**Success Metrics (30 days)**:
- [Metric 1]: [Target]
- [Metric 2]: [Target]
- [Metric 3]: [Target]

---

Help me create a comprehensive launch checklist for [product/feature name] launching on [date].`
    },
    {
        id: 'ab-test-plan',
        title: 'A/B Test Plan 实验计划',
        category: 'analysis',
        description: '科学的 A/B 测试设计框架，从假设到实验设计、指标选择到结果分析。用数据驱动产品决策。',
        usage: '在做重要产品变更或优化时使用，确保实验严谨性和可信度。',
        tags: ['A/B测试', '实验设计', '数据驱动', '优化'],
        content: `## A/B Test Plan Template

### Experiment Overview
- **Test Name**: [Descriptive name]
- **Owner**: [Your name]
- **Status**: [Planning / Running / Analyzing / Completed]
- **Start Date**: [Date]
- **End Date**: [Estimated date]

---

## 1. Hypothesis

### Problem Statement
**What problem are we trying to solve?**
[Describe the issue or opportunity]

**Current Performance**:
- [Current metric]: [Current value]
- [Context about why this matters]

### Hypothesis Statement
**We believe that** [change we'll make]

**Will result in** [expected outcome]

**For** [target user segment]

**We'll know this is true when** [specific metric] [increases/decreases] by [amount]

**Example**: "We believe that changing the CTA button color from blue to green will result in a 10% increase in sign-ups for new visitors because green creates a stronger visual contrast."

---

## 2. Success Metrics

### Primary Metric
- **Metric**: [What you're primarily measuring]
- **Current Baseline**: [Current value]
- **Expected Impact**: [Target change]
- **Minimum Detectable Effect (MDE)**: [Smallest change worth detecting]

### Secondary Metrics
1. **[Metric name]**: [Why it matters]
2. **[Metric name]**: [Why it matters]
3. **[Metric name]**: [Why it matters]

### Guardrail Metrics
*(Metrics we don't want to negatively impact)*
1. **[Metric]**: [Acceptable threshold]
2. **[Metric]**: [Acceptable threshold]

---

## 3. Experiment Design

### Variants

**Control (A)**: [Current experience]
- [Description of control]
- [Screenshot or mockup]

**Variant (B)**: [New experience]
- [Description of variant]
- [What's different from control]
- [Screenshot or mockup]

### Traffic Allocation
- Control: [X%]
- Variant: [Y%]
- Excluded: [Z%] (if any)

### Targeting
**Who's in the test?**:
- [User segment criteria]
- [Geographic restrictions if any]
- [Device/platform if relevant]

**Who's excluded?**:
- [Exclusion criteria]
- [Why they're excluded]

---

## 4. Sample Size & Duration

### Statistical Parameters
- **Confidence Level**: [95% typical]
- **Statistical Power**: [80% typical]
- **Minimum Detectable Effect**: [X%]
- **Baseline Conversion Rate**: [Y%]

### Calculated Sample Size
- **Required Sample Size**: [N users per variant]
- **Daily Traffic**: [X users/day]
- **Estimated Duration**: [Y days]

**Sample Size Calculator**: [Link to calculator used]

### Runtime Considerations
- **Minimum Runtime**: [X days to account for weekly patterns]
- **Maximum Runtime**: [Y days before making decision]

---

## 5. Implementation Details

### Technical Specifications
- **Platform**: [Tool being used: Optimizely, LaunchDarkly, etc.]
- **Feature Flag**: [Flag name if applicable]
- **Tracking Events**: [List of events to track]

### Code Changes Required
- [File/component 1]
- [File/component 2]

### QA Checklist
- [ ] Control renders correctly
- [ ] Variant renders correctly
- [ ] Analytics events fire correctly
- [ ] Works on mobile
- [ ] Works on all browsers
- [ ] No console errors

---

## 6. Analysis Plan

### When to Analyze
- **Peek Schedule**: [When to check intermediate results, if at all]
- **Final Analysis**: [When to make final decision]

### Statistical Test
- **Test Type**: [t-test, chi-square, etc.]
- **Significance Level**: [α = 0.05 typical]
- **Multiple Testing Correction**: [If testing multiple metrics]

### Decision Criteria

**We'll ship the variant if**:
- Primary metric shows [X%] lift with [95%] confidence
- Secondary metrics are neutral or positive
- No guardrail metrics regressed significantly

**We'll iterate if**:
- [Conditions for iteration]

**We'll abandon if**:
- [Conditions for stopping]

---

## 7. Risks & Considerations

### Potential Risks
- **Risk 1**: [Description and impact]
  - Mitigation: [How we'll address it]
- **Risk 2**: [Description and impact]
  - Mitigation: [How we'll address it]

### Assumptions
- [Assumption 1]
- [Assumption 2]

### Edge Cases
- [Edge case 1 and how it's handled]
- [Edge case 2 and how it's handled]

---

## 8. Results (To be filled after test)

### Primary Metric Results

| Metric | Control | Variant | Change | P-Value | Significant? |
|--------|---------|---------|--------|---------|--------------|
| [Metric] | [Value] | [Value] | [%] | [p] | Yes/No |

### Secondary Metrics Results

| Metric | Control | Variant | Change | P-Value | Significant? |
|--------|---------|---------|--------|---------|--------------|
| [Metric] | [Value] | [Value] | [%] | [p] | Yes/No |

### Key Insights
- [Insight 1]
- [Insight 2]
- [Insight 3]

### Learnings
**What worked**:
- [Learning 1]

**What didn't work**:
- [Learning 2]

**Unexpected findings**:
- [Surprise finding]

---

## 9. Decision & Next Steps

### Decision
- [ ] **Ship variant to 100%**
- [ ] **Keep control (no change)**
- [ ] **Iterate and re-test**
- [ ] **Test a different approach**

**Rationale**: [Why we made this decision]

### Implementation Plan
(If shipping)
- [ ] Remove test code
- [ ] Full rollout by [date]
- [ ] Update documentation
- [ ] Inform stakeholders

### Follow-up Tests
- [Next test idea 1]
- [Next test idea 2]

---

## 10. Stakeholder Communication

### Who to Inform
- [Team/person 1]: [What they need to know]
- [Team/person 2]: [What they need to know]

### Communication Plan
- **Pre-Launch**: [Who to notify before starting]
- **During Test**: [Updates during test]
- **Post-Analysis**: [How to share results]

---

## Resources

- **Test Dashboard**: [Link to real-time results]
- **Design Mocks**: [Link to designs]
- **Technical Spec**: [Link to implementation doc]
- **Previous Related Tests**: [Links to related experiments]

---

Help me design an A/B test for [feature/change] to improve [goal/metric].`
    },
    {
        id: 'product-vision',
        title: 'Product Vision 产品愿景',
        category: 'strategy',
        description: '定义产品的长期愿景和北极星。激励团队、对齐方向，为产品战略提供清晰的目标和价值主张。',
        usage: '在产品初创、战略转型或年度规划时使用。',
        tags: ['产品愿景', '战略规划', '北极星', '使命'],
        content: `## Product Vision Template

### Vision Statement

**Our Vision**:
[In 2-3 inspiring sentences, describe the future state you're working toward]

Example: "We envision a world where every product manager has AI-powered tools to make better, faster decisions. We're building the intelligent copilot that augments PM thinking, freeing them to focus on strategy and creativity."

---

## 1. The Problem We're Solving

### The Current Reality
**What's broken today?**
[Describe the current state and its limitations]

**Who's affected?**
[Target users and their struggles]

**Why does this matter?**
[The significance of solving this problem]

**Market Context**:
- Market size: [TAM/SAM/SOM if known]
- Current solutions: [What exists today]
- Why existing solutions fall short: [Gap analysis]

---

## 2. Our Solution Vision

### The Future State
**What will the world look like when we succeed?**
[Paint a picture of the future]

**How will users' lives be different?**
[Concrete benefits and transformations]

**What becomes possible?**
[New opportunities unlocked]

---

## 3. Core Beliefs & Principles

**We believe**:
1. [Fundamental belief about the market/users/technology]
2. [Core conviction that drives your approach]
3. [Principle that guides decisions]

**We don't believe**:
1. [What we're rejecting or moving away from]

---

## 4. Target Audience (In 3-5 Years)

### Primary Users
**Who**: [Description]
**Their World**: [Context of their lives/work]
**Their Needs**: [What they're trying to accomplish]

### Adjacent Users (Future)
[Who might we serve as we expand]

---

## 5. Value Proposition

### For [target customer]
### Who [statement of need]
### Our product is [product category]
### That [key benefit]
### Unlike [primary alternative]
### Our product [primary differentiation]

---

## 6. Strategic Pillars

**What are the 3-5 big themes that define our product?**

#### Pillar 1: [Theme Name]
[What this means and why it matters]

#### Pillar 2: [Theme Name]
[What this means and why it matters]

#### Pillar 3: [Theme Name]
[What this means and why it matters]

---

## 7. North Star Metric

**Our North Star**: [Single metric that best captures value delivery]

**Why this metric?**
[How it reflects value for users and business]

**Supporting Metrics**:
- [Metric 1]: [Why it matters]
- [Metric 2]: [Why it matters]

---

## 8. Product Principles

**How we make decisions**:

1. **[Principle 1: e.g., "Simple by Default"]**
   - [What this means in practice]

2. **[Principle 2: e.g., "Data-Informed, Not Data-Driven"]**
   - [What this means in practice]

3. **[Principle 3: e.g., "Build for Scale"]**
   - [What this means in practice]

---

## 9. What We're NOT Building

*(Equally important: what we're saying no to)*

- **Not**: [Thing you won't build]
  - **Because**: [Strategic reason]

- **Not**: [Another thing]
  - **Because**: [Reason]

---

## 10. The Journey (Phases)

### Phase 1: [Timeframe] - [Focus]
**Goal**: [What we'll achieve]
**Key Capabilities**: [Core features/capabilities]

### Phase 2: [Timeframe] - [Focus]
**Goal**: [What we'll achieve]
**Key Capabilities**: [Core features/capabilities]

### Phase 3: [Timeframe] - [Focus]
**Goal**: [What we'll achieve]
**Key Capabilities**: [Core features/capabilities]

---

## 11. Success Looks Like...

**In 1 Year**:
- [Milestone 1]
- [Milestone 2]
- [Key metric achievement]

**In 3 Years**:
- [Milestone 1]
- [Milestone 2]
- [Market position]

**In 5 Years**:
- [Ultimate achievement]
- [Impact on market/users]
- [Company position]

---

## 12. Competitive Differentiation

**What makes us unique?**
[Your sustainable competitive advantage]

**What will be hard to copy?**
[Your moat]

---

## 13. How We'll Win

**Our Unfair Advantages**:
1. [Advantage 1]
2. [Advantage 2]
3. [Advantage 3]

**Our Strategy**:
[High-level approach to winning in the market]

---

## 14. Key Assumptions & Risks

**We're betting on**:
- [Key assumption 1]
- [Key assumption 2]

**What could derail us**:
- [Risk 1 and mitigation]
- [Risk 2 and mitigation]

**What needs to be true**:
- [Dependency 1]
- [Dependency 2]

---

## 15. Inspiration & Aspirations

**Companies we admire**:
[Companies with characteristics we want to emulate]

**What we want to be known for**:
[Reputation and brand attributes]

**Our contribution to the world**:
[Legacy and impact]

---

## Living Document

**Last Updated**: [Date]
**Next Review**: [Date]
**Owner**: [Product Leader]

**How to use this**:
- Reference in roadmap planning
- Share with new team members
- Revisit in strategic reviews
- Use in pitch decks and fundraising

---

Help me craft a compelling product vision for [product name] that will [achieve goal].`
    },
    {
        id: 'go-to-market-strategy',
        title: 'Go-to-Market Strategy GTM策略',
        category: 'strategy',
        description: '完整的市场进入策略框架，涵盖目标市场、定位、定价、渠道、销售策略和营销计划。确保产品成功上市。',
        usage: '在新产品发布、进入新市场或重大产品升级时使用。',
        tags: ['GTM', '市场策略', '销售策略', '营销'],
        content: `## Go-to-Market Strategy Template

### GTM Overview
- **Product/Feature**: [Name]
- **Launch Date**: [Target date]
- **GTM Owner**: [Name]
- **Status**: [In Planning / In Execution / Launched]

---

## 1. Executive Summary

**The Opportunity**:
[1-2 paragraphs on the market opportunity]

**Our Solution**:
[Brief description of what we're launching]

**Target Outcome**:
[What success looks like]

**Key Metrics**:
- [Metric 1]: [Target]
- [Metric 2]: [Target]

---

## 2. Market Analysis

### Market Size & Opportunity
- **TAM (Total Addressable Market)**: [$X billion]
- **SAM (Serviceable Addressable Market)**: [$Y billion]
- **SOM (Serviceable Obtainable Market)**: [$Z million]

### Market Trends
- [Trend 1 and what it means for us]
- [Trend 2 and what it means for us]
- [Trend 3 and what it means for us]

### Competitive Landscape
**Direct Competitors**:
- [Competitor 1]: [Their positioning]
- [Competitor 2]: [Their positioning]

**Indirect Competitors**:
- [Alternative solutions]

**Our Competitive Advantage**:
- [Differentiator 1]
- [Differentiator 2]

---

## 3. Target Customer

### Ideal Customer Profile (ICP)

**Company Characteristics**:
- Industry: [Industries]
- Company Size: [Employee count / Revenue]
- Geography: [Regions]
- Tech Stack: [Existing tools they use]

**Buying Behavior**:
- Decision-making process: [How they buy]
- Budget cycle: [When they buy]
- Decision criteria: [What matters to them]

### Buyer Personas

#### Persona 1: [Primary Decision Maker]
- **Role**: [Title]
- **Responsibilities**: [What they do]
- **Goals**: [What they want to achieve]
- **Pain Points**: [Problems they face]
- **How We Help**: [Our value to them]

#### Persona 2: [Influencer]
- [Same structure]

#### Persona 3: [End User]
- [Same structure]

### Buying Committee
- **Economic Buyer**: [Who holds the budget]
- **Technical Buyer**: [Who validates the solution]
- **Champion**: [Internal advocate]
- **End Users**: [Who will use it]

---

## 4. Value Proposition & Messaging

### Core Value Proposition
**For** [target customer]
**Who** [statement of need]
**[Product]** **is a** [category]
**That** [key benefit]
**Unlike** [alternative]
**[Product]** [key differentiator]

### Key Messages

**Primary Message**:
[Main headline - what you want people to remember]

**Supporting Messages**:
1. [Message pillar 1]
2. [Message pillar 2]
3. [Message pillar 3]

### Proof Points
- [Customer testimonial or case study]
- [Data point or metric]
- [Third-party validation]

---

## 5. Positioning

**Category**: [How we want to be categorized]

**Frame of Reference**: [What customers compare us to]

**Point of Difference**: [Why we're better/different]

**Reasons to Believe**: [Evidence of our claims]

**Positioning Statement**:
[Concise positioning statement]

---

## 6. Pricing Strategy

### Pricing Model
- **Model Type**: [Subscription, Usage-based, Freemium, etc.]
- **Billing Frequency**: [Monthly, Annual]

### Pricing Tiers

#### Tier 1: [Plan Name] - $[X]/month
- [Key features included]
- [Target customer for this tier]

#### Tier 2: [Plan Name] - $[Y]/month
- [Key features included]
- [Target customer for this tier]

#### Tier 3: [Plan Name] - $[Z]/month or Custom
- [Key features included]
- [Target customer for this tier]

### Pricing Rationale
- **Value Metric**: [What we're pricing on]
- **Competitive Positioning**: [How we compare]
- **Customer Willingness to Pay**: [What research shows]

---

## 7. Sales Strategy

### Sales Model
- **Model Type**: [Self-serve, Sales-assisted, Enterprise]
- **Sales Cycle Length**: [Average days to close]
- **Average Deal Size**: [$X]

### Sales Process

**Stage 1: Lead Generation**
- Sources: [Where leads come from]
- Qualification: [BANT, MEDDIC, etc.]

**Stage 2: Discovery**
- [Key activities and goals]

**Stage 3: Demo/Proof of Value**
- [Key activities and goals]

**Stage 4: Proposal**
- [Key activities and goals]

**Stage 5: Close**
- [Key activities and goals]

### Sales Enablement
- [ ] Sales playbook created
- [ ] Demo environment ready
- [ ] Objection handling guide
- [ ] ROI calculator
- [ ] Case studies
- [ ] Competitive battlecards
- [ ] Contract templates

---

## 8. Marketing Strategy

### Marketing Objectives
- [Objective 1]: [Target metric]
- [Objective 2]: [Target metric]

### Marketing Channels

#### Owned Channels
**Website**:
- Landing page optimization
- SEO strategy
- Content hub

**Email**:
- Launch announcement to [segment]
- Nurture campaigns
- [Specific campaigns]

**Blog/Content**:
- [Content theme 1]
- [Content theme 2]

#### Earned Channels
**PR**:
- Press release
- Media outreach to [outlets]
- Industry analyst briefings

**Partnerships**:
- Co-marketing with [partners]
- Integration announcements

#### Paid Channels
**Digital Ads**:
- Google Ads: [Budget and targeting]
- LinkedIn Ads: [Budget and targeting]
- [Other channels]

**Budget Allocation**:
- Channel 1: [$X]
- Channel 2: [$Y]
- Total: [$Z]

### Content Strategy

**Pre-Launch**:
- [Content piece 1]
- [Content piece 2]

**Launch**:
- [Launch content]
- [Announcement materials]

**Post-Launch**:
- [Ongoing content themes]

---

## 9. Channel Strategy

### Direct Sales
- [Approach and focus]

### Channel Partners
- [Partner types]
- [Partner value proposition]
- [Enablement plan]

### Self-Service
- [How customers can buy directly]
- [Conversion optimizations]

---

## 10. Customer Success & Support

### Onboarding
- [ ] Onboarding flow designed
- [ ] Welcome email sequence
- [ ] In-app guidance
- [ ] Success checkpoints

### Support Readiness
- [ ] Help center articles
- [ ] FAQ published
- [ ] Support team trained
- [ ] Escalation process
- [ ] Chatbot configured

### Customer Success Plan
- **Target Outcomes**:
  - [Outcome 1 for customer]
  - [Outcome 2 for customer]

- **Success Milestones**:
  - Day 7: [Milestone]
  - Day 30: [Milestone]
  - Day 90: [Milestone]

---

## 11. Launch Plan

### Pre-Launch (4 weeks before)
- [ ] [Task 1]
- [ ] [Task 2]

### Launch Week
**Monday**: [Activities]
**Tuesday**: [Activities]
**Wednesday**: [Activities]
**Thursday**: [Activities]
**Friday**: [Activities]

### Post-Launch (First 30 days)
- Week 1: [Focus areas]
- Week 2: [Focus areas]
- Week 3-4: [Focus areas]

---

## 12. Success Metrics

### Leading Indicators
- [Metric 1]: [Target]
- [Metric 2]: [Target]

### Lagging Indicators
- [Metric 1]: [Target]
- [Metric 2]: [Target]

### Measurement Plan
- **Dashboard**: [Link or description]
- **Review Cadence**: [How often]
- **Key Reports**: [What we'll track]

---

## 13. Budget

| Category | Investment | Expected Return |
|----------|-----------|----------------|
| Marketing | $[X] | [Expected outcome] |
| Sales | $[Y] | [Expected outcome] |
| Product | $[Z] | [Expected outcome] |
| **Total** | **$[Total]** | [ROI projection] |

---

## 14. Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| [Risk 1] | High/Med/Low | High/Med/Low | [Plan] |
| [Risk 2] | High/Med/Low | High/Med/Low | [Plan] |

---

## 15. Timeline & Milestones

**T-12 weeks**: [Milestone]
**T-8 weeks**: [Milestone]
**T-4 weeks**: [Milestone]
**T-2 weeks**: [Milestone]
**T-0 (Launch)**: [Activities]
**T+2 weeks**: [Milestone]
**T+4 weeks**: [Review point]

---

## 16. Team & Roles

| Function | Owner | Responsibilities |
|----------|-------|-----------------|
| GTM Lead | [Name] | [Responsibilities] |
| Product Marketing | [Name] | [Responsibilities] |
| Sales | [Name] | [Responsibilities] |
| Marketing | [Name] | [Responsibilities] |
| Product | [Name] | [Responsibilities] |
| Customer Success | [Name] | [Responsibilities] |

---

Help me create a go-to-market strategy for [product] targeting [market segment].`
    },
    {
        id: 'api-requirements',
        title: 'API Requirements API需求文档',
        category: 'other',
        description: '完整的 API 需求文档模板,详细定义接口规格、数据模型、认证、错误处理等技术细节。确保开发团队准确实现 API。',
        usage: '在设计新 API 或修改现有 API 时使用,适合需要前后端协作的项目。',
        tags: ['API设计', '技术文档', '接口规范', '开发协作'],
        content: `## API Requirements Document

### API Overview
- **API Name**: [Name]
- **Version**: [Version number]
- **Owner**: [Product/Tech lead]
- **Status**: [Draft / In Review / Approved]
- **Last Updated**: [Date]

### Purpose
[What this API enables and why it's needed]

---

## 1. Business Context

### Use Cases
1. **[Use Case 1]**: [Description]
   - **Actor**: [Who's using it]
   - **Goal**: [What they're trying to achieve]

2. **[Use Case 2]**: [Description]
   - **Actor**: [Who's using it]
   - **Goal**: [What they're trying to achieve]

### Success Criteria
- [Criterion 1]
- [Criterion 2]

---

## 2. API Endpoints

### Endpoint 1: [Action] [Resource]

**HTTP Method**: [GET / POST / PUT / PATCH / DELETE]
**Path**: /api/v1/[resource]
**Description**: [What this endpoint does]

**Request**:
\`\`\`json
{
  "field1": "value",
  "field2": 123,
  "field3": {
    "nested": "object"
  }
}
\`\`\`

**Response (200 OK)**:
\`\`\`json
{
  "id": "uuid",
  "field1": "value",
  "created_at": "2024-01-19T10:30:00Z"
}
\`\`\`

**Error Responses**:
- **400 Bad Request**: [When this occurs]
- **401 Unauthorized**: [When this occurs]
- **404 Not Found**: [When this occurs]
- **500 Internal Server Error**: [When this occurs]

**Parameters**:
| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| field1 | string | Yes | [Description] | "example" |
| field2 | integer | No | [Description] | 123 |

**Business Rules**:
- [Rule 1]
- [Rule 2]

[Repeat for each endpoint]

---

## 3. Data Models

### Model 1: [Resource Name]

\`\`\`json
{
  "id": "string (uuid)",
  "name": "string",
  "description": "string | null",
  "status": "enum [active, inactive, pending]",
  "metadata": {
    "key": "value"
  },
  "created_at": "datetime (ISO 8601)",
  "updated_at": "datetime (ISO 8601)"
}
\`\`\`

**Field Definitions**:
| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | string | UUID, unique | [Description] |
| name | string | Max 100 chars, required | [Description] |
| status | enum | Must be one of [values] | [Description] |

[Repeat for each model]

---

## 4. Authentication & Authorization

### Authentication Method
- **Type**: [API Key / OAuth 2.0 / JWT / etc.]
- **Header**: Authorization: Bearer {token}

### Authorization Rules
- **[Endpoint 1]**: [Who can access]
- **[Endpoint 2]**: [Who can access]

### Scopes (if OAuth)
- \`read:resource\`: [What it allows]
- \`write:resource\`: [What it allows]

---

## 5. Rate Limiting

- **Rate Limit**: [X requests per minute/hour]
- **Headers**:
  - X-RateLimit-Limit: [Max requests]
  - X-RateLimit-Remaining: [Remaining]
  - X-RateLimit-Reset: [Reset time]

**Behavior when limit exceeded**:
- Status Code: 429 Too Many Requests
- Response: [Error message]

---

## 6. Pagination

**Method**: [Cursor-based / Offset-based / Page-based]

**Request**:
\`\`\`
GET /api/v1/resource?limit=20&cursor=abc123
\`\`\`

**Response**:
\`\`\`json
{
  "data": [...],
  "pagination": {
    "next_cursor": "xyz789",
    "has_more": true,
    "total_count": 1500
  }
}
\`\`\`

---

## 7. Error Handling

### Error Response Format

\`\`\`json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable error message",
    "details": [...],
    "request_id": "uuid"
  }
}
\`\`\`

### Error Codes
| Code | HTTP Status | Description | User Action |
|------|------------|-------------|-------------|
| INVALID_INPUT | 400 | [Description] | [What user should do] |
| UNAUTHORIZED | 401 | [Description] | [What user should do] |

---

## 8. Filtering, Sorting, Search

### Filtering
\`\`\`
GET /api/v1/resource?status=active&created_after=2024-01-01
\`\`\`

**Supported Filters**:
| Filter | Type | Description | Example |
|--------|------|-------------|---------|
| status | enum | [Description] | ?status=active |
| created_after | date | [Description] | ?created_after=2024-01-01 |

### Sorting
\`\`\`
GET /api/v1/resource?sort=-created_at,name
\`\`\`

**Supported Sort Fields**:
- created_at (default: descending)
- name
- [Other fields]

### Search
\`\`\`
GET /api/v1/resource?q=search+term
\`\`\`

---

## 9. Versioning Strategy

- **Current Version**: v1
- **Versioning Method**: [URL path / Header / Query param]
- **Deprecation Policy**: [How long old versions are supported]

---

## 10. Performance Requirements

- **Response Time**: [P50, P95, P99 targets]
- **Throughput**: [Requests per second]
- **Availability**: [Uptime SLA]

---

## 11. Security Considerations

- [ ] Input validation
- [ ] SQL injection prevention
- [ ] XSS prevention
- [ ] HTTPS only
- [ ] Sensitive data encryption
- [ ] CORS configuration
- [ ] API key rotation policy

---

## 12. Webhooks (if applicable)

### Event Types
- \`resource.created\`
- \`resource.updated\`
- \`resource.deleted\`

### Webhook Payload
\`\`\`json
{
  "event": "resource.created",
  "timestamp": "2024-01-19T10:30:00Z",
  "data": {...}
}
\`\`\`

### Retry Policy
[How webhooks are retried on failure]

---

## 13. Testing Requirements

### Test Scenarios
1. [Happy path test]
2. [Edge case test]
3. [Error handling test]

### Test Data
[Sample data for testing]

---

## 14. Documentation Requirements

- [ ] OpenAPI/Swagger spec
- [ ] Postman collection
- [ ] Code examples (curl, Python, JavaScript)
- [ ] Interactive API explorer
- [ ] Changelog

---

## 15. Migration Plan (if updating existing API)

### Breaking Changes
- [Change 1 and impact]
- [Change 2 and impact]

### Migration Timeline
- [Date]: Announce deprecation
- [Date]: New version available
- [Date]: Old version sunset

---

## 16. Dependencies

### Internal Dependencies
- [Service 1]: [What we need]
- [Service 2]: [What we need]

### External Dependencies
- [Third-party API 1]: [What we rely on]

---

## 17. Monitoring & Alerting

### Key Metrics
- [Metric 1]: [Threshold for alert]
- [Metric 2]: [Threshold for alert]

### Logging
- [What to log]
- [Log retention policy]

---

## 18. Open Questions

- [Question 1]
- [Question 2]

---

Help me create an API requirements document for [feature/service] that will be used by [consumers].`
    }
];
