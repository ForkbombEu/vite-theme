---
name: Project Placeholder
description: A stark monochrome data field for an intentionally unfinished developer project.
colors:
  primary-ink: "#f5f5f0"
  signal-line: "rgba(245, 245, 240, 0.28)"
  terminal-ground: "#050505"
typography:
  display:
    fontFamily: "Azeret Mono Variable, ui-monospace, monospace"
    fontSize: "clamp(3.1rem, 13.7vw, 12rem)"
    fontWeight: 700
    lineHeight: 0.76
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Azeret Mono Variable, ui-monospace, monospace"
    fontSize: "clamp(0.72rem, 0.63rem + 0.35vw, 1rem)"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.02em"
  metadata:
    fontFamily: "Azeret Mono Variable, ui-monospace, monospace"
    fontSize: "clamp(0.68rem, 0.6rem + 0.25vw, 0.85rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.04em"
spacing:
  compact: "0.65rem"
  regular: "1rem"
  page-gutter: "clamp(1rem, 2.4vw, 2.5rem)"
  message-block: "clamp(4rem, 12vh, 9rem)"
components:
  display-word:
    textColor: "{colors.primary-ink}"
    typography: "{typography.display}"
    width: "100%"
  metadata-bar:
    textColor: "{colors.primary-ink}"
    typography: "{typography.metadata}"
    padding: "0.9rem 0 1.1rem"
  status-light:
    backgroundColor: "{colors.primary-ink}"
    size: "0.55rem"
  scan-line:
    backgroundColor: "{colors.primary-ink}"
    height: "1px"
    width: "100%"
---

# Design System: Project Placeholder

## Overview

**Creative North Star: "The Unfinished Signal"**

The system is a stark monochrome data field: compact European developer-studio typography, machine-like metadata, pixel-crisp rules, and one enormous word treated as infrastructure rather than advertising. It is intentionally unfinished but fully composed, making absence feel deliberate without fabricating product claims.

The visual world stays close to the terminal—pure near-black and warm near-white, square geometry, full-viewport tension, and restrained interaction. A single scanning line supplies the live signal; everything else is static, direct, and dense enough to feel operational.

**Key Characteristics:**

- Stark warm-white-on-black monochrome
- One variable monospace family at radically different scales
- Full-viewport data-field composition with edge-pinned metadata
- Square, border-led construction with no decorative softness
- One slow scanning line as the signature motion

## Colors

The palette behaves like a high-contrast terminal surface, using warm ink for every visible mark and translucency—not hue—to create hierarchy.

### Primary

