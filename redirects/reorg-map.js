/**
 * Consolidated historical path redirects for documentation reorganization (#342).
 * Individual Wave B/C PRs may also register overlapping entries; keep this map
 * as the safety-net checklist (PR 40).
 *
 * Only entries whose `to` exists on the current tree are enabled.
 * Status sync 2026-11-04 (Europe/Kiev): #343–#359, #361–#362, #364–#365, #370
 * merged on main — including email-templates (#345) and project-diagram (#346).
 *
 * @type {import('@docusaurus/plugin-client-redirects').RedirectOption[]}
 */
module.exports = [
  // Scaffold / early renames (targets exist on main):
  { from: '/docs/devops/DevOps', to: '/docs/devops' },
  { from: '/docs/organization-readme-index', to: '/docs/llazyemail-readme-documentation' },
  { from: '/docs/Awesome-email-marketing', to: '/docs/awesome-email-marketing' },

  // PR 05 / #347 — React-Design-System → react-design-system (`to` uses front-matter ids).
  { from: '/docs/React-Design-System', to: '/docs/react-design-system' },
  { from: '/docs/React-Design-System/React-Design-System', to: '/docs/react-design-system' },
  { from: '/docs/React-Design-System/react-main', to: '/docs/react-design-system' },
  { from: '/docs/React-Design-System/all-components', to: '/docs/react-design-system/all-components' },
  { from: '/docs/React-Design-System/clone-template', to: '/docs/react-design-system/clone-template' },
  { from: '/docs/React-Design-System/email-typography', to: '/docs/react-design-system/email-typography' },
  { from: '/docs/React-Design-System/frameworks', to: '/docs/react-design-system/frameworks' },
  { from: '/docs/React-Design-System/misc', to: '/docs/react-design-system/react-misc-module' },
  { from: '/docs/React-Design-System/react-misc-module', to: '/docs/react-design-system/react-misc-module' },
  { from: '/docs/React-Design-System/react-table', to: '/docs/react-design-system/react-table-module' },
  { from: '/docs/React-Design-System/react-table-module', to: '/docs/react-design-system/react-table-module' },
  { from: '/docs/React-Design-System/react-todo-tasks', to: '/docs/react-design-system/react-tasks' },
  { from: '/docs/React-Design-System/react-tasks', to: '/docs/react-design-system/react-tasks' },
  { from: '/docs/React-Design-System/remix-templates', to: '/docs/react-design-system/remix-templates' },
  { from: '/docs/React-Design-System/template-repository', to: '/docs/react-design-system/react-template-module' },
  { from: '/docs/React-Design-System/react-template-module', to: '/docs/react-design-system/react-template-module' },
  // Spaced Table repository filename still on main under react-design-system/.
  { from: '/docs/React-Design-System/Table%20repository', to: '/docs/react-design-system/Table repository' },
  { from: '/docs/React-Design-System/Table repository', to: '/docs/react-design-system/Table repository' },

  // PR 03 / #345 — Email Templates → email-templates. Targets use front-matter ids.
  { from: '/docs/Email%20Templates', to: '/docs/email-templates' },
  { from: '/docs/Email Templates', to: '/docs/email-templates' },
  // readme.md is the category index → /docs/email-templates (id is for sidebar only)
  { from: '/docs/Email%20Templates/email-templates-schemes', to: '/docs/email-templates' },
  { from: '/docs/Email Templates/email-templates-schemes', to: '/docs/email-templates' },
  { from: '/docs/Email%20Templates/readme', to: '/docs/email-templates' },
  { from: '/docs/Email Templates/readme', to: '/docs/email-templates' },
  { from: '/docs/Email%20Templates/order-details-schemes', to: '/docs/email-templates/order-details-schemes' },
  { from: '/docs/Email Templates/order-details-schemes', to: '/docs/email-templates/order-details-schemes' },
  { from: '/docs/Email%20Templates/nx', to: '/docs/email-templates/nx' },
  { from: '/docs/Email Templates/nx', to: '/docs/email-templates/nx' },
  { from: '/docs/Email%20Templates/process', to: '/docs/email-templates/process' },
  { from: '/docs/Email Templates/process', to: '/docs/email-templates/process' },

  // PR 04 / #346 — Project Diagram → project-diagram (indx stub id after #354).
  { from: '/docs/Project%20Diagram', to: '/docs/project-diagram' },
  { from: '/docs/Project Diagram', to: '/docs/project-diagram' },
  { from: '/docs/Project%20Diagram/index', to: '/docs/project-diagram' },
  { from: '/docs/Project Diagram/index', to: '/docs/project-diagram' },
  { from: '/docs/Project%20Diagram/indx', to: '/docs/project-diagram/llazyemail-code-organization-index' },
  { from: '/docs/Project Diagram/indx', to: '/docs/project-diagram/llazyemail-code-organization-index' },
  { from: '/docs/Project%20Diagram/llazyemail-code-organization-index', to: '/docs/project-diagram/llazyemail-code-organization-index' },
  { from: '/docs/Project Diagram/llazyemail-code-organization-index', to: '/docs/project-diagram/llazyemail-code-organization-index' },
  { from: '/docs/Project%20Diagram/project-diagram-packages', to: '/docs/project-diagram/project-diagram-packages' },
  { from: '/docs/Project Diagram/project-diagram-packages', to: '/docs/project-diagram/project-diagram-packages' },
  { from: '/docs/Project%20Diagram/packages', to: '/docs/project-diagram/project-diagram-packages' },
  { from: '/docs/Project Diagram/packages', to: '/docs/project-diagram/project-diagram-packages' },

  // After a future cleanup moves spaced "Table repository.md" → table-repository.md
  // under react-design-system (main still has the spaced filename):
  // { from: '/docs/react-design-system/Table repository', to: '/docs/react-design-system/table-repository' },
];
