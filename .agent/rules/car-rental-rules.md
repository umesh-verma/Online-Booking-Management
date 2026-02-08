# Car Rental Platform Development Rules

## Project Context
This is a **car rental booking platform** built with Next.js 13+ App Router. The codebase was transformed from a multi-booking platform and now focuses exclusively on car rentals.

---

## Core Principles

### 1. Car-Only Focus
- **ALL features must relate to car rentals**. Do not add hotel, flight, experience, or real estate functionality.
- When adding new features, ask: "Does this serve car rental customers?"
- Reject scope creep into other booking domains.

### 2. Code Organization

```
src/
├── app/
│   ├── (car-listings)/     # Car browsing pages
│   ├── (listing-detail)/
│   │   └── listing-car-detail/  # Car detail page
│   ├── checkout/           # Booking checkout
│   └── api/                # API routes
├── components/
│   ├── CarCard.tsx         # Car listing card
│   └── CarCardH.tsx        # Horizontal car card
├── data/
│   ├── types.ts            # CarDataType is the primary type
│   └── jsons/
│       └── __carsListing.json
└── shared/                 # Reusable UI components
```

### 3. Type Safety
- **Always use `CarDataType`** from `@/data/types` for car-related data
- Key car properties: `seats`, `gearshift`, `price`, `galleryImgs`, `reviewStart`
- Do not introduce new booking type interfaces

---

## Development Guidelines

### Adding New Features

1. **Before implementing**, check if similar car rental platforms have this feature
2. **Update types first** if new car properties are needed
3. **Create components** in `/components` with `Car` prefix for car-specific ones
4. **Add routes** under `(car-listings)` for listing pages or `(listing-detail)` for detail views

### Component Naming
- Car-specific: `CarCard`, `CarFilter`, `CarBookingForm`
- Generic/shared: `DatePicker`, `PriceSlider`, `LocationSearch`

### Data Handling
- Car listing data lives in `src/data/jsons/__carsListing.json` for demo
- Production: Replace with API calls or database queries
- Always type API responses with `CarDataType`

---

## UI/UX Standards

### Design Language
- **Primary Actions**: Use the existing primary color scheme (orange/amber tones)
- **Cards**: Use `CarCard` for grid views, `CarCardH` for list/horizontal views
- **Maps**: Car location maps use Google Map React integration

### Required Car Information Display
Every car listing must show:
- [ ] Vehicle image(s)
- [ ] Make/model (title)
- [ ] Price per day
- [ ] Seats count
- [ ] Transmission type (gearshift)
- [ ] Star rating
- [ ] Location

### Booking Flow
1. Browse/Search cars → 2. View car detail → 3. Select dates → 4. Checkout → 5. Confirmation

---

## Forbidden Patterns

> [!CAUTION]
> **DO NOT** add these removed booking types back:
> - Hotels/Stays (`StayDataType`, `StayCard`)
> - Experiences (`ExperiencesDataType`, `ExperiencesCard`)
> - Flights (`FlightCard`)
> - Real Estate (`PropertyCardH`)

> [!WARNING]
> **DO NOT** create generic "booking" abstractions that could support multiple booking types. Keep it car-specific.

---

## Testing Requirements

### Before Committing
```bash
# Must pass both
npm run build
npm run lint
```

### Manual Checks
- Verify car listings load at `/listing-car`
- Verify car detail page works
- Test checkout flow with mock data
- Check responsive design (mobile + desktop)

---

## File Modification Checklist

When modifying existing files:

- [ ] Does this change align with car rental functionality?
- [ ] Are imports updated (no references to removed types/components)?
- [ ] Does the build pass after changes?
- [ ] Is the UI consistent with existing car components?

When adding new files:

- [ ] Is it in the correct directory per the structure above?
- [ ] Does it use `CarDataType` if handling car data?
- [ ] Is it properly exported and imported where needed?
- [ ] Does it follow the naming conventions?

---

## Quick Reference

### Key Files
| Purpose | File |
|---------|------|
| Car data type | `src/data/types.ts` → `CarDataType` |
| Car listings | `src/app/(car-listings)/` |
| Car detail | `src/app/(listing-detail)/listing-car-detail/` |
| Navigation | `src/data/navigation.ts` |
| Car card component | `src/components/CarCard.tsx` |

### Commands
```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # Run linter
```