- **Warm Signal Ink** (`primary-ink`, #f5f5f0): Used for the display word, metadata, status mark, selection ground, and moving scan line so the page speaks in one visual voice.

### Neutral

- **Terminal Ground** (`terminal-ground`, #050505): The uninterrupted page background and the inverse text color for selection.
- **Ghost Rule** (`signal-line`, rgba(245, 245, 240, 0.28)): Used only for quiet structural borders and dividers that must register without competing with type.

### Named Rules

**The One-Bit Rule.** Hierarchy comes from scale, weight, density, and opacity; do not introduce accent hues into this monochrome world.

**The Warm Contrast Rule.** Use warm near-white against near-black rather than absolute white against black, preserving the severe look without digital glare.

## Typography

**Display Font:** Azeret Mono Variable (with `ui-monospace, monospace` fallback)

**Body Font:** Azeret Mono Variable (with `ui-monospace, monospace` fallback)

**Label/Mono Font:** Azeret Mono Variable (with `ui-monospace, monospace` fallback)

**Character:** One assertive variable monospace family carries the entire system. Extreme scale contrast makes the display word architectural while uppercase microcopy reads like compact machine metadata.

### Hierarchy

- **Display** (700, `clamp(3.1rem, 13.7vw, 12rem)`, 0.76): Reserved for the singular oversized status word; set uppercase with tight tracking (`-0.04em`) and allow safe wrapping rather than shrinking it into politeness.
- **Body** (400, `clamp(0.72rem, 0.63rem + 0.35vw, 1rem)`, 1.4): Used for the index and short note; uppercase with modest tracking (`0.02em`) and held to a compact measure (34ch for prose notes).
- **Metadata** (400, `clamp(0.68rem, 0.6rem + 0.25vw, 0.85rem)`, 1): Used in edge bars and status labels; uppercase with open tracking (`0.04em`) for fast scanning.

### Named Rules

**The Single-Family Rule.** Change hierarchy through size, weight, line-height, and tracking before introducing another typeface.

**The Scale-Not-Copy Rule.** Let one oversized word carry the visual impact; supporting language stays factual, short, and compact.

## Layout

The root surface is a minimum-height full viewport (`100dvh`) arranged as three grid rows: metadata header, elastic central field, and metadata footer. A fluid edge gutter (`clamp(1rem, 2.4vw, 2.5rem)`) frames the page, while border rules align exactly to that inset and the primary message centers vertically rather than inside a card.

The message may grow to a broad maximum inline size (96rem) but never exceeds the viewport. Its block breathing room is fluid (`clamp(4rem, 12vh, 9rem)`), preserving deliberate negative space without making the composition feel sparse. At the compact breakpoint (36rem), the display scale shifts to `clamp(3.2rem, 20vw, 6rem)`, line-height relaxes to 0.84, the background rhythm compresses, and long footer metadata may wrap within 12 characters.

**The Opposed-Edges Rule.** Metadata belongs at opposite inline edges; it frames the field and must not collapse into a centered stack unless content truly cannot fit.

**The No-Card Rule.** The viewport itself is the container. Do not place the message inside a centered panel, rounded box, or conventional coming-soon card.

## Elevation & Depth

The system is entirely flat and uses no shadows. Depth comes from three planar signals only: the opaque ground, low-opacity repeating bars masked toward the center, and hairline rules at the page inset. The moving scan line temporarily rises above the content through contrast and z-order, not blur or elevation.

### Named Rules

**The Flat-Signal Rule.** Use opacity, border, mask, and z-order to separate layers; never add drop shadows, glows, or glass effects.

## Shapes

Geometry is square, rectilinear, and pixel-crisp. Rules are one pixel, the status light is a 0.55rem square, and the surface has no border radii. Soft capsules, circles, and rounded containers conflict with the machine-field character.

**The Zero-Radius Rule.** Every visible edge remains square unless a future product control has a proven usability need for another shape.

## Components

The initial system consists of typographic and structural primitives, not a general-purpose application component library.

### Metadata Bars

- **Character:** Compact, factual, and edge-pinned.
- **Typography:** The Metadata role, always uppercase.
- **Layout:** Flex rows with opposite-edge alignment, a regular gap (1rem), and narrow block padding.
- **State:** Static; do not animate or decorate metadata.

### Status Indicator

- **Shape:** A hard square (0.55rem), never a rounded dot.
- **Color:** Warm Signal Ink, inherited from its label.
- **Layout:** Inline-flex with a compact gap (0.65rem) between mark and status text.

### Display Message

- **Character:** One oversized uppercase word followed by a compact, honest note.
- **Shape:** Unboxed and aligned directly to the data field.
- **Behavior:** Allow an intentional word break and `overflow-wrap: anywhere` so the display remains forceful on narrow screens.

### Data Field

- **Structure:** Full-viewport black ground, low-opacity vertical barcode texture, and inset border rules.
- **Texture:** The bars are densest near the top and bottom and visually recede through the center so the message remains legible.
- **Boundary:** Decorative layers stay non-interactive and behind semantic content.

### Scan Signal

- **Shape:** A full-width one-pixel line.
- **Motion:** A seven-second scan using a decisive ease (`cubic-bezier(0.16, 1, 0.3, 1)`), remaining quiet for most of each cycle.
- **Reduced Motion:** Stop the animation and hold the line at 35% opacity when reduced motion is requested.

## Do's and Don'ts

### Do:

- **Do** use the viewport as the primary surface and align structure to the fluid page gutter.
- **Do** create hierarchy with one monospace family, radical scale contrast, uppercase labels, and disciplined line-height.
- **Do** keep all language factual and provisional when product evidence does not exist.
- **Do** preserve the reduced-motion and forced-colors fallbacks when extending the system.
- **Do** use pixel-crisp rules, square indicators, and restrained opacity to make unfinished states feel intentional.

### Don't:

- **Don't** introduce accent colors, decorative gradients, imagery, or raster texture; the masked barcode field is the only structural gradient treatment.
- **Don't** wrap placeholder messaging in a centered card, pill, or rounded container.
- **Don't** add product claims, customer evidence, or final marketing copy that the project does not have.
- **Don't** multiply animations; the scanning line is the single signature motion.
- **Don't** use shadows, glows, glass, or soft depth effects.
