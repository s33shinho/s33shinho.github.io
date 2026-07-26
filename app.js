const firebaseConfig = {
    apiKey: "AIzaSyBjbk0I-oOLJU7H-Iga-7e3ChIShctObug",
    authDomain: "steamtracker-394df.firebaseapp.com",
    projectId: "steamtracker-394df",
    storageBucket: "steamtracker-394df.firebasestorage.app",
    messagingSenderId: "529218265920",
    appId: "1:529218265920:web:217c3e79f5c56aacc910a5",
    measurementId: "G-8J6ZMQGVPL"
};

let auth = null, db = null, firebaseReady = false;
try {
    if (firebaseConfig.apiKey !== "TWOJ_API_KEY") {
        firebase.initializeApp(firebaseConfig);
        auth = firebase.auth();
        db = firebase.firestore();
        firebaseReady = true;
    }
} catch (e) { console.warn("Firebase init failed:", e); }

const translations = {
    en: {
        navAccount: "Your account",
        notSignedIn: "Not signed in",
        heroTagline: "Track easy. Spend smart.",
        heroLead: "Backlog Wallet is a personal tool for logging the games you buy and understanding how much you spend over time. Add each title with its price, store and purchase date, and get instant statistics, currency conversion and clear charts of your library. Track whether each game is digital or physical, and save up for the titles you want with savings goals.",
        ctaRegister: "Create a free account",
        ctaHaveAccount: "I already have an account",
        featuresHead: "What you can do",
        feat1T: "Track every purchase",
        feat1D: "Log titles, prices, stores and dates - manually or by pasting a whole list at once.",
        feat2T: "See your spending",
        feat2D: "Live totals, monthly and yearly counts, and charts of purchases over time.",
        feat3T: "Any currency",
        feat3D: "Convert your library value into 20+ world currencies using live exchange rates.",
        feat4T: "Sync across devices",
        feat4D: "Your library is saved to your account and available wherever you sign in.",
        privHead: "Your privacy comes first",
        priv1: "We never sell your data, and we never share it for third-party marketing.",
        priv2: "Your library is stored only to provide the service and sync it across your devices.",
        priv3: "You can export or permanently delete all of your data at any time, straight from your account.",
        landingFootNote: "All tracking features require a free account. It takes less than a minute to set up.",
        heroFact2: "20+ currencies", heroFact3: "Free, no card required",
heroFact4: "Steam, PlayStation, Xbox, Nintendo, GOG, Epic",         heroReceiptTotal: "Total", heroReceiptStamp: "SAVED",
        accSignedInAs: "Signed in as",
        accProfileHead: "Profile",
        fldNickname: "Nickname",
        nicknamePh: "e.g. GamerPL",
        fldPrefCurrency: "Preferred display currency",
        fldTheme: "Theme",
        optThemeDark: "Dark",
        optThemeLight: "Light",
        saveProfileBtn: "Save changes",
        profileSaved: "Your changes have been saved.",
        accDataHead: "Your data & privacy (GDPR)",
accShareHead: "Share your library", accShareNote: "Enable to generate a public read-only link - anyone with it will see your nickname and game list (not your email).", accShareEnable: "Share publicly", copyLinkBtn: "Copy link", shareEnabledMsg: "Your library is now shared publicly.", shareDisabledMsg: "Sharing disabled.", linkCopiedMsg: "Link copied to clipboard.",         accDataNote: "You are in control of your data. Export a full copy at any time, or permanently delete your account and everything stored with it.",
        exportDataBtn: "Export my data (JSON)",
        deleteAccountBtn: "Delete account and all data",
        deleteAccountConfirm: "This will permanently delete your account and your entire library. This cannot be undone. Continue?",
        accountDeleted: "Your account and data have been deleted.",
        deleteNeedsRecentLogin: "For security, please log out and log back in, then try deleting your account again.",
        regNickname: "Nickname", emailOrNickname: "Email or nickname", authErrNicknameRequired: "Nickname is required.", authErrNicknameTaken: "This nickname is already taken.",
        priceSortNone: "Sort…",
        priceSortDesc: "Most expensive first",
        priceSortAsc: "Cheapest first", sortDateNewest: "Newest first", sortDateOldest: "Oldest first", sortNameAsc: "A-Z", sortNameDesc: "Z-A",
        themeToggleTitle: "Switch light / dark theme",
        authNoteRegister: "Create a free account to use the tracker and sync your library across devices.",
        gateTitle: "This section needs an account",
        gateText: "Log in or create a free account to use the game tracker.",
        appTitle: "Backlog Wallet", menu: "Menu", navHome: "Home", navAuth: "Login / Register", navFaq: "FAQ", navChangelog: "Changelog", navDonate: "Donate", language: "Language",
        guestMode: "Not signed in", loggedInAs: "Logged in as:",
        gameTitle: "Game Title", price: "Price", currency: "Currency", source: "Source", purchaseDate: "Purchase Date", addBtn: "Add", saveBtn: "Save", cancelBtn: "Cancel", addGame: "Add game",
fldStatus: "Completion status (optional)", statusNone: "- not set -", statusCompleted: "✅ Completed", statusNotCompleted: "⏳ Not completed", statusEndless: "♾️ Endless game", statusWontPlay: "🚫 Won't play",         addFormShow: "Show form", addFormHide: "Hide form",
        myLibrary: "Your Library", colPlatform: "Platform", colOrigPrice: "Original Price", colChfPrice: "CHF Value", colOptions: "Options", totalValue: "Library value",
        statTotalGames: "Games total", statThisMonth: "This month", statSpentThisMonth: "Spent this month", statThisYear: "This year",
        chartsTitle: "Statistics", chartOptPurchases: "Purchases over time", chartOptCumulative: "Cumulative total", chartOptSources: "Sources",
        granMonth: "Month", granQuarter: "Quarter", granYear: "Year",
        chartPurchases: "Number of purchases", chartCumulative: "Total games owned", chartSources: "Purchase sources",
        steam: "Steam", keyStore: "Key Store", noData: "No data", noResults: "No search results",
        liveRates: "Live", offlineRates: "Offline", confirmDel: "Delete this item?", feat5T: "Player ranking", feat5D: "See how your library stacks up against other signed-in users.", feat6T: "Savings goals", feat6D: "Set a target amount for a game you want and track how much you've saved.", suspiciousName: "That game title looks fake or made up - please fix it to add the entry.", priceTooHigh: "That price looks unrealistic (limit: 2000 CHF equivalent) - please fix it to add the entry.", navYearReview: "Year in Review", yrTotalSpent: "Spent this year", yrGamesLabel: "Games bought", yrPlatformLabel: "Favorite platform", yrMonthLabel: "Most active month", yrMostExpensive: "Priciest purchase", yrDownloadBtn: "Download as image", yrEmpty: "No games this year.", navRanking: "Ranking", rankingTitle: "Library Value Ranking", rankingColRank: "Rank", rankingColNickname: "Player", rankingColValue: "Value (EUR)", rankingYou: "You", rankingEmpty: "The ranking is still empty.", rankingNote: "The ranking is calculated directly from the data stored on each account at the moment it's displayed - it can't be manually inflated without actually adding games.", vsLastMonth: "vs last month", bannedMsg: "This account has been banned by the administrator.", anonNickname: "Player", fldOwnership: "Ownership", ownDigital: "Digital", ownPhysical: "Physical", filterAllOwnership: "All formats", chartOptOwnership: "Digital vs Physical", bulkBarSelected: "Selected: {n}", bulkSetOwnershipLabel: "Set format:", bulkSetSourceLabel: "Set source:", bulkSetStatusLabel: "Set status:", bulkClearStatus: "Clear status (unset)", bulkNoChange: "— no change —", bulkApplyBtn: "Apply", bulkClearBtn: "Deselect all", bulkSelectAllBtn: "Select all", bulkNoSelection: "No games selected.", bulkApplied: "Updated {n} games.", navGoals: "Savings Goals", goalsDesc: "Save up for games you want and track your progress.", goalName: "Game title", goalTargetAmount: "Target amount", goalSavedAmount: "Saved so far", goalAddBtn: "Add goal", goalEmpty: "You don't have any savings goals yet.", goalRemaining: "Remaining", goalReached: "Goal reached!", goalDeleteConfirm: "Delete this goal?", goalUpdateSaved: "Update", navShelf: "Virtual Shelf", shelfDesc: "Your library as a virtual game shelf - covers are generated automatically based on the title and platform.", shelfEmpty: "Your shelf is still empty - add your first game in the Library tab.",
        searchPh: "Search games...", exportCsv: "Export CSV",
        tabLogin: "Login", tabRegister: "Register", tabReset: "Reset password",
        email: "E-mail", password: "Password", loginBtn: "Log in", registerBtn: "Sign up", resetBtn: "Send reset link", logoutBtn: "Log out",
        authNoteGuest: "Full app functionality requires a free account - register or log in to access your game library.",
        authNoteLogged: "Your library is synced to the cloud and available on any device after logging in.",
        regPrivacyNote: "During registration we determine only your country (e.g. \"PL\") from your IP address - the IP address itself is never stored. The country is visible in the administrator panel for account security/oversight purposes. See the Privacy Policy for details.",
        resetSent: "A password reset link has been sent to your e-mail. Check your spam folder too.",
        registerOk: "Account created. You are now logged in.",
        registerCheckEmail: "Account created! Check your inbox and confirm your email to activate your account.", verifyGateTitle: "Confirm your email address", verifyGateBody: "We've sent a confirmation link to your email. Click it, then come back here and check again.", resendVerifyBtn: "Resend email", recheckVerifyBtn: "Check again", verifyEmailSent: "Confirmation email resent.", verifyStillNotVerified: "Still not confirmed - check your inbox (and spam folder).", verifyNowVerified: "Email address confirmed!",
        loginOk: "Logged in successfully.", logoutOk: "Logged out successfully.",
        authErrInvalid: "Invalid e-mail or password.", authErrInUse: "This e-mail is already registered.", authErrWeak: "Password must be at least 6 characters.", authErrNoUser: "No account found with this e-mail.", authErrGeneric: "Something went wrong. Please try again.", authErrNicknameLookup: "Couldn't verify that nickname - try logging in with your e-mail address instead.", accRegisteredSince: "Registered", importDataBtn: "Import data (JSON)", importDataNote: "Import a JSON file previously downloaded with \"Download my data\" (e.g. from another account or as a backup restore). Games are added to your current library - duplicates (by name) are skipped automatically.", importInvalidFile: "Invalid file - please choose a JSON file previously downloaded with \"Download my data\".", importResult: "Games imported: {added} (invalid lines skipped: {skipped}, duplicates: {dup}).", banGateTitle: "This account has been suspended", banGateReasonLabel: "Reason", banGateNoReason: "The administrator did not provide a reason.", banGatePermanent: "This is a permanent suspension.", banGateUntilPrefix: "Suspended until:", banGateContact: "If you believe this is a mistake, please write to the address given in the footer.", banGateBackBtn: "Back to home page", authErrTooFast: "Form filled out too quickly - please try again in a moment.", authErrTooSoon: "Too many registration attempts in a short time - please try again in a minute.", healthLabel: "Backlog health", healthGradeExemplary: "Exemplary backlog 🏆", healthGradeGood: "In good shape 💪", healthGradeAverage: "Average 😐", healthGradeGrowing: "Growing debt 😅", healthGradeOverwhelmed: "Backlog took over 😱", healthGradeUnknown: "Unknown", healthMsgExemplary: "You're keeping up with your games - respect!", healthMsgGood: "Your backlog is under control, keep it up.", healthMsgAverage: "A few games have piled up, but that's normal.", healthMsgGrowing: "Your backlog is growing faster than you're clearing it.", healthMsgOverwhelmed: "Maybe it's time to buy less and play more?", healthNoStatusMsg: "Set a status (Completed/Not completed) on your games to see your score.", healthEmptyMsg: "Add your first game to see your score.",
        firebaseNotConfigured: "Firebase is not configured. Paste your config in the file (FIREBASE CONFIG section).",
        syncLocal: "Local data", syncCloud: "Cloud", syncSyncing: "Syncing...", syncErr: "Sync error", retryBtn: "Retry", libraryLoadError: "Couldn't load your library. Check your connection and try again.",
        savedLocal: "Saved locally", savedCloud: "Saved to cloud", itemDeleted: "Item deleted", undoBtn: "Undo", smartImportBtn: "Smart import (Steam & more)", smartImportHint: "Paste your Steam purchase history (or any order list/receipt) below - one purchase per line works best. Steam doesn't offer an official export, so this is a best-effort reader: it tries to find a date, a price and a title on each line. Nothing gets added until you review and confirm the results below.", smartImportParseBtn: "Find purchases", smartImportPreviewNote: "Review each row - uncheck anything that isn't a game (wallet top-ups and refunds are pre-unchecked, but double-check). Every field can be edited directly.", smartImportCommitBtn: "Add checked games",
        emptyLib: "Your library is empty. Add your first game above.", bulkAddBtn: "Add multiple games", bulkAddHint: "Paste one game per line, in the format: Title;Price;Currency;Source;Date (YYYY-MM-DD). Currency, Source and Date are optional.", bulkAddSubmit: "Add all", bulkAddResult: "Games added: {added} (skipped invalid lines: {skipped})", bulkAddNone: "No valid entries found to add.", hideList: "Hide list", showList: "Show list", expandList: "Expand list", collapseList: "Collapse list", filterAllSources: "All sources", footerUpdated: "Last updated", navRates: "Exchange Rates", ratesColCurrency: "Currency", ratesColRate: "Rate per 1 EUR", ratesBaseNote: "All rates are shown relative to 1 EUR (base currency).", ratesUpdated: "Updated", scrollTopTitle: "Back to top", changePasswordBtn: "Change password", currentPassword: "Current password", newPassword: "New password", newPasswordConfirm: "Confirm new password", changePasswordSubmit: "Change password", passwordMismatch: "The passwords do not match.", passwordChanged: "Password changed successfully.",
        confirmDuplicate: "A game with this name is already in your library. Add it again anyway?", advFiltersToggle: "Advanced filters", priceMin: "Price from", priceMax: "Price to", dateFrom: "Date from", dateTo: "Date to", resetFilters: "Clear filters", bulkAddResultDup: "Games added: {added} (invalid lines: {skipped}, duplicates: {dup})", bulkAddAllDup: "All pasted games ({dup}) are already in your library - nothing was added.", navAchievements: "Achievements", achievementsDesc: "Unlock badges as you grow your game library.", achUnlocked: "Unlocked", achLocked: "Locked", achMaxLevel: "Max level!", achLevel: "Level {level}/{max}", achFirstGameT: "First Step", achFirstGameD: "Add your first game to the library.", achCollectorT: "Collector", achCollectorD: "Own {target} games in your library.", achDiversityT: "Multi-Platform", achDiversityD: "Own games from {target} different platforms.", achFinisherT: "Finisher", achFinisherD: "Complete {target} games from your library.", achPhysicalT: "Box Collector", achPhysicalD: "Own {target} physical games.", achInvestorT: "Big Investor", achInvestorD: "Reach a library value of {target}.", achDreamT: "Dream Fulfilled", achDreamD: "Reach at least one savings goal.", achCurrenciesT: "Multi-Currency", achCurrenciesD: "Buy games in {target} different currencies.", achVeteranT: "Collection Veteran", achVeteranD: "Keep your library going for {target} years.", achBalancedT: "Balanced Collection", achBalancedD: "Own both digital and physical games in your library.", navRoulette: "What to play?", rouletteDesc: "Can't decide what to play tonight? Roll the dice on your backlog.", rouletteBtn: "Pick a game", rouletteRerollBtn: "Pick another", rouletteEmptyLib: "Your library is empty - add a few games first to roll for one.", rouletteAllDone: "No games marked as \"Not completed\" - set that status on some games in your library so there's something to roll for.", roulettePlatformAll: "All platforms", navSectionMain: "Main", navSectionAccount: "Account", navSectionLibrary: "Your library", navSectionTools: "Tools",
        navTerms: "Terms & Conditions", navPrivacy: "Privacy Policy", rememberMe: "Remember me", footerContact: "Contact", cookieConsentText: "This site uses local browser storage (localStorage) to ensure proper functioning and remember your preferences. By continuing to use the site, you consent to this.", cookieMoreInfo: "More information", cookieDeclineBtn: "Decline", cookieAcceptBtn: "Accept",
        faqHtml: "<h3>What is this app?</h3><p>A personal game-spending tracker. You log the title, price, source and purchase date, and the app calculates stats and draws charts.</p><h3>Do I need an account?</h3><p>Yes. Full app functionality (your game library, stats, achievements) requires a free, verified account. Without one you'll only see the welcome page.</p><h3>Will I lose guest data after logging in?</h3><p>No. On first login your guest data is merged into your cloud account.</p><h3>Where do exchange rates come from?</h3><p>From a public rates API (open.er-api.com). If the API is unavailable, fallback rates are used.</p><h3>Can the ranking be gamed?</h3><p>Not easily. It's always recalculated from the data stored on your account at the moment it's displayed, so you can't inflate it by editing anything locally in your browser. Entering a fake but plausible-sounding game is still theoretically possible - the basic filter only rejects obviously junk entries.</p><h3>Can I personalise my account?</h3><p>Yes. On the Login/Account tab you can set a nickname, your preferred display currency, and a light/dark theme.</p><h3>Is my data safe and GDPR-compliant?</h3><p>Yes. Your data is stored in Firebase (Google Cloud) and protected by access rules. You can export your data (JSON) or delete your account and all its data with one click at any time - see the Privacy Policy for details.</p><h3>How do I report a bug or get in touch?</h3><p>Email the address listed in the footer.</p>",
        navPlaytime: "Playtime", ptDesc: "How many hours are sitting in your library, based on HowLongToBeat times.", ptProgressHeading: "Your progress", ptListHeading: "Games with times", ptSourceHeading: "Where the times come from", ptSourceNote: "HowLongToBeat has no public API. Every working library is an unofficial scraper that needs a token lifted from the site's own scripts, and howlongtobeat.com sends no CORS headers, so a browser can't query it directly from your page. That's why you enter times manually, or point the app at your own proxy (a free Cloudflare Worker works) that returns JSON with main, extra and complete fields.", ptProxyLabel: "Your own proxy address (optional)", ptProxySave: "Save", ptProxyTest: "Test connection", ptProxyInvalid: "The address has to start with https:// or be local (http://localhost).", ptProxySaved: "Saved. The “Fetch times” button on the add-game form is now active.", ptProxyCleared: "Address cleared - times are entered manually.", ptProxyNone: "Enter a proxy address first.", ptProxyTesting: "Testing…", ptProxyOk: "Working. Test response: {main} h / {extra} h / {complete} h.", ptProxyEmpty: "The server replied, but no times could be read from the response.", ptProxyFail: "Couldn't connect:", ptRemaining: "Still to play", ptEquals: "That's about {d} days non-stop", ptNoData: "No data", ptEmpty: "No game has times yet. Add them when editing a game in your library.", ptClearedLabel: "Hours already cleared", hltbFormLabel: "Completion time (HowLongToBeat)", hltbSearchPh: "Title on HowLongToBeat", hltbFetchBtn: "Fetch times", hltbMain: "Main Story (h)", hltbExtra: "Main + Extras (h)", hltbComplete: "Completionist (h)", hltbMainShort: "Main Story", hltbExtraShort: "Main + Extras", hltbCompleteShort: "Completionist", hltbFormNote: "HowLongToBeat has no public API - enter times manually, or connect your own proxy on the Playtime tab.", hltbFormNoteProxy: "Proxy connected - hit “Fetch times” to fill these fields automatically.", hltbNeedTitle: "Enter a game title first.", hltbNoProxy: "Automatic lookup needs your own proxy - set one up on the Playtime tab.", hltbSearching: "Looking up times…", hltbNotFound: "Couldn't find “{title}” on HowLongToBeat.", hltbFound: "Times filled in for “{title}”.", hltbFetchFail: "Lookup failed:", hltbLevelLabel: "How far did you get in this game?", hltbLevelNone: "- not set -", hltbLevelMain: "Main story only", hltbLevelExtra: "Main story + side content", hltbLevelComplete: "Completed 100%", yrYearLabel: "Year", yrCompareLabel: "Compare with", yrCompareNone: "— no comparison —", yrAllYearsBtn: "All years", yrCompareHeading: "Year comparison", yrAllYearsHeading: "Spending year by year", yrAvgPrice: "Average game price", yrCompletedLabel: "Completed games", yrVsTitle: "{a} compared with {b}",
        ptBulkHeading: "Fill in your whole library", ptBulkDesc: "Goes through your games and fetches times for the ones that don't have them yet. It works one game at a time, so a large library takes a few minutes - you can stop whenever you like and everything fetched so far is kept.", ptBulkOverwrite: "Overwrite times that are already filled in", ptBulkStart: "Fetch missing times", ptBulkStop: "Stop", ptBulkStopping: "Finishing the current game…", ptBulkNeedProxy: "Connect a proxy above first - there's nowhere to fetch times from without it.", ptBulkNoneMissing: "Every game already has times. Tick “Overwrite” if you want to fetch them again.", ptBulkProgress: "{i} of {n} — {name}", ptBulkDone: "Done. Filled: {ok}, not found: {miss}, errors: {err}.", ptBulkStopped: "Stopped. Filled: {ok}.",
        ptLevelFromStatus: "set from the “Completed” status",
        ptClearedExplain: "The total ({base} h) is the sum of the “main + extras” times of every game that has times filled in. Each game contributes as many hours as its completion level - a game with no level set contributes nothing.",
        changelogHtml: "<h3><span class='changelog-ver'>v1.6</span> Smart import, a real table alignment bug fixed, and a tidier library view (26.07.2026)</h3><ul><li>New: \"Smart import\" next to \"Add multiple games\" - paste your Steam purchase history (or any order list/receipt) and it tries to find a date, price and title on each line automatically. Steam has no official export for this, so it's a best-effort reader with an editable preview - nothing is added until you review and confirm it, and anything that looks like a wallet top-up or refund is pre-unchecked</li><li>Fixed a real bug: the \"Ownership\" and \"Purchase date\" columns in the library table were being right-aligned by a leftover rule from an earlier version of the table, while the price columns weren't - now the price columns are right-aligned as intended and the others read naturally from the left</li><li>The Digital/Physical badge in the table is now a proper small chip instead of a bare icon, matching the rest of the app's design language</li><li>Buttons like \"Advanced filters\", \"Add multiple games\", \"Hide list\" and a few others now have a visible border instead of looking like plain text links, so they read as buttons rather than stray text</li><li>Row striping in the library table is now actually visible (it was nearly transparent before, especially in light mode) - alternating rows are easier to scan</li><li>Added a proper social preview image and description, so sharing a link to Backlog Wallet on Discord, Slack, etc. now shows a real preview card instead of nothing</li></ul><h3><span class='changelog-ver'>v1.5</span> Vertical centering and consistent letter-spacing (26.07.2026)</h3><ul><li>The login/register card and the account panel (the same container) used to sit pinned near the top of the page with no vertical centering, so on tall screens they looked oddly high with a lot of empty space below - both now centre vertically in the available space when their content is short enough to allow it</li><li>Consolidated the letter-spacing used on small uppercase labels (stat labels, table headers, section headings, badges) from more than a dozen slightly different hand-picked values down to two consistent tokens - this was the real source of the page feeling like it used many different fonts, even though only three typefaces are actually in use</li></ul><h3><span class='changelog-ver'>v1.4</span> Undo for deletions, error monitoring, loading states and installable app (26.07.2026)</h3><ul><li>Deleting a game no longer shows a blocking confirmation dialog - it's removed immediately, with a 6-second \"Undo\" toast in case it was a mistake</li><li>Added error monitoring (Sentry) so problems can be caught and fixed proactively instead of waiting for a bug report</li><li>The library now shows an animated loading skeleton while fetching your data, and a clear retry banner if the connection to the server fails, instead of a blank table or a silent failure</li><li>Backlog Wallet can now be installed as an app on phone and desktop, with an icon, a splash screen, and basic offline support for the app itself (your live game data still needs a connection to load and save)</li></ul><h3><span class='changelog-ver'>v1.3.2</span> Progress counter explained (26.07.2026)</h3><ul><li>Added a line under the “Hours already cleared” bar explaining where the number on the right of the slash comes from, and why a game with no completion level set doesn't affect the result</li></ul><h3><span class='changelog-ver'>v1.3.1</span> Completion level straight from the list, and linked to status (26.07.2026)</h3><ul><li>Fixed confusing behaviour: games marked with the “Completed” status but no completion level set weren't counted towards progress on the Playtime tab. They now count as a main-story run, and such a game shows a note explaining where the value came from</li><li>The completion level can now be set straight from the game list on the Playtime tab, without opening the entry for editing</li></ul><h3><span class='changelog-ver'>v1.3</span> Bulk fetching of HowLongToBeat times (26.07.2026)</h3><ul><li>New: a button on the Playtime tab that walks through your whole library and fills in times for the games that don't have them - with a progress bar, the name of the game being checked, and the option to stop at any point</li><li>Optional overwriting of times that are already filled in, in case you want to refresh them</li><li>Progress is saved as it goes, so stopping halfway loses nothing</li></ul><h3><span class='changelog-ver'>v1.2.1</span> Fix: local proxy address for HowLongToBeat times (26.07.2026)</h3><ul><li>Fixed the proxy address field on the Playtime tab - it rejected local addresses (http://localhost), so a proxy running on your own machine couldn't be connected. Remote addresses still have to use https://</li></ul><h3><span class='changelog-ver'>v1.2</span> New look, year-to-year comparison and HowLongToBeat times (26.07.2026)</h3><ul><li>Complete visual redesign - a new palette (\"Ledger Console\": ink navy, violet for the interface, gold reserved strictly for money), new typefaces (Bricolage Grotesque, Inter Tight, JetBrains Mono), a graph-paper grid ground and a vertical rail beside every card heading</li><li>All figures and amounts are now set in monospace with equal-width digits, so table columns stop jumping around</li><li>New: Year in Review can now put two years side by side - spending, games bought, average game price, completed titles, favourite platform and busiest month, each with the direction and size of the change</li><li>New: an \"All years\" button in Year in Review charts spending and game count across every year at once</li><li>New: a \"Playtime\" tab - the total completion time of your whole library across the three HowLongToBeat tiers (main story, main + extras, completionist), how much of it you've already cleared, and how many hours are still ahead of you</li><li>New: every game can store its HowLongToBeat times, plus how far you actually got - main story only, main story with side content, or 100%</li><li>HowLongToBeat publishes no public API and its server sends no CORS headers, so a browser can't query it directly. Times are therefore entered manually, or through a proxy you host yourself (a free Cloudflare Worker does the job) - the address field lives on the Playtime tab, and the app understands several of the common response shapes</li></ul><h3><span class='changelog-ver'>v1.1</span> Monthly spending counter (24.07.2026)</h3><ul><li>New: a new stat showing how much you've spent on games this month (in your selected currency), along with the percentage change compared to last month</li></ul><h3><span class='changelog-ver'>v1.0.1</span> Critical bug fix (20.07.2026)</h3><ul><li>Fixed a bug introduced in version 1.0 that broke the entire site - login, buttons and home page text stopped working due to a code syntax error</li></ul><h3><span class='changelog-ver'>v1.0</span> Full release: redesign and a fixed desktop menu (20.07.2026)</h3><ul><li>Version 1.0 - full release. Complete visual and UX redesign: new typeface, refreshed color palette, and consistent spacing, corner rounding and shadows throughout the app</li><li>Fixed the desktop top menu - the \"Your library\" and \"Tools\" sections no longer open as tiny, scrollable dropdown menus; desktop navigation is now a persistent, fully visible left sidebar</li><li>Fixed an incorrect page width that caused a horizontal scrollbar at the bottom of the screen - the page now correctly fits every screen size</li><li>Fixed the home page content on desktop being pushed to the left - it's now properly centered in the space next to the sidebar</li><li>Removed template-generator-looking elements - dashed borders, \"punch-hole\" cards, rotated badges and buttons</li><li>Improved readability - clearer form field borders, stronger text contrast, subtle row striping in tables</li></ul><h3><span class='changelog-ver'>v0.9.1</span> Bulk status editing and a Backlog Health fix (17.07.2026)</h3><ul><li>New: in bulk edit (after selecting games in your library) you can now set the status - Completed, Not completed, Endless game, Won't play, or clear the status - for all selected games at once</li><li>Fixed the \"Backlog Health\" calculation - the completion ratio is now measured against your whole library, not just the games you've tagged. Previously, marking a handful of games as completed in a large, mostly untagged library could artificially inflate the score</li></ul><h3><span class='changelog-ver'>v0.9</span> Nickname login fix, backlog health score, data import and a visual refresh (17.07.2026)</h3><ul><li>Fixed nickname login - if it wasn't working for you, it should now fix itself automatically the next time you log in with your e-mail</li><li>New: \"Backlog Health\" - a 0-100 score on the home page showing how well you're keeping up with your game library</li><li>New: two additional game statuses - \"Endless game\" and \"Won't play\" (e.g. for free games you don't plan to play)</li><li>New: import data from a JSON file (e.g. from an earlier backup or another account) - duplicates are skipped automatically</li><li>New: deleting your account now automatically downloads a backup of your data first, just in case</li><li>Suspended accounts now see the reason for the suspension, and whether it's temporary or permanent</li><li>Your account's registration date and time are now shown on the \"Your account\" tab</li><li>Added basic protection against automated bot registrations</li><li>The side menu is now grouped into collapsible categories, so it's shorter and easier to scan</li><li>Visual refresh: bolder buttons, subtle animations, and stronger contrast throughout</li></ul><h3><span class='changelog-ver'>v0.8.1</span> New game statuses: \"Endless game\" and \"Won't play\" (17.07.2026)</h3><ul><li>New: two additional completion statuses - \"Endless game\" (for titles with no ending, e.g. live-service games) and \"Won't play\" (e.g. for games you got for free but don't plan to play)</li><li>\"What to play?\" now only picks games explicitly marked as \"Not completed\" - completed games, endless games, \"won't play\" games, and games with no status set no longer show up in the roll</li></ul><h3><span class='changelog-ver'>v0.8</span> New \"What to play?\" feature, more achievements and fixes (17.07.2026)</h3><ul><li>New: \"What to play?\" - roll a random game from your backlog (games not marked as completed), with an optional platform filter and a reroll button</li><li>Expanded achievements: more tiers on existing badges (e.g. Collector up to 1000 games, Big Investor up to 50,000 CHF) plus 3 new badges - Multi-Currency, Collection Veteran and Balanced Collection</li><li>Fixed the library price filter - the range is now calculated in whichever currency is currently selected under \"Library value\", instead of being hardcoded to CHF</li><li>Improved the reliability of country detection during account registration - added a backup geolocation provider and automatic backfilling of a missing country on login (this also covers older accounts)</li><li>Removed the outdated \"guest mode\" mention from the login screen and the FAQ - full app functionality has always required an account</li><li>Visual refresh: stronger contrast between cards and the page background, clearer borders, fixed stat tiles that were blending into their card background, and grouped the side menu into clearer sections (Main / Account / Your library / Tools)</li></ul><h3><span class='changelog-ver'>v0.7.4</span> Achievements, duplicate detection and advanced filters (16.07.2026)</h3><ul><li>New: \"Achievements\" - a new tab with badges unlocked automatically based on your game library (e.g. for game count, completed titles, platform diversity and collection value)</li><li>New: duplicate detection - adding a game whose name already exists in your library now shows a confirmation warning; during bulk-add, duplicates are skipped automatically</li><li>New: advanced library filters - filter by price range (CHF) and by purchase date range, with a quick way to clear all filters</li></ul><h3><span class='changelog-ver'>v0.7.3</span> Fix: restored the \"Key Store\" category (15.07.2026)</h3><ul><li>\"Key Store\" is back as a full purchase source - available when adding a game, in filters, bulk editing, and stats</li><li>On the virtual shelf, Key Store games still appear styled as Steam (since keys end up there), but that's purely visual - the underlying data is untouched</li></ul><h3><span class='changelog-ver'>v0.7.2</span> Small UI fixes (15.07.2026)</h3><ul><li>The game-selection checkbox in the table is now left-aligned within its cell instead of centered</li><li>Game titles on the virtual shelf are no longer cut off with \"…\" - overly long titles now automatically shrink to fit in full</li></ul><h3><span class='changelog-ver'>v0.7.1</span> Post-testing fixes: game format, virtual shelf and cleanup (15.07.2026)</h3><ul><li>Fixed the \"Update\" button translation in Savings Goals - it previously always showed in Polish regardless of the selected language</li><li>Fixed oversized checkboxes for selecting games in the library</li><li>Added an always-visible \"Select all\" button above the table - previously this option only lived in the table header, which is hidden on mobile</li><li>Fixed the side menu potentially cutting off the bottom items on smaller phone screens - the menu is now scrollable</li><li>Purchases marked as \"Key Store\" are now automatically recorded as Steam - it's the same platform from a purchase-tracking perspective, so the separate source option was removed</li><li>Redesigned the virtual shelf - games now look like narrow boxes/cases standing on a shelf, with the title running vertically, just like on a real game shelf</li></ul><h3><span class='changelog-ver'>v0.7</span> Savings goals, game format and bulk editing (15.07.2026)</h3><ul><li>New: \"Savings Goals\" - a new tab where you can set a target amount for a game you want, update how much you've saved so far, and track a progress bar</li><li>New: every game in your library now has a format - digital or physical (digital by default) - shown in the list and filterable</li><li>New: bulk editing - select any number of games (or all at once) with checkboxes in the table and change their format (digital/physical) or purchase source in one click</li><li>The \"Sources\" chart now shows the count and percentage share of each source directly on the chart</li><li>New \"Digital vs Physical\" chart showing your library split by game format, also with counts and percentages on the chart</li></ul><h3><span class='changelog-ver'>v0.6.1</span> Bug fixes (15.07.2026)</h3><ul><li>Fixed the language quick-menu on desktop - it used to always open on the left side of the screen regardless of where the button was; it now opens right under its own button</li><li>Fixed the new desktop top menu requiring horizontal scrolling - menu items now wrap onto a second line instead of showing a scrollbar</li><li>Fixed saving of the user's registration country - it was being overwritten (and disappeared) on every subsequent library save</li><li>Fixed the Year in Review summary - the most active month always showed a Polish abbreviation regardless of the site language; month abbreviations now match all 12 supported languages</li><li>Removed Google AdSense from the entire site, along with related mentions in the Terms of Service and Privacy Policy</li></ul><h3><span class='changelog-ver'>v0.6</span> Sharing, year in review and optional completion status (13.07.2026)</h3><ul><li>New: generate a public, read-only link to your game library to show off your collection to friends - you enable it yourself in account settings, and the link never includes your email</li><li>New: \"Year in Review\" - a shareable card showing how much you spent, how many games you bought, your favorite platform and priciest purchase for a given year, downloadable as a PNG image</li><li>New: optional completion status (Completed/Not completed) when adding or editing a game - fully optional, and intentionally skipped during bulk-add</li><li>The logged-out home page now explicitly lists every supported platform (Steam, PlayStation, Xbox, Nintendo, GOG, Epic Games)</li><li>Switched version numbering to a major.minor scheme (major releases: 0.1, 0.2…, minor fixes: 0.11, 0.12…) - previous changelog entries were renumbered retroactively, with no change to their content</li></ul><h3><span class='changelog-ver'>v0.5</span> Major update: security, design and new platforms (13.07.2026)</h3><ul><li>Email confirmation is now required at registration - library access unlocks only after clicking the confirmation link</li><li>Strengthened content filter - rejects vulgar/inappropriate game titles and unrealistic prices</li><li>Added PlayStation, Xbox, Nintendo, GOG and Epic Games as purchase sources, alongside Steam and Key Store</li><li>Fixed an unreadable, uneven Y-axis scale on the total games chart</li><li>Fixed an overly dark, hard-to-read bar color on the monthly purchases chart</li><li>The add-game form now adapts better to narrow screens (no more empty space on the side)</li><li>The game library list can now be fully hidden, not just expanded/collapsed</li><li>Fixed the logout button alignment in the top bar on mobile devices</li><li>Major redesign of the home page (both logged out and logged in) - bigger, bolder typography and a new content layout</li></ul><h3><span class='changelog-ver'>v0.41</span> Cleanup and new features (13.07.2026)</h3><ul><li>Removed the almost invisible, clipped page title from the top bar on mobile</li><li>Added library sorting by purchase date (newest/oldest) and alphabetically (A-Z/Z-A)</li><li>Removed the emoji avatar personalisation feature - it added little value</li><li>Added the ability to log in with a nickname, not just an email address</li><li>Nickname is now a required field on registration (previously optional)</li><li>The default site language is now English, and the default currency is EUR (removed IP-based currency guessing)</li><li>Removed \"Created in Switzerland with love\" from the footer - the footer now shows the current date and time</li><li>Fixed excessive empty space below the welcome text on mobile</li><li>Major source code cleanup - removed internal developer notes for a cleaner, lighter codebase</li></ul><h3><span class='changelog-ver'>v0.4</span> New brand, refreshed look and GDPR (12.07.2026)</h3><ul><li>Renamed to Backlog Wallet, with a new browser tab icon</li><li>Removed the clipped icon in the top-left corner - replaced with a clean brand wordmark</li><li>New, punchier tagline and a refreshed guest homepage design (including a new \"Player ranking\" feature card)</li><li>Added account personalisation - an emoji avatar shown next to your nickname and in the ranking</li><li>Expanded the FAQ with questions about the ranking, account personalisation and GDPR compliance</li><li>Privacy Policy: added the right to restriction of processing and the right to object to processing</li><li>Fixed the ranking - accounts that rarely sign in now show up correctly too</li></ul><h3><span class='changelog-ver'>v0.31</span> Ranking, more currencies and trends (12.07.2026)</h3><ul><li>Expanded the currencies available when adding a single game from 3 to all 20 currencies available on the site (same list as in the \"Library value\" field)</li><li>New \"Ranking\" tab - a library value ranking visible to logged-in users, always calculated live from the data stored on each account</li><li>Added basic protection against fake/junk game names (e.g. digits only, repeated characters) when adding games one at a time or in bulk</li><li>New spending trend indicator on the \"This month\" statistic - shows the percentage increase or decrease compared to the previous month</li></ul><h3><span class='changelog-ver'>v0.3</span> Rebuild, accounts and privacy (11.07.2026)</h3><ul><li>Rebuilt home page with an overview of the app, its purpose and features</li><li>Full tracker functionality locked behind a free account (registration required)</li><li>Account panel shown after signing in, in place of the login/registration form</li><li>Light and dark theme with a toggle in the top bar</li><li>Library sorting by price - most expensive or cheapest games first</li><li>Account nicknames and a customisation panel (display name, preferred currency, theme)</li><li>GDPR-compliant data handling - expanded privacy policy, one-click data export and account deletion</li><li>Removal of the non-functional \"Add game\" button on the empty library view</li></ul><h3><span class='changelog-ver'>v0.24</span> minor bug fixes (11.07.2026)</h3><ul><li>Removed the live exchange-rate summary from the side menu - there's already a full, dedicated \\\"Exchange Rates\\\" tab for that</li><li>Renumbered the changelog version history (now starts from v0.0)</li><li>New UX/design improvements</li></ul><h3><span class='changelog-ver'>v0.23</span> New features and fixes (11.07.2026)</h3><ul><li>Removed the Steam brand logo (Valve trademark concerns) and replaced it with a custom, neutral game-controller icon</li><li>Added a contact e-mail address for site support in the footer</li><li>Expanded the currency choice for \"Library value\" to the 20 most important world currencies (the same list as in the \"Exchange Rates\" tab), with EUR as the default currency</li><li>Added the ability to change your account password on the Login/Register tab</li><li>Small UX improvements: a highlight flash for newly added games in the list, a quick-add button on an empty library, and a \"/\" keyboard shortcut to jump straight to the search box</li></ul><h3><span class='changelog-ver'>v0.22</span> Fixes and new features (11.07.2026)</h3><ul><li>Fixed the expand/collapse games list bug on mobile devices - the mobile CSS rule previously overrode the height limit unconditionally, so the button had no visible effect</li><li>Added a quick language switcher in the top bar (globe icon) - no need to open the side menu anymore to change the language</li><li>Clicking the Steam logo in the top-left corner now scrolls the page back to the top</li><li>Added a new \"Exchange Rates\" tab with the 20 most important world currencies, shown relative to 1 EUR (base currency)</li><li>The default currency for the library value is now EUR; the site also attempts to guess the currency based on the country the browser connects from (a manual choice always takes priority)</li><li>Verified bulk game adding - currency and source are correctly recognised regardless of letter case (e.g. \"eur\" and \"EUR\" behave the same)</li></ul><h3><span class='changelog-ver'>v0.21</span> Fixes and new features (11.07.2026)</h3><ul><li>Fixed automatic browser language detection (a storage-key mismatch bug) - the language is now set correctly on first visit</li><li>Added missing Terms & Conditions and Privacy Policy translations for 9 languages that previously fell back to Polish</li><li>Fixed footer language sync (it could previously lag behind a language change)</li><li>Removed the Terms & Conditions and Privacy Policy links from the side menu - they remain available in the footer</li><li>Added bulk adding of multiple games at once (paste a text list)</li><li>Added the ability to expand/collapse the games list in the library</li><li>Added a library filter by source (Steam / Key Store)</li></ul><h3><span class='changelog-ver'>v0.2</span> Major rebuild</h3><ul><li>New side drawer menu with 5 sections</li><li>Guest mode by default, optional login</li><li>Firebase accounts: login, registration, password reset</li><li>Chart selector: purchases by month / quarter / year, cumulative line, sources</li><li>Table search and sorting, CSV export</li><li>Full mobile support</li></ul><h3><span class='changelog-ver'>v0.1</span> Initial release</h3><ul><li>Games table, exchange rates, quarterly chart</li></ul>",
        donateHtml: "<h3>Support the project</h3><p>This app is free and made as a hobby. If you find it useful, you can buy the author a coffee.</p><p><a href='https://buymeacoffee.com/' target='_blank' rel='noopener'><i class='fa-solid fa-mug-hot'></i> Buy Me a Coffee</a></p><p><a href='https://ko-fi.com/' target='_blank' rel='noopener'><i class='fa-solid fa-heart'></i> Ko-fi</a></p><p>Thank you for any support!</p>",
        termsHtml: "<h3>1. General provisions</h3><p>These Terms and Conditions govern the use of the Backlog Wallet application (the \"App\"). By using the App, you agree to the terms below.</p><h3>2. Nature of the service</h3><p>The App is a free, hobby-built tool for personal tracking of video game purchases. It is not affiliated with, endorsed by, or in any way officially connected with Valve Corporation or the Steam platform. The name \"Steam\" is used purely descriptively.</p><h3>3. User accounts</h3><p>The App can be used in guest mode (no registration required, data stored locally in your browser) or with a registered account (email/password authentication), which enables cloud synchronization. You are responsible for keeping your login credentials confidential.</p><h3>4. User obligations</h3><ul><li>You may not use the App for any unlawful purpose.</li><li>You may not attempt to compromise the security of the App or its infrastructure.</li><li>You are responsible for the content (e.g., game titles) you enter into the App.</li></ul><h3>5. Limitation of liability</h3><p>The App is provided \"as is\", without warranties of any kind. Currency exchange rates are fetched from a third-party public API and may be inaccurate. The author is not liable for any data loss, particularly for data stored locally in guest mode.</p><h3>6. Changes to these terms</h3><p>We reserve the right to modify these Terms at any time. Continued use of the App after changes constitutes acceptance of the updated Terms.</p><h3>7. Contact</h3><p>For questions about these Terms, please use the contact details provided in the footer.</p>",
        privacyHtml: "<h3>1. Data controller</h3><p>The data controller for personal data processed within the App is [YOUR FULL NAME OR COMPANY NAME - PLEASE FILL IN] (owner of Backlog Wallet), who can be reached using the contact details provided in the footer.</p><h3>2. What data we process</h3><ul><li><strong>Guest mode:</strong> your game library data (title, price, source, date) is stored only locally in your browser (localStorage) and is never sent to our servers.</li><li><strong>User accounts:</strong> if you register, we process your email address and your game library data, stored via Firebase (Google) to enable synchronization across devices.</li><li><strong>Preferences:</strong> your chosen interface language and cookie consent choice are stored locally in your browser.</li><li><strong>Registration country:</strong> when you create an account, we determine your country (e.g. \"PL\") from your IP address using a third-party IP geolocation service. We never store the IP address itself - only the resulting country code, which is visible to the site administrator for account security and oversight purposes.</li></ul><h3>3. Local storage</h3><p>The App uses local browser storage mechanisms (localStorage) required for it to function and to remember your preferences.</p><h3>4. Data sharing</h3><p>We do not sell user data. Data may be processed by service providers (Firebase/Google, and, during registration, a third-party IP geolocation service) solely to the extent necessary to provide the App's functionality.</p><h3>5. Your rights</h3><p>You have the right to access, correct, delete, and port your data, as well as the right to request restriction of processing and to object to processing based on legitimate interest. You can request deletion of your account and cloud data by contacting the administrator. You can delete guest data yourself by clearing this site's browser data.</p><h3>6. Security</h3><p>We rely on Firebase's standard security measures to protect your data; however, no method of transmission over the internet is 100% secure.</p><h3>7. Contact</h3><p>For privacy-related questions, please use the contact details provided in the footer.</p><h3>Legal bases for processing (GDPR)</h3><ul><li><strong>Performance of a contract (Art. 6(1)(b) GDPR):</strong> operating your account and synchronising your library across devices.</li><li><strong>Legitimate interest (Art. 6(1)(f) GDPR):</strong> keeping the app secure and working correctly, and detecting the registration country for basic account oversight and abuse prevention.</li></ul><h3>Data retention</h3><p>We keep your account and library data until you delete your account. You can do this yourself at any time from the \"Your account\" panel using the delete-account-and-data option. Preferences stored locally in your browser (language, theme, currency, consent) can be removed by clearing this site's browser data.</p><h3>International transfers</h3><p>We rely on Google services (Firebase), which may involve processing outside the European Economic Area. Google uses Standard Contractual Clauses and other legally recognised safeguards for such transfers.</p><h3>Withdrawing consent and complaints</h3><p>You can withdraw cookie consent at any time (via the consent banner or your browser settings), without affecting the lawfulness of processing carried out beforehand. You have the right to lodge a complaint with the data-protection supervisory authority in your country of residence.</p>",
    }
};

let currentLang = localStorage.getItem('appLang') || 'en';
let games = [];
let globalTotalChf = 0;
let mainChart = null;
let editingIndex = -1;
let selectedGames = new Set(); // v0.7: zaznaczone gry do edycji masowej
let wishGoals = []; // v0.7: cele oszczędnościowe
let currentUser = null;
let userProfile = { nickname: '', currency: '', theme: '' };
let myRegisteredAt = null; // v0.9: data/godzina rejestracji konta, widoczna dla użytkownika i administratora
let banGateActive = false; // v0.9: czy aktualnie pokazujemy ekran "zbanowano" zamiast strony głównej
let sortKey = 'date', sortDir = -1;
let rates = { CHF: 1.0, EUR: 0.92, PLN: 0.21 };

const ADMIN_UID = 'YavZOHzXm4cyqCG7RPvLx83gXYo2';
function isAdmin() { return !!(currentUser && currentUser.uid === ADMIN_UID); }

const t = (key) => (translations[currentLang] && translations[currentLang][key]) || translations.en[key] || key;
const $ = (id) => document.getElementById(id);

const BANNED_TERMS = [
    'kurwa', 'chuj', 'chuja', 'chuju', 'pizda', 'pizdo', 'jebac', 'jebać', 'jebany', 'jebana', 'pojebane', 'wyjebane',
    'spierdalaj', 'pierdol', 'cipa', 'cipe', 'dziwka', 'skurwiel', 'skurwysyn', 'huj', 'pojeb', 'zjeb', 'ryj',
    'fuck', 'shit', 'cunt', 'bitch', 'whore', 'slut', 'porn', 'nigger', 'nigga', 'faggot', 'rape', 'cock', 'dick',
    'pussy', 'sperma', 'sperm', 'semen', 'anal', 'blowjob', 'handjob'
];
function normalizeForFilter(s) {
    const map = { '0': 'o', '1': 'i', '3': 'e', '4': 'a', '5': 's', '7': 't', '@': 'a', '$': 's', '!': 'i' };
    return (s || '').toLowerCase().replace(/[013457@$!]/g, ch => map[ch] || ch).replace(/[^a-ząćęłńóśźż]/g, '');
}
function containsBannedTerm(name) {
    const norm = normalizeForFilter(name);
    return BANNED_TERMS.some(term => norm.includes(normalizeForFilter(term)));
}

function isSuspiciousGameName(name) {
    const n = (name || '').trim();
    if (n.length < 2 || n.length > 100) return true;
    if (!/[a-zA-ZÀ-ž\u0400-\u04FF\u4e00-\u9fff\u3040-\u30ff\uac00-\ud7a3]/.test(n)) return true; // brak jakichkolwiek liter
    if (/^(.)\1{3,}$/.test(n.replace(/\s/g, ''))) return true; // np. "aaaaaa"
    const words = n.toLowerCase().split(/\s+/).filter(Boolean);
    if (words.length >= 2 && new Set(words).size === 1) return true; // np. "dupa dupa dupa"
    if (/^[^a-zA-ZÀ-ž\u0400-\u04FF]{0,3}(asdf|qwerty|test123|lorem|xxx+|dupa|zzz+)/i.test(n)) return true;
    if (containsBannedTerm(n)) return true;
    return false;
}

const MAX_PRICE_CHF = 2000;
function findDuplicateIndex(name, excludeIndex) { // v0.8: wykrywanie duplikatów
    const norm = (name || '').trim().toLowerCase();
    if (!norm) return -1;
    return games.findIndex((g, i) => i !== excludeIndex && (g.name || '').trim().toLowerCase() === norm);
}

function isPriceTooHigh(price, currency) {
    const chf = price * (rates[currency] || 1);
    return chf > MAX_PRICE_CHF;
}

function toggleDrawer(open) {
    $('drawer').classList.toggle('open', open);
    $('drawerOverlay').classList.toggle('show', open);
    $('drawer').setAttribute('aria-hidden', String(!open));
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') toggleDrawer(false); });

function showView(view) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    $('view-' + view).classList.add('active');
    document.querySelectorAll('.nav-item').forEach(b => b.classList.toggle('active', b.dataset.view === view));
    document.querySelectorAll('.nav-dropdown').forEach(d => {
        const grp = d.querySelector('.nav-group');
        const toggle = d.querySelector('.nav-section-toggle');
        if (toggle) toggle.classList.toggle('has-active', !!(grp && grp.querySelector('.nav-item.active')));
        d.classList.remove('dropdown-open');
    });
    toggleDrawer(false);
    window.scrollTo({ top: 0 });
    if (view === 'ranking') renderRanking(); // v0.6
    if (view === 'yearreview') initYearReview();
    if (view === 'playtime') renderPlaytime(); // v1.2
    if (view === 'goals') renderGoals(); // v0.7
    if (view === 'shelf') renderShelf(); // v0.7
    if (view === 'achievements') renderAchievements(); // v0.8
    if (view === 'roulette') { $('rouletteResult').innerHTML = ''; rouletteLastPickIdx = -1; clearInterval(rouletteSpinTimer); } // v0.8
    if (view === 'admin' && isAdmin()) loadAdminPanel(); // v0.6
}

const langFlags = { en: '🇬🇧' };
const langNames = { en: 'English' };

function buildLangQuickMenu() {
    const menu = $('langQuickMenu');
    menu.innerHTML = Object.keys(langFlags).map(code =>
        `<button type="button" data-lang="${code}" onclick="selectQuickLang('${code}')">${langFlags[code]} ${langNames[code]}</button>`
    ).join('');
}

function toggleLangMenu(force) {
    const menu = $('langQuickMenu');
    const btn = $('langQuickBtn');
    const show = (force !== undefined) ? force : !menu.classList.contains('show');
    if (show) {
        // v0.6.1: position the menu under its own button instead of always at the left edge,
        // so it lines up correctly regardless of where the button ends up in the top bar (PC/mobile, LTR/RTL)
        const rect = btn.getBoundingClientRect();
        const menuWidth = Math.min(260, window.innerWidth - 16);
        let left = rect.right - menuWidth;
        if (left < 8) left = Math.min(rect.left, window.innerWidth - 8 - menuWidth);
        if (left < 8) left = 8;
        menu.style.left = left + 'px';
        menu.style.top = (rect.bottom + 6) + 'px';
    }
    menu.classList.toggle('show', show);
    if (show) {
        menu.querySelectorAll('button').forEach(b => b.classList.toggle('active', b.dataset.lang === currentLang));
    }
}

function selectQuickLang(lang) {
    changeLanguage(lang);
    toggleLangMenu(false);
}

document.addEventListener('click', (e) => {
    const menu = $('langQuickMenu');
    const btn = $('langQuickBtn');
    if (menu && menu.classList.contains('show') && !menu.contains(e.target) && !btn.contains(e.target)) {
        toggleLangMenu(false);
    }
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') toggleLangMenu(false); });

document.addEventListener('keydown', (e) => {
    if (e.key !== '/') return;
    const tag = document.activeElement && document.activeElement.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
    const searchEl = $('searchInput');
    if (searchEl && document.getElementById('view-home').classList.contains('active')) {
        e.preventDefault();
        searchEl.focus();
    }
});

function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('appLang', lang);
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    if ($('langSwitcher')) $('langSwitcher').value = lang;
    if ($('langQuickFlag')) $('langQuickFlag').textContent = langFlags[lang] || '🌐';
    if ($('langQuickMenu')) {
        $('langQuickMenu').querySelectorAll('button').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
    }
    if ($('logoTitle')) $('logoTitle').title = t('scrollTopTitle');
    if ($('langQuickBtn')) $('langQuickBtn').title = t('language');

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t(key)) el.textContent = t(key);
    });
    document.querySelectorAll('[data-i18n-opt]').forEach(el => {
        el.textContent = t(el.getAttribute('data-i18n-opt'));
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        el.placeholder = t(el.getAttribute('data-i18n-ph'));
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        el.title = t(el.getAttribute('data-i18n-title'));
    });

    $('faqContent').innerHTML = t('faqHtml');
    $('changelogContent').innerHTML = t('changelogHtml');
    $('donateContent').innerHTML = t('donateHtml');
    $('termsContent').innerHTML = t('termsHtml');
    $('privacyContent').innerHTML = t('privacyHtml');
    if ($('cookieConsentText')) updateCookieConsentTexts();

    if (editingIndex > -1) $('submitBtn').querySelector('span').textContent = t('saveBtn');
    if (typeof listExpanded !== 'undefined') {
        $('expandCollapseText').textContent = listExpanded ? t('collapseList') : t('expandList');
    }
    updateUserChip();
    updateAuthUI();
    setAuthMode(authMode, true);
    renderTable();
    renderGoals();
    if (typeof updateFooterLanguage === 'function') updateFooterLanguage();
    if (typeof updateFooterDateTime === 'function') updateFooterDateTime();
}

let ratesLive = false;

const TOP_CURRENCIES = ['USD','GBP','CHF','PLN','CZK','HUF','SEK','NOK','DKK',
    'JPY','CNY','HKD','SGD','KRW','INR','AUD','CAD','NZD','TRY','BRL'];
const FALLBACK_EUR_RATES = {
    USD: 1.08, GBP: 0.86, CHF: 0.94, PLN: 4.30, CZK: 25.20, HUF: 393.0,
    SEK: 11.30, NOK: 11.70, DKK: 7.46, JPY: 163.0, CNY: 7.75, HKD: 8.43,
    SGD: 1.46, KRW: 1450.0, INR: 90.0, AUD: 1.64, CAD: 1.47, NZD: 1.78,
    TRY: 38.0, BRL: 6.10
};
let fullRatesFromChf = null; // pełen zestaw kursów pobrany z API (baza CHF)

function renderCurrencyRatesTab(source) {
    const tbody = document.querySelector('#ratesTable tbody');
    if (!tbody) return;
    tbody.innerHTML = '';

    TOP_CURRENCIES.forEach(code => {
        let rate;
        if (source === 'live' && fullRatesFromChf && fullRatesFromChf[code] && fullRatesFromChf.EUR) {
            rate = fullRatesFromChf[code] / fullRatesFromChf.EUR;
        } else {
            rate = FALLBACK_EUR_RATES[code];
        }
        if (!rate) return;
        const tr = document.createElement('tr');
        tr.innerHTML = `<td style="color:#fff;">${code}</td><td>${rate.toFixed(rate < 10 ? 4 : 2)}</td>`;
        tbody.appendChild(tr);
    });

    const badge = $('ratesBadge');
    const badgeText = $('ratesBadgeText');
    if (badge && badgeText) {
        badge.className = 'sync-badge ' + (source === 'live' ? 'success' : 'offline');
        badge.querySelector('i').className = source === 'live' ? 'fa-solid fa-cloud' : 'fa-solid fa-hard-drive';
        badgeText.textContent = source === 'live' ? t('liveRates') : t('offlineRates');
    }
    const updatedEl = $('ratesUpdatedTime');
    if (updatedEl) {
        updatedEl.textContent = new Date().toLocaleString(currentLang, { dateStyle: 'medium', timeStyle: 'short' });
    }
}

async function fetchExchangeRates() {
    try {
        const response = await fetch('https://open.er-api.com/v6/latest/CHF');
        const data = await response.json();
        if (data && data.rates) {
            rates.EUR = 1 / data.rates.EUR;
            rates.PLN = 1 / data.rates.PLN;
            ratesLive = true;
            fullRatesFromChf = data.rates; // v2.2: zachowujemy pełny zestaw do zakładki "Kursy walut"
            TOP_CURRENCIES.forEach(code => {
                if (data.rates[code]) rates[code] = 1 / data.rates[code];
            });
        }
    } catch (e) { ratesLive = false; }

    TOP_CURRENCIES.forEach(code => {
        if (!rates[code] && FALLBACK_EUR_RATES[code]) {
            rates[code] = rates.EUR / FALLBACK_EUR_RATES[code];
        }
    });

    updateTotalDisplay();
    renderCurrencyRatesTab(ratesLive ? 'live' : 'fallback');
}

let toastTimer = null;
function showToast(key) {
    const el = $('toast');
    el.textContent = t(key);
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2500);
}

function setBadge(state, textKey) {
    const badge = $('syncBadge');
    badge.className = 'sync-badge ' + state;
    let icon = '<i class="fa-solid fa-hard-drive"></i>';
    if (state === 'success') icon = '<i class="fa-solid fa-cloud"></i>';
    else if (state === 'error') icon = '<i class="fa-solid fa-triangle-exclamation"></i>';
    else if (state === 'loading') icon = '<i class="fa-solid fa-spinner fa-spin"></i>';
    badge.innerHTML = icon + ' <span id="badgeText">' + t(textKey) + '</span>';
}

// v1.4: stany ladowania/bledu biblioteki - szkielet zamiast pustki,
// czytelny baner z ponowieniem zamiast cichej porazki widocznej tylko w plakietce.
function setLibraryLoading(isLoading) {
    const skel = $('tableSkeleton');
    const wrap = $('tableWrapper');
    if (skel) skel.style.display = isLoading ? 'block' : 'none';
    if (wrap) wrap.style.display = isLoading ? 'none' : '';
}

function showLibraryError(show) {
    const el = $('libraryLoadError');
    if (el) el.style.display = show ? 'flex' : 'none';
}

function retryLoadCloudData() {
    if (currentUser) loadCloudData();
}

function loadGuestData() {
    try { games = JSON.parse(localStorage.getItem('guestGames') || '[]'); }
    catch (e) { games = []; }
    try { wishGoals = JSON.parse(localStorage.getItem('guestWishGoals') || '[]'); }
    catch (e) { wishGoals = []; }
    setBadge('offline', 'syncLocal');
    renderTable();
    renderGoals();
}

async function loadCloudData() {
    if (!db || !currentUser) return;
    setBadge('loading', 'syncSyncing');
    showLibraryError(false);
    setLibraryLoading(true);
    try {
        const doc = await db.collection('users').doc(currentUser.uid).get();
        banGateActive = false; // v0.9: resetuj ewentualny stary ekran bana z poprzedniej sesji
        if (doc.exists && doc.data().banned === true) {
            const d = doc.data();
            const until = d.banUntil ? new Date(d.banUntil) : null;
            const stillBanned = !until || (new Date() < until);
            if (stillBanned) {
                setBadge('error', 'syncErr');
                showBanGate(d.banReason || '', until);
                await auth.signOut();
                return;
            }
        }
        const cloudGames = (doc.exists && Array.isArray(doc.data().games)) ? doc.data().games : [];
        wishGoals = (doc.exists && Array.isArray(doc.data().wishGoals)) ? doc.data().wishGoals : [];
        userProfile = (doc.exists && doc.data().profile) ? Object.assign({ nickname: '', currency: '', theme: '' }, doc.data().profile) : { nickname: '', currency: '', theme: '' };
        if (!userProfile.nickname && currentUser.displayName) userProfile.nickname = currentUser.displayName;
        publicShareEnabled = (doc.exists && doc.data().publicShare === true);
        updatePublicShareUI();

        // v0.9: data/godzina rejestracji - zapisana w Firestore przy rejestracji; dla starszych kont
        // uzupełniamy ją na podstawie metadanych Firebase Auth (dostępnych dla każdego konta, niezależnie
        // od tego, kiedy powstało), więc widoczna jest zarówno na koncie użytkownika, jak i w panelu admina
        const authCreatedAt = (currentUser.metadata && currentUser.metadata.creationTime) ? new Date(currentUser.metadata.creationTime).toISOString() : null;
        myRegisteredAt = (doc.exists && doc.data().registeredAt) ? doc.data().registeredAt : authCreatedAt;
        updateAccountMetaUI();
        if (doc.exists && !doc.data().registeredAt && authCreatedAt) {
            db.collection('users').doc(currentUser.uid).set({ registeredAt: authCreatedAt }, { merge: true }).catch(() => {});
        }

        // v0.9: samo-naprawa logowania przez nick - jeśli wpis w kolekcji "nicknames" nie powstał
        // poprawnie przy rejestracji (np. przez chwilowy błąd zapisu), odtwarzamy go przy każdym
        // udanym logowaniu e-mailem, żeby logowanie przez nick zaczęło działać bez działania usera
        if (userProfile.nickname && db) {
            const nickKey = userProfile.nickname.trim().toLowerCase();
            if (nickKey) {
                db.collection('nicknames').doc(nickKey).get().then(nDoc => {
                    if (!nDoc.exists || nDoc.data().uid !== currentUser.uid) {
                        db.collection('nicknames').doc(nickKey).set({ email: currentUser.email, uid: currentUser.uid }, { merge: true }).catch(() => {});
                    }
                }).catch(() => {});
            }
        }

        // v0.8: uzupełnij brakujący kraj rejestracji - dotyczy kont sprzed wdrożenia tej funkcji
        // oraz przypadków, gdy pierwsza próba wykrycia kraju (przy rejestracji) się nie powiodła
        if (doc.exists && !doc.data().regCountry) {
            detectRegistrationCountry().then(rc => {
                if (rc && currentUser) db.collection('users').doc(currentUser.uid).set({ regCountry: rc }, { merge: true }).catch(() => {});
            });
        }

        const guest = JSON.parse(localStorage.getItem('guestGames') || '[]');
        if (guest.length > 0) {
            const seen = new Set(cloudGames.map(g => g.name + '|' + g.date + '|' + g.price));
            guest.forEach(g => { if (!seen.has(g.name + '|' + g.date + '|' + g.price)) cloudGames.push(g); });
            localStorage.removeItem('guestGames');
            await db.collection('users').doc(currentUser.uid).set({ games: cloudGames, profile: userProfile }, { merge: true });
        }

        games = cloudGames;
        setBadge('success', 'syncCloud');
        applyProfile();
        updateUserChip();
        updateAuthUI();
    } catch (e) {
        console.error(e);
        setBadge('error', 'syncErr');
        showLibraryError(true);
    }
    setLibraryLoading(false);
    renderTable();
    renderGoals();
    updateLeaderboardEntry(); // v0.6.1: żeby ranking pojawił się już po zwykłym zalogowaniu, nie tylko po edycji gier
}

async function persistData() {
    if (currentUser && db) {
        setBadge('loading', 'syncSyncing');
        try {
            await db.collection('users').doc(currentUser.uid).set({ games, wishGoals, profile: userProfile }, { merge: true });
            setBadge('success', 'syncCloud');
            showToast('savedCloud');
            updateLeaderboardEntry(); // v0.6 - nie blokuje UI, patrz komentarz przy funkcji
        } catch (e) {
            setBadge('error', 'syncErr');
        }
    } else {
        localStorage.setItem('guestGames', JSON.stringify(games));
        localStorage.setItem('guestWishGoals', JSON.stringify(wishGoals));
        setBadge('offline', 'syncLocal');
        showToast('savedLocal');
    }
}

let authMode = 'login';
let authFormShownAt = 0; // v0.9: antyspam - znacznik czasu otwarcia formularza rejestracji

function setAuthMode(mode, silent) {
    authMode = mode;
    document.querySelectorAll('.auth-tab').forEach(b => b.classList.toggle('active', b.dataset.mode === mode));
    $('passGroup').style.display = (mode === 'reset') ? 'none' : 'flex';
    $('authPass').required = (mode !== 'reset');
    $('rememberGroup').style.display = (mode === 'login') ? 'flex' : 'none';
    if ($('nicknameGroup')) $('nicknameGroup').style.display = (mode === 'register') ? 'flex' : 'none';
    if ($('regPrivacyNote')) $('regPrivacyNote').style.display = (mode === 'register') ? 'block' : 'none';
    if ($('authNickname')) $('authNickname').required = (mode === 'register');
    if ($('authEmailLabel')) $('authEmailLabel').textContent = (mode === 'login') ? t('emailOrNickname') : t('email');
    if ($('authEmail')) $('authEmail').type = (mode === 'login') ? 'text' : 'email';
    const btnSpan = $('authSubmitBtn').querySelector('span');
    btnSpan.textContent = mode === 'login' ? t('loginBtn') : mode === 'register' ? t('registerBtn') : t('resetBtn');
    if (!silent) hideAuthMsg();
    if (mode === 'register') authFormShownAt = Date.now(); // v0.9: znacznik czasu do pułapki antyspamowej
}

function showAuthMsg(key, type) {
    const el = $('authMsg');
    el.textContent = t(key);
    el.className = 'auth-msg show ' + type;
}
function hideAuthMsg() { $('authMsg').className = 'auth-msg'; }

function mapAuthError(code) {
    switch (code) {
        case 'auth/invalid-credential':
        case 'auth/wrong-password':
        case 'auth/invalid-email': return 'authErrInvalid';
        case 'auth/email-already-in-use': return 'authErrInUse';
        case 'auth/weak-password': return 'authErrWeak';
        case 'auth/user-not-found': return 'authErrNoUser';
        default: return 'authErrGeneric';
    }
}

async function detectRegistrationCountry() {
    try {
        const res = await fetch('https://ipwho.is/');
        const geo = await res.json();
        if (geo && geo.country_code) return String(geo.country_code).slice(0, 2).toUpperCase();
    } catch (e) {}
    try { // v0.8: zapasowy dostawca geolokalizacji - ipwho.is bywa blokowane przez adblocki/rozszerzenia prywatności
        const res2 = await fetch('https://ipapi.co/json/');
        const geo2 = await res2.json();
        if (geo2 && geo2.country_code) return String(geo2.country_code).slice(0, 2).toUpperCase();
    } catch (e) {}
    return null;
}

$('authForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    hideAuthMsg();
    if (!firebaseReady) { showAuthMsg('firebaseNotConfigured', 'error'); return; }

    const rawInput = $('authEmail').value.trim();
    const pass = $('authPass').value;

    try {
        if (authMode === 'login') {
            let email = rawInput;
            if (!email.includes('@')) {
                if (!db) { showAuthMsg('authErrNoUser', 'error'); return; }
                let nickDoc;
                try {
                    nickDoc = await db.collection('nicknames').doc(rawInput.toLowerCase()).get();
                } catch (lookupErr) {
                    console.warn('nickname lookup failed:', lookupErr);
                    showAuthMsg('authErrNicknameLookup', 'error');
                    return;
                }
                if (!nickDoc.exists) { showAuthMsg('authErrNoUser', 'error'); return; }
                email = nickDoc.data().email;
            }
            const remember = $('rememberMe').checked;
            localStorage.setItem('rememberMe', remember ? '1' : '0');
            await auth.setPersistence(remember ? firebase.auth.Auth.Persistence.LOCAL : firebase.auth.Auth.Persistence.SESSION);
            await auth.signInWithEmailAndPassword(email, pass);
            showToast('loginOk');
            showView('home');
        } else if (authMode === 'register') {
            // v0.9: antyspam - honeypot (niewidoczne dla człowieka pole "website") - udajemy sukces, nic nie zapisujemy
            if ($('authWebsite') && $('authWebsite').value.trim()) {
                showToast('registerCheckEmail');
                showView('home');
                this.reset();
                return;
            }
            // v0.9: antyspam - pułapka czasowa - formularz wypełniony podejrzanie szybko na tło bota
            if (authFormShownAt && (Date.now() - authFormShownAt) < 1500) {
                showAuthMsg('authErrTooFast', 'error');
                return;
            }
            // v0.9: antyspam - podstawowy limit częstotliwości rejestracji z tej samej przeglądarki
            const lastReg = parseInt(localStorage.getItem('lastRegisterAttempt') || '0', 10);
            if (lastReg && (Date.now() - lastReg) < 60000) {
                showAuthMsg('authErrTooSoon', 'error');
                return;
            }

            const email = rawInput;
            const nick = $('authNickname') ? $('authNickname').value.trim().slice(0, 32) : '';
            if (!nick) { showAuthMsg('authErrNicknameRequired', 'error'); return; }
            const nickKey = nick.toLowerCase();
            if (db) {
                const existing = await db.collection('nicknames').doc(nickKey).get();
                if (existing.exists) { showAuthMsg('authErrNicknameTaken', 'error'); return; }
            }
            localStorage.setItem('lastRegisterAttempt', String(Date.now())); // v0.9: antyspam
            const credU = await auth.createUserWithEmailAndPassword(email, pass);
            userProfile.nickname = nick;
            try { await credU.user.updateProfile({ displayName: nick }); } catch (e) {}
            try { await credU.user.sendEmailVerification(); } catch (e) {}
            const regCountry = await detectRegistrationCountry();
            try {
                if (db) {
                    const userDoc = { profile: userProfile, registeredAt: new Date().toISOString() };
                    if (regCountry) userDoc.regCountry = regCountry;
                    await db.collection('users').doc(credU.user.uid).set(userDoc, { merge: true });
                    await db.collection('nicknames').doc(nickKey).set({ email, uid: credU.user.uid });
                }
            } catch (e) {}
            showToast('registerCheckEmail');
            showView('home');
        } else {
            await auth.sendPasswordResetEmail(rawInput);
            showAuthMsg('resetSent', 'ok');
        }
        this.reset();
    } catch (err) {
        console.warn(err.code);
        showAuthMsg(mapAuthError(err.code), 'error');
    }
});

async function doLogout() {
    if (auth) await auth.signOut();
    showToast('logoutOk');
}

function toggleChangePassword(force) {
    const panel = $('changePasswordPanel');
    const show = (force !== undefined) ? force : (panel.style.display === 'none');
    panel.style.display = show ? 'block' : 'none';
    if (!show) {
        $('changePasswordForm').reset();
        $('changePasswordMsg').className = 'auth-msg';
    }
}

const changePasswordForm = $('changePasswordForm');
changePasswordForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const msgEl = $('changePasswordMsg');
    msgEl.className = 'auth-msg';

    if (!firebaseReady || !currentUser) {
        msgEl.textContent = t('firebaseNotConfigured');
        msgEl.className = 'auth-msg show error';
        return;
    }

    const currentPass = $('currentPassword').value;
    const newPass = $('newPassword').value;
    const confirmPass = $('newPasswordConfirm').value;

    if (newPass !== confirmPass) {
        msgEl.textContent = t('passwordMismatch');
        msgEl.className = 'auth-msg show error';
        return;
    }
    if (newPass.length < 6) {
        msgEl.textContent = t('authErrWeak');
        msgEl.className = 'auth-msg show error';
        return;
    }

    try {
        const cred = firebase.auth.EmailAuthProvider.credential(currentUser.email, currentPass);
        await currentUser.reauthenticateWithCredential(cred);
        await currentUser.updatePassword(newPass);
        msgEl.textContent = t('passwordChanged');
        msgEl.className = 'auth-msg show ok';
        changePasswordForm.reset();
        showToast('passwordChanged');
    } catch (err) {
        console.warn(err.code);
        msgEl.textContent = mapAuthError(err.code);
        msgEl.className = 'auth-msg show error';
    }
});

function updateUserChip() {
    const chip = $('userChip');
    const txt = $('userChipText');
    const quickLogout = $('quickLogoutBtn');
    if (currentUser) {
        chip.className = 'user-chip logged';
        txt.textContent = (userProfile && userProfile.nickname) || currentUser.email;
        chip.title = currentUser.email;
        quickLogout.style.display = 'flex';
        quickLogout.title = t('logoutBtn');
    } else {
        chip.className = 'user-chip guest';
        txt.textContent = t('notSignedIn');
        chip.title = '';
        quickLogout.style.display = 'none';
    }
}

function updateAuthUI() {
    const logged = !!currentUser;
    $('authForms').style.display = logged ? 'none' : 'block';
    $('authTabs').style.display = logged ? 'none' : 'flex';
    $('loggedInPanel').style.display = logged ? 'flex' : 'none';
    if (logged) $('loggedEmail').textContent = (userProfile && userProfile.nickname) || currentUser.email;
    if ($('accVerifyBanner')) {
        const verified = logged && (currentUser.emailVerified || currentUser.providerData.some(p => p.providerId !== 'password'));
        $('accVerifyBanner').style.display = (logged && !verified) ? 'block' : 'none';
    }
    const navLabel = $('navAuthLabel'), navIcon = $('navAuthIcon');
    if (navLabel) navLabel.textContent = logged ? t('navAccount') : t('navAuth');
    if (navIcon) navIcon.className = logged ? 'fa-solid fa-user-gear' : 'fa-solid fa-right-to-bracket';
    updateHomeGate();
    const navRanking = $('navRankingBtn');
    if (navRanking) navRanking.style.display = logged ? '' : 'none';
    const navYearReview = $('navYearReviewBtn');
    if (navYearReview) navYearReview.style.display = logged ? '' : 'none';
    const navGoals = $('navGoalsBtn');
    if (navGoals) navGoals.style.display = logged ? '' : 'none';
    const navPlaytime = $('navPlaytimeBtn');
    if (navPlaytime) navPlaytime.style.display = logged ? '' : 'none';
    const navAdmin = $('navAdminBtn');
    if (navAdmin) navAdmin.style.display = isAdmin() ? '' : 'none';
}

if (firebaseReady) {
    auth.onAuthStateChanged(user => {
        currentUser = user;
        updateUserChip();
        updateAuthUI();
        if (user) loadCloudData();
        else loadGuestData();
    });
}

// v0.9: rozwijane kategorie w menu bocznym (accordion) - żeby menu nie było zbyt długie na pierwszy rzut oka
function toggleNavGroup(key, forceState) {
    const group = $('navGroup-' + key);
    const chevron = $('navGroupChevron-' + key);
    const btn = chevron ? chevron.closest('.nav-section-toggle') : null;
    if (!group) return;
    const expanded = (forceState !== undefined) ? forceState : group.classList.contains('collapsed');
    group.classList.toggle('collapsed', !expanded);
    if (btn) btn.setAttribute('aria-expanded', String(expanded));
    localStorage.setItem('navGroupExpanded_' + key, expanded ? '1' : '0');
    // v0.9.2: on desktop the same button doubles as a dropdown trigger (for touch/no-hover devices) -
    // only toggle that when it's a real click (forceState undefined), not during initial page-load setup
    if (forceState === undefined) {
        const wrap = btn ? btn.closest('.nav-dropdown') : null;
        if (wrap) {
            document.querySelectorAll('.nav-dropdown.dropdown-open').forEach(d => { if (d !== wrap) d.classList.remove('dropdown-open'); });
            wrap.classList.toggle('dropdown-open');
        }
    }
}

document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-dropdown')) {
        document.querySelectorAll('.nav-dropdown.dropdown-open').forEach(d => d.classList.remove('dropdown-open'));
    }
});

function initNavGroups() {
    ['library', 'tools'].forEach(key => {
        const saved = localStorage.getItem('navGroupExpanded_' + key);
        const expanded = saved === null ? true : saved === '1'; // domyślnie rozwinięte przy pierwszej wizycie
        toggleNavGroup(key, expanded);
    });
}
initNavGroups();

const form = $('addGameForm');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const price = parseFloat($('gamePrice').value);
    if (isNaN(price)) return;
    const currency = $('gameCurrency').value;
    const nameVal = $('gameName').value.trim();
    if (isSuspiciousGameName(nameVal)) { showToast('suspiciousName'); return; }
    if (isPriceTooHigh(price, currency)) { showToast('priceTooHigh'); return; }
    if (editingIndex === -1 && findDuplicateIndex(nameVal, -1) > -1) { // v0.8: wykrywanie duplikatów
        if (!confirm(t('confirmDuplicate'))) return;
    }

    const gameData = {
        name: nameVal,
        price: price,
        currency: currency,
        source: $('gameSource').value,
        date: $('purchaseDate').value,
        status: $('gameStatus').value || null,
        ownership: $('gameOwnership').value || 'digital',
        priceChf: price * rates[currency],
        // v1.2: HowLongToBeat times (hours) + how far the user actually got
        hltbMain: numOrNull($('hltbMain').value),
        hltbExtra: numOrNull($('hltbExtra').value),
        hltbComplete: numOrNull($('hltbComplete').value),
        completionLevel: $('completionLevel').value || null
    };

    if (editingIndex > -1) {
        games[editingIndex] = gameData;
        cancelEdit();
    } else {
        games.push(gameData);
        flashNewGames([gameData]); // v2.3: krótkie podświetlenie nowo dodanego wiersza
    }
    renderTable();
    form.reset();
    persistData();
});

function editGame(index) {
    toggleAddForm(true);
    const game = games[index];
    $('gameName').value = game.name;
    $('gamePrice').value = game.price;
    $('gameCurrency').value = game.currency;
    $('gameSource').value = game.source || "Steam";
    $('purchaseDate').value = game.date;
    $('gameStatus').value = game.status || '';
    $('gameOwnership').value = game.ownership || 'digital';
    $('hltbMain').value = (game.hltbMain != null) ? game.hltbMain : '';
    $('hltbExtra').value = (game.hltbExtra != null) ? game.hltbExtra : '';
    $('hltbComplete').value = (game.hltbComplete != null) ? game.hltbComplete : '';
    $('completionLevel').value = game.completionLevel || '';
    $('hltbSearchInput').value = game.name || '';

    editingIndex = index;
    $('submitBtn').querySelector('span').textContent = t('saveBtn');
    $('submitBtn').style.backgroundColor = '#e6a32e';
    $('submitBtn').style.color = '#000';
    $('cancelEditBtn').style.display = 'inline-flex';
    $('gameName').focus();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function cancelEdit() {
    editingIndex = -1;
    form.reset();
    $('submitBtn').querySelector('span').textContent = t('addBtn');
    $('submitBtn').style.backgroundColor = '';
    $('submitBtn').style.color = '';
    $('cancelEditBtn').style.display = 'none';
}

// v1.4: usuwanie bez przerywajacego confirm() - kasuje od razu,
// ale przez kilka sekund mozna cofnac przyciskiem w tooscie.
let pendingUndo = null;
let undoToastTimer = null;

function showUndoToast(message, undoFn) {
    const el = $('undoToast');
    if (!el) return;
    $('undoToastText').textContent = message;
    el.classList.add('show');
    clearTimeout(undoToastTimer);
    pendingUndo = undoFn;
    undoToastTimer = setTimeout(() => {
        el.classList.remove('show');
        pendingUndo = null;
    }, 6000);
}

function runPendingUndo() {
    if (pendingUndo) pendingUndo();
    const el = $('undoToast');
    if (el) el.classList.remove('show');
    clearTimeout(undoToastTimer);
    pendingUndo = null;
}

function deleteGame(index) {
    const removedGame = games[index];
    games.splice(index, 1);
    if (editingIndex === index) cancelEdit();
    else if (editingIndex > index) editingIndex--;
    const shifted = new Set();
    selectedGames.forEach(i => {
        if (i === index) return;
        shifted.add(i > index ? i - 1 : i);
    });
    selectedGames = shifted;
    renderTable();
    persistData();

    showUndoToast(t('itemDeleted'), () => {
        games.splice(index, 0, removedGame);
        renderTable();
        persistData();
    });
}

function toggleSelectGame(i, checked) {
    if (checked) selectedGames.add(i); else selectedGames.delete(i);
    updateBulkEditBar();
}

function toggleSelectAll(checked) {
    const cbs = document.querySelectorAll('.row-select-cb');
    selectedGames.clear();
    if (checked) cbs.forEach(cb => selectedGames.add(parseInt(cb.dataset.idx, 10)));
    renderTable();
}

function clearSelection() {
    selectedGames.clear();
    renderTable();
}

function updateBulkEditBar() {
    const bar = $('bulkEditBar');
    if (!bar) return;
    const n = selectedGames.size;
    bar.style.display = n > 0 ? 'flex' : 'none';
    const countEl = $('bulkSelectedCount');
    if (countEl) countEl.textContent = t('bulkBarSelected').replace('{n}', n);
    const selectAllCb = $('selectAllCb');
    const rowCbs = document.querySelectorAll('.row-select-cb');
    const allSelected = rowCbs.length > 0 && Array.from(rowCbs).every(cb => selectedGames.has(parseInt(cb.dataset.idx, 10)));
    if (selectAllCb) selectAllCb.checked = allSelected;
    const selectAllCbTools = $('selectAllCbTools');
    if (selectAllCbTools) selectAllCbTools.checked = allSelected;
}

function applyBulkEdit() {
    if (selectedGames.size === 0) { showToastText(t('bulkNoSelection')); return; }
    const newOwnership = $('bulkOwnershipSelect').value;
    const newSource = $('bulkSourceSelect').value;
    const newStatus = $('bulkStatusSelect') ? $('bulkStatusSelect').value : ''; // v0.9.1: masowe ustawianie statusu
    if (!newOwnership && !newSource && !newStatus) { showToastText(t('bulkNoSelection')); return; }
    let updated = 0;
    selectedGames.forEach(i => {
        if (!games[i]) return;
        if (newOwnership) games[i].ownership = newOwnership;
        if (newSource) games[i].source = newSource;
        if (newStatus) games[i].status = (newStatus === '__clear__') ? null : newStatus;
        updated++;
    });
    selectedGames.clear();
    $('bulkOwnershipSelect').value = '';
    $('bulkSourceSelect').value = '';
    if ($('bulkStatusSelect')) $('bulkStatusSelect').value = '';
    renderTable();
    persistData();
    showToastText(t('bulkApplied').replace('{n}', updated));
}

function toggleAddForm(force) {
    const body = $('addFormBody');
    const show = (force !== undefined) ? force : (body.style.display === 'none');
    body.style.display = show ? 'block' : 'none';
    if ($('addFormToggleIcon')) $('addFormToggleIcon').classList.toggle('fa-chevron-up', show);
    if ($('addFormToggleIcon')) $('addFormToggleIcon').classList.toggle('fa-chevron-down', !show);
    if ($('addFormToggleText')) $('addFormToggleText').textContent = show ? t('addFormHide') : t('addFormShow');
    if (show) setTimeout(() => $('gameName') && $('gameName').focus(), 60);
}

function toggleBulkAdd(force) {
    const panel = $('bulkAddPanel');
    const show = (force !== undefined) ? force : (panel.style.display === 'none');
    panel.style.display = show ? 'block' : 'none';
    if (show) $('bulkAddTextarea').focus();
    else $('bulkAddTextarea').value = '';
}

function showToastText(msg) {
    const el = $('toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2500);
}

// v1.6: "Smart import" - wklej dowolny tekst (historia zakupow Steam,
// potwierdzenie zamowienia z maila, cokolwiek) i sprobuj sam rozpoznac
// daty/ceny/tytuly. Steam nie ma zadnego oficjalnego eksportu historii
// zakupow (sprawdzone), wiec to jest best-effort z podgladem do poprawy
// przed dodaniem - nigdy nie dodaje nic bez przejrzenia przez uzytkownika.

const SMART_MONTHS = {
    jan:0, feb:1, mar:2, apr:3, may:4, jun:5, jul:6, aug:7, sep:8, oct:9, nov:10, dec:11
};
function smartPad(n) { return String(n).padStart(2, '0'); }

// v1.6: TOP_CURRENCIES (powyzej) nie zawiera EUR - jest uzywana gdzie indziej
// do innego celu. Do walidacji/listy w Smart Import bierzemy zamiast tego
// prawdziwa, pelna liste z formularza dodawania pojedynczej gry, zeby obie
// czesci apki zawsze zgadzaly sie co do tego, jakie waluty sa obslugiwane.
function getFullCurrencyList() {
    return [...document.querySelectorAll('#gameCurrency option')].map(o => o.value);
}

function smartTryParseDate(text) {
    let m = text.match(/\b(\d{4})-(\d{2})-(\d{2})\b/);
    if (m) return `${m[1]}-${m[2]}-${m[3]}`;

    m = text.match(/\b(\d{1,2})[\/.\-](\d{1,2})[\/.\-](\d{4})\b/);
    if (m) {
        const day = parseInt(m[1], 10), month = parseInt(m[2], 10), year = m[3];
        if (month <= 12 && day <= 31) return `${year}-${smartPad(month)}-${smartPad(day)}`;
    }

    m = text.match(/\b(\d{1,2})\s+([A-Za-z]{3,9})[,]?\s+(\d{4})\b/);
    if (m) {
        const mon = SMART_MONTHS[m[2].slice(0,3).toLowerCase()];
        if (mon !== undefined) return `${m[3]}-${smartPad(mon+1)}-${smartPad(parseInt(m[1],10))}`;
    }

    m = text.match(/\b([A-Za-z]{3,9})\s+(\d{1,2})[,]?\s+(\d{4})\b/);
    if (m) {
        const mon = SMART_MONTHS[m[1].slice(0,3).toLowerCase()];
        if (mon !== undefined) return `${m[3]}-${smartPad(mon+1)}-${smartPad(parseInt(m[2],10))}`;
    }
    return null;
}

const SMART_CURRENCY_SYMBOLS = { '$':'USD', '€':'EUR', '£':'GBP', 'Fr':'CHF', 'Fr.':'CHF' };
// 1-4 cyfry, potem opcjonalnie grupy TYSIECY (dokladnie po 3 cyfry), zawsze
// zakonczone przecinkiem/kropka i dwiema cyframi. Scisle celowo - luzniejszy
// wzorzec potrafi "przeskoczyc" przez spacje sasiedniej daty i skleic
// fantomowa cene z jej koncowki i poczatku prawdziwej ceny.
const SMART_NUM = String.raw`\d{1,4}(?:[ ,.]\d{3})*[.,]\d{2}`;

function smartNormalizeNum(str) { return parseFloat(str.replace(/\s/g, '').replace(',', '.')); }

function smartTryParsePrice(text) {
    let m = text.match(new RegExp(`([$€£])\\s?(${SMART_NUM})`));
    if (m) return { amount: smartNormalizeNum(m[2]), currency: SMART_CURRENCY_SYMBOLS[m[1]] };

    m = text.match(new RegExp(`\\b(${SMART_NUM})\\s?(USD|EUR|GBP|PLN|CHF|JPY|CAD|AUD|SEK|NOK|DKK|CZK|HUF)\\b`, 'i'));
    if (m) return { amount: smartNormalizeNum(m[1]), currency: m[2].toUpperCase() };

    m = text.match(new RegExp(`\\b(USD|EUR|GBP|PLN|CHF|JPY|CAD|AUD|SEK|NOK|DKK|CZK|HUF)\\s?(${SMART_NUM})\\b`, 'i'));
    if (m) return { amount: smartNormalizeNum(m[2]), currency: m[1].toUpperCase() };

    m = text.match(new RegExp(`(${SMART_NUM})\\s?zł`, 'i'));
    if (m) return { amount: smartNormalizeNum(m[1]), currency: 'PLN' };

    m = text.match(new RegExp(`\\b(${SMART_NUM})\\b`));
    if (m) return { amount: smartNormalizeNum(m[1]), currency: null };

    return null;
}

function smartLooksLikeNonGame(title) {
    return /wallet|top.?up|refund|gift card|subscription|dlc bundle only/i.test(title);
}

function parseSmartImport(rawText) {
    const lines = rawText.split(/\n+/).map(l => l.trim()).filter(Boolean);
    const results = [];

    for (const line of lines) {
        const date = smartTryParseDate(line);
        const priceInfo = smartTryParsePrice(line);

        let title = line;
        if (date) {
            title = title
                .replace(/\b\d{4}-\d{2}-\d{2}\b/, '')
                .replace(/\b\d{1,2}[\/.\-]\d{1,2}[\/.\-]\d{4}\b/, '')
                .replace(/\b\d{1,2}\s+[A-Za-z]{3,9}[,]?\s+\d{4}\b/, '')
                .replace(/\b[A-Za-z]{3,9}\s+\d{1,2}[,]?\s+\d{4}\b/, '');
        }
        if (priceInfo) {
            const stripNum = new RegExp(SMART_NUM, 'g');
            title = title
                .replace(/[$€£]/g, '')
                .replace(stripNum, '')
                .replace(/\b(USD|EUR|GBP|PLN|CHF|JPY|CAD|AUD|SEK|NOK|DKK|CZK|HUF|zł)\b/gi, '');
        }
        title = title.replace(/[|;,\-–—]+/g, ' ').replace(/\s{2,}/g, ' ').trim();
        if (!title || title.length < 2) continue;

        results.push({
            name: title,
            date: date || '',
            price: priceInfo ? priceInfo.amount : null,
            currency: priceInfo ? priceInfo.currency : null,
            flagged: smartLooksLikeNonGame(title)
        });
    }
    return results;
}

let smartImportRows = [];

function runSmartImportParse() {
    const raw = ($('smartImportTextarea').value || '').trim();
    if (!raw) return;
    smartImportRows = parseSmartImport(raw);
    renderSmartImportPreview();
}

function renderSmartImportPreview() {
    const wrap = $('smartImportPreviewWrap');
    const body = $('smartImportPreviewBody');
    if (!smartImportRows.length) {
        wrap.style.display = 'none';
        body.innerHTML = '';
        return;
    }
    wrap.style.display = 'block';
    body.innerHTML = smartImportRows.map((r, i) => `
        <tr class="smart-row${r.flagged ? ' smart-row-flagged' : ''}">
            <td><input type="checkbox" class="smart-cb" data-i="${i}" ${r.flagged ? '' : 'checked'}></td>
            <td><input type="text" class="smart-name" data-i="${i}" value="${escapeHtml(r.name)}"></td>
            <td><input type="number" class="smart-price" data-i="${i}" step="0.01" min="0" value="${r.price != null ? r.price : ''}" style="width:90px;"></td>
            <td>
                <select class="smart-currency" data-i="${i}" style="width:auto;">
                    ${getFullCurrencyList().map(c => `<option value="${c}" ${(r.currency || 'PLN') === c ? 'selected' : ''}>${c}</option>`).join('')}
                </select>
            </td>
            <td><input type="date" class="smart-date" data-i="${i}" value="${r.date || ''}"></td>
        </tr>
    `).join('');
}

function commitSmartImport() {
    const rows = [...document.querySelectorAll('#smartImportPreviewBody tr')];
    const todayStr = new Date().toISOString().slice(0, 10);
    let added = 0, skipped = 0, duplicates = 0;
    const newlyAdded = [];
    const existingNames = new Set(games.map(g => (g.name || '').trim().toLowerCase()));

    rows.forEach(tr => {
        const cb = tr.querySelector('.smart-cb');
        if (!cb.checked) return;

        const name = (tr.querySelector('.smart-name').value || '').trim();
        const price = parseFloat(tr.querySelector('.smart-price').value);
        let currency = tr.querySelector('.smart-currency').value;
        let date = tr.querySelector('.smart-date').value;

        if (!name || isNaN(price) || price < 0) { skipped++; return; }
        if (isSuspiciousGameName(name)) { skipped++; return; }
        const nameKey = name.toLowerCase();
        if (existingNames.has(nameKey)) { duplicates++; return; }
        if (!getFullCurrencyList().includes(currency)) currency = 'PLN';
        if (isPriceTooHigh(price, currency)) { skipped++; return; }
        if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) date = todayStr;

        const newGame = { name, price, currency, source: 'Steam', date, ownership: 'digital', priceChf: price * (rates[currency] || 1) };
        games.push(newGame);
        existingNames.add(nameKey);
        newlyAdded.push(newGame);
        added++;
    });

    if (added > 0) {
        flashNewGames(newlyAdded);
        renderTable();
        persistData();
    }

    const msg = added > 0
        ? (duplicates > 0
            ? t('bulkAddResultDup').replace('{added}', added).replace('{skipped}', skipped).replace('{dup}', duplicates)
            : t('bulkAddResult').replace('{added}', added).replace('{skipped}', skipped))
        : (duplicates > 0 ? t('bulkAddAllDup').replace('{dup}', duplicates) : t('bulkAddNone'));
    showToastText(msg);

    smartImportRows = [];
    toggleSmartImport(false);
}

function toggleSmartImport(forceState) {
    const panel = $('smartImportPanel');
    const show = forceState !== undefined ? forceState : panel.style.display === 'none';
    panel.style.display = show ? 'block' : 'none';
    if (!show) {
        $('smartImportTextarea').value = '';
        smartImportRows = [];
        renderSmartImportPreview();
    }
}

function submitBulkAdd() {
    const raw = $('bulkAddTextarea').value;
    const lines = raw.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    const todayStr = new Date().toISOString().slice(0, 10);
    let added = 0, skipped = 0, duplicates = 0; // v0.8: licznik duplikatów
    const newlyAdded = []; // v2.3: do podświetlenia świeżo dodanych wierszy
    const existingNames = new Set(games.map(g => (g.name || '').trim().toLowerCase())); // v0.8: wykrywanie duplikatów

    lines.forEach(line => {
        try {
            const parts = line.split(';').map(p => p.trim());
            const name = parts[0];
            const price = parseFloat((parts[1] || '').replace(',', '.'));
            if (!name || isNaN(price) || price < 0) { skipped++; return; }
            if (isSuspiciousGameName(name)) { skipped++; return; }
            const nameKey = name.trim().toLowerCase();
            if (existingNames.has(nameKey)) { duplicates++; return; } // v0.8: pomiń duplikat

            let currency = (parts[2] || 'PLN').trim().toUpperCase();
            if (!TOP_CURRENCIES.includes(currency)) currency = 'PLN';
            if (isPriceTooHigh(price, currency)) { skipped++; return; }

            let source = (parts[3] || 'Steam').trim();
            const knownPlatform = Object.keys(PLATFORM_META).find(p => p.toLowerCase() === source.toLowerCase());
            source = knownPlatform || (source ? 'Kluczykarnia' : 'Steam');

            let date = (parts[4] || '').trim();
            if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) date = todayStr;

            const newGame = { name, price, currency, source, date, ownership: 'digital', priceChf: price * (rates[currency] || 1) };
            games.push(newGame);
            existingNames.add(nameKey); // v0.8: uwzględnij też duplikaty w obrębie tej samej wklejonej listy
            newlyAdded.push(newGame);
            added++;
        } catch (e) {
            skipped++;
        }
    });

    if (added > 0) {
        flashNewGames(newlyAdded);
        renderTable();
        persistData();
    }

    const msg = added > 0
        ? (duplicates > 0
            ? t('bulkAddResultDup').replace('{added}', added).replace('{skipped}', skipped).replace('{dup}', duplicates)
            : t('bulkAddResult').replace('{added}', added).replace('{skipped}', skipped))
        : (duplicates > 0 ? t('bulkAddAllDup').replace('{dup}', duplicates) : t('bulkAddNone'));
    showToastText(msg);

    toggleBulkAdd(false);
}

let listHidden = false;
function toggleListHidden() {
    listHidden = !listHidden;
    $('libraryListBody').style.display = listHidden ? 'none' : 'block';
    $('hideListText').textContent = listHidden ? t('showList') : t('hideList');
    $('hideListIcon').className = listHidden ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash';
}

let listExpanded = false;
function toggleListExpand() {
    listExpanded = !listExpanded;
    $('tableWrapper').classList.toggle('expanded', listExpanded);
    $('expandCollapseText').textContent = listExpanded ? t('collapseList') : t('expandList');
    $('expandCollapseIcon').className = listExpanded
        ? 'fa-solid fa-down-left-and-up-right-to-center'
        : 'fa-solid fa-up-right-and-down-left-from-center';
}

function getDisplayCurrency() { // v0.8: waluta, w której użytkownik ogląda wartość biblioteki - używana też do filtrów cenowych
    const el = $('totalCurrency');
    return el && el.value ? el.value : 'CHF';
}

function updateFilterCurrencyLabels(cur) {
    const currency = cur || getDisplayCurrency();
    const minLbl = $('priceMinFilterLbl');
    const maxLbl = $('priceMaxFilterLbl');
    if (minLbl) minLbl.textContent = `${t('priceMin')} (${currency})`;
    if (maxLbl) maxLbl.textContent = `${t('priceMax')} (${currency})`;
}

// v0.9: "Kondycja Backlogu" - wskaźnik 0-100 pokazujący, jak dobrze radzisz się z ogrywaniem swojej biblioteki
function computeBacklogHealth() {
    if (games.length === 0) return { state: 'empty' };
    const completed = games.filter(g => g.status === 'completed').length;
    const notCompleted = games.filter(g => g.status === 'not_completed').length;
    const tracked = completed + notCompleted;
    if (tracked === 0) return { state: 'untracked' };
    // v0.9.1: poprawka - ukończenie liczone względem CAŁEJ biblioteki, nie tylko oznaczonych gier.
    // Wcześniej oznaczenie 4 z 369 gier jako ukończonych dawało 100% (4/4) i sztucznie wysoki wynik,
    // mimo że 365 gier w bibliotece wciąż nie miało żadnego statusu.
    const completionRatio = completed / games.length;
    const trackingRatio = games.filter(g => g.status).length / games.length;
    const score = Math.round((completionRatio * 0.7 + trackingRatio * 0.3) * 100);
    let grade;
    if (score >= 80) grade = 'Exemplary';
    else if (score >= 60) grade = 'Good';
    else if (score >= 40) grade = 'Average';
    else if (score >= 20) grade = 'Growing';
    else grade = 'Overwhelmed';
    return { state: 'scored', score, grade };
}

function renderBacklogHealth() {
    const ring = $('healthRing'), numEl = $('healthScoreNum'), gradeEl = $('healthGrade'), msgEl = $('healthMessage');
    if (!ring) return;
    const circumference = 301.6;
    const result = computeBacklogHealth();

    if (result.state === 'empty') {
        ring.style.strokeDashoffset = circumference;
        ring.style.stroke = 'var(--border)';
        numEl.textContent = '-';
        gradeEl.textContent = t('healthLabel');
        msgEl.textContent = t('healthEmptyMsg');
        return;
    }
    if (result.state === 'untracked') {
        ring.style.strokeDashoffset = circumference * 0.5;
        ring.style.stroke = 'var(--text-dim)';
        numEl.textContent = '?';
        gradeEl.textContent = t('healthGradeUnknown');
        msgEl.textContent = t('healthNoStatusMsg');
        return;
    }
    const { score, grade } = result;
    const colors = { Exemplary: '#57c98b', Good: 'var(--steam-blue)', Average: 'var(--key-purple)', Growing: '#e2a13d', Overwhelmed: 'var(--err)' };
    ring.style.strokeDashoffset = String(circumference * (1 - score / 100));
    ring.style.stroke = colors[grade] || 'var(--steam-blue)';
    numEl.textContent = score;
    gradeEl.textContent = t('healthGrade' + grade);
    msgEl.textContent = t('healthMsg' + grade);
}

function toggleAdvFilters(force) {
    const panel = $('advFiltersPanel');
    const show = (force !== undefined) ? force : (panel.style.display !== 'flex');
    panel.style.display = show ? 'flex' : 'none';
    if ($('advFiltersIcon')) $('advFiltersIcon').classList.toggle('fa-chevron-up', show);
}

function resetAdvancedFilters() {
    if ($('priceMinFilter')) $('priceMinFilter').value = '';
    if ($('priceMaxFilter')) $('priceMaxFilter').value = '';
    if ($('dateFromFilter')) $('dateFromFilter').value = '';
    if ($('dateToFilter')) $('dateToFilter').value = '';
    renderTable();
}

function setSort(key) {
    if (sortKey === key) sortDir = -sortDir;
    else { sortKey = key; sortDir = 1; }
    renderTable();
}

function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

let flashTimer = null;
function flashNewGames(newGames) {
    newGames.forEach(g => { g.__flash = true; });
    clearTimeout(flashTimer);
    flashTimer = setTimeout(() => {
        newGames.forEach(g => { delete g.__flash; });
        renderTable();
    }, 2200);
}

function focusAddGameForm() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => { const el = $('gameName'); if (el) el.focus(); }, 350);
}

// v0.7: Cele oszczędnościowe (savings goals)
function renderGoals() {
    const list = $('goalsList');
    if (!list) return;
    list.innerHTML = '';
    $('goalsEmptyMsg').style.display = wishGoals.length === 0 ? 'block' : 'none';
    wishGoals.forEach((goal, idx) => {
        const target = goal.targetAmount || 0;
        const saved = goal.savedAmount || 0;
        const pct = target > 0 ? Math.min(100, Math.round((saved / target) * 100)) : 0;
        const reached = saved >= target && target > 0;
        const remaining = Math.max(0, target - saved);
        const card = document.createElement('div');
        card.className = 'goal-card';
        card.innerHTML = `
            <div class="goal-card-head">
                <span class="goal-card-title">${escapeHtml(goal.name)}</span>
                <span class="goal-card-amounts">${saved.toFixed(2)} / ${target.toFixed(2)} ${goal.currency}</span>
            </div>
            <div class="goal-progress-track"><div class="goal-progress-fill ${reached ? 'reached' : ''}" style="width:${pct}%;"></div></div>
            <div class="goal-card-footer">
                <span style="font-size:13px; color:${reached ? '#5cb85c' : 'var(--text-dim)'};">
                    ${reached ? `🎉 ${t('goalReached')}` : `${t('goalRemaining')}: ${remaining.toFixed(2)} ${goal.currency} (${pct}%)`}
                </span>
                <div class="goal-card-actions">
                    <input type="number" step="0.01" min="0" value="${saved}" id="goalSavedInput-${idx}" aria-label="${t('goalSavedAmount')}">
                    <button type="button" class="btn-tool" style="width:auto; padding:0 10px;" onclick="updateGoalSaved(${idx})"><span>${t('goalUpdateSaved')}</span></button>
                    <button type="button" class="del" onclick="deleteGoal(${idx})" aria-label="Delete"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>`;
        list.appendChild(card);
    });
}

function updateGoalSaved(idx) {
    const input = $('goalSavedInput-' + idx);
    if (!input || !wishGoals[idx]) return;
    const val = parseFloat(input.value);
    if (isNaN(val) || val < 0) return;
    wishGoals[idx].savedAmount = val;
    renderGoals();
    persistData();
}

function deleteGoal(idx) {
    if (confirm(t('goalDeleteConfirm'))) {
        wishGoals.splice(idx, 1);
        renderGoals();
        persistData();
    }
}

const goalForm = document.getElementById('addGoalForm');
if (goalForm) {
    goalForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = $('goalName').value.trim();
        const targetAmount = parseFloat($('goalTargetAmount').value);
        const currency = $('goalCurrency').value;
        const savedAmount = parseFloat($('goalSavedAmount').value) || 0;
        if (!name || isNaN(targetAmount) || targetAmount <= 0) return;
        if (isSuspiciousGameName(name)) { showToast('suspiciousName'); return; }
        wishGoals.push({ name, targetAmount, currency, savedAmount });
        renderGoals();
        persistData();
        goalForm.reset();
        $('goalSavedAmount').value = 0;
    });
}

// v0.8: Osiągnięcia - obliczane na bieżąco na podstawie biblioteki gier i celów oszczędnościowych
const ACHIEVEMENTS = [
    { id: 'first_game', icon: 'fa-flag-checkered', titleKey: 'achFirstGameT', descKey: 'achFirstGameD', kind: 'bool',
        check: (g) => g.length >= 1 },
    { id: 'collector', icon: 'fa-box-open', titleKey: 'achCollectorT', descKey: 'achCollectorD', kind: 'tier', tiers: [10, 50, 100, 250, 500, 1000],
        valueFn: (g) => g.length },
    { id: 'diversity', icon: 'fa-shuffle', titleKey: 'achDiversityT', descKey: 'achDiversityD', kind: 'tier', tiers: [3, 5, 7],
        valueFn: (g) => new Set(g.map(x => x.source || 'Steam')).size },
    { id: 'finisher', icon: 'fa-trophy', titleKey: 'achFinisherT', descKey: 'achFinisherD', kind: 'tier', tiers: [5, 20, 50, 100],
        valueFn: (g) => g.filter(x => x.status === 'completed').length },
    { id: 'physical', icon: 'fa-compact-disc', titleKey: 'achPhysicalT', descKey: 'achPhysicalD', kind: 'tier', tiers: [5, 20, 50],
        valueFn: (g) => g.filter(x => x.ownership === 'physical').length },
    { id: 'investor', icon: 'fa-sack-dollar', titleKey: 'achInvestorT', descKey: 'achInvestorD', kind: 'tier', tiers: [1000, 5000, 10000, 25000, 50000], unit: 'CHF',
        valueFn: (g) => g.reduce((s, x) => s + (x.priceChf || 0), 0) },
    { id: 'currencies', icon: 'fa-coins', titleKey: 'achCurrenciesT', descKey: 'achCurrenciesD', kind: 'tier', tiers: [2, 4, 6],
        valueFn: (g) => new Set(g.map(x => (x.currency || 'PLN').toUpperCase())).size },
    { id: 'veteran', icon: 'fa-hourglass-half', titleKey: 'achVeteranT', descKey: 'achVeteranD', kind: 'tier', tiers: [1, 3, 5], unit: 'years',
        valueFn: (g) => {
            if (g.length === 0) return 0;
            const dates = g.map(x => new Date(x.date)).filter(d => !isNaN(d));
            if (dates.length === 0) return 0;
            const earliest = new Date(Math.min(...dates));
            return (Date.now() - earliest.getTime()) / (365.25 * 24 * 3600 * 1000);
        } },
    { id: 'balanced', icon: 'fa-scale-balanced', titleKey: 'achBalancedT', descKey: 'achBalancedD', kind: 'bool',
        check: (g) => g.some(x => x.ownership === 'physical') && g.some(x => (x.ownership || 'digital') === 'digital') },
    { id: 'dream', icon: 'fa-piggy-bank', titleKey: 'achDreamT', descKey: 'achDreamD', kind: 'bool',
        check: (g, goals) => (goals || []).some(x => (x.savedAmount || 0) >= (x.targetAmount || 0) && (x.targetAmount || 0) > 0) },
];

function renderAchievements() {
    const list = $('achievementsList');
    if (!list) return;
    list.innerHTML = '';
    ACHIEVEMENTS.forEach(def => {
        let unlocked, progressPct, statusText, levelText = '', descTarget = '';
        if (def.kind === 'bool') {
            unlocked = !!def.check(games, wishGoals);
            progressPct = unlocked ? 100 : 0;
            statusText = unlocked ? t('achUnlocked') : t('achLocked');
        } else {
            const value = def.valueFn(games);
            let tierIdx = -1;
            def.tiers.forEach((th, i) => { if (value >= th) tierIdx = i; });
            unlocked = tierIdx >= 0;
            const maxed = tierIdx === def.tiers.length - 1;
            const nextTarget = maxed ? def.tiers[tierIdx] : def.tiers[tierIdx + 1];
            progressPct = maxed ? 100 : Math.min(100, Math.round((value / nextTarget) * 100));
            const fmt = (n) => {
                if (def.unit === 'CHF') return Math.round(n).toLocaleString(currentLang) + ' CHF';
                if (def.unit === 'years') return n.toFixed(1);
                return Math.round(n);
            };
            statusText = maxed ? t('achMaxLevel') : `${fmt(value)} / ${fmt(nextTarget)}`;
            levelText = t('achLevel').replace('{level}', Math.max(0, tierIdx + 1)).replace('{max}', def.tiers.length);
            const lastTier = def.tiers[def.tiers.length - 1];
            descTarget = def.unit === 'CHF' ? lastTier.toLocaleString(currentLang) + ' CHF' : lastTier;
        }
        const descText = t(def.descKey).replace('{target}', descTarget);
        const card = document.createElement('div');
        card.className = 'goal-card';
        card.style.opacity = unlocked ? '1' : '0.55';
        card.innerHTML = `
            <div class="goal-card-head">
                <span class="goal-card-title"><i class="fa-solid ${def.icon}" style="margin-right:8px; color:${unlocked ? 'var(--steam-blue)' : 'var(--text-dim)'};"></i>${t(def.titleKey)}</span>
                <span class="goal-card-amounts">${unlocked ? '✅' : '🔒'}</span>
            </div>
            <p style="font-size:13px; color:var(--text-dim); margin:4px 0 8px;">${escapeHtml(descText)}</p>
            ${def.kind === 'tier' ? `<div class="goal-progress-track"><div class="goal-progress-fill ${progressPct >= 100 ? 'reached' : ''}" style="width:${progressPct}%;"></div></div>` : ''}
            <div class="goal-card-footer">
                <span style="font-size:12px; color:${unlocked ? '#5cb85c' : 'var(--text-dim)'};">${statusText}${levelText ? ' · ' + levelText : ''}</span>
            </div>`;
        list.appendChild(card);
    });
}

// v0.8: "Co dziś zagrać?" - losowanie gry z backlogu (gry nieoznaczone jako ukończone)
let rouletteSpinTimer = null;
let rouletteLastPickIdx = -1;

function getBacklogPool() {
    const platform = $('roulettePlatformFilter') ? $('roulettePlatformFilter').value : 'all';
    return games
        .map((g, i) => ({ g, i }))
        .filter(({ g }) => g.status === 'not_completed') // v0.8.1: ruletka losuje tylko z gier jawnie oznaczonych jako "Nieukończona" - pomija ukończone, bez końca, "nie zagram" i te bez ustawionego statusu
        .filter(({ g }) => platform === 'all' || (g.source || 'Steam') === platform);
}

function rollBacklogRoulette() {
    clearInterval(rouletteSpinTimer);
    const result = $('rouletteResult');
    if (!result) return;

    if (games.length === 0) {
        result.innerHTML = `<div class="empty-state"><i class="fa-solid fa-gamepad"></i>${t('rouletteEmptyLib')}</div>`;
        return;
    }

    const pool = getBacklogPool();
    if (pool.length === 0) {
        result.innerHTML = `<div class="empty-state"><i class="fa-solid fa-champagne-glasses"></i>${t('rouletteAllDone')}</div>`;
        return;
    }

    // v0.8: unikaj wylosowania dokładnie tej samej gry drugi raz z rzędu, jeśli pula pozwala na inny wybór
    let pick;
    if (pool.length === 1) {
        pick = pool[0];
    } else {
        do { pick = pool[Math.floor(Math.random() * pool.length)]; } while (pick.i === rouletteLastPickIdx);
    }
    rouletteLastPickIdx = pick.i;

    result.innerHTML = `
        <div class="goal-card" id="rouletteCard" style="text-align:center;">
            <div id="rouletteSpinName" style="font-family:var(--font-display); font-size:22px; font-weight:600; color:var(--text-white); min-height:32px;">...</div>
        </div>`;

    // v0.8: krótka animacja "losowania" - kilka losowych nazw z puli, zanim wylądujemy na finalnym wyniku
    const spinEl = $('rouletteSpinName');
    let spins = 0;
    const maxSpins = Math.min(14, pool.length * 3);
    rouletteSpinTimer = setInterval(() => {
        const r = pool[Math.floor(Math.random() * pool.length)];
        if (spinEl) spinEl.textContent = r.g.name;
        spins++;
        if (spins >= maxSpins) {
            clearInterval(rouletteSpinTimer);
            renderRouletteFinalCard(pick.g);
        }
    }, 90);
}

function renderRouletteFinalCard(g) {
    const result = $('rouletteResult');
    if (!result) return;
    const meta = platformMeta(g.source || 'Steam');
    const ownIcon = (g.ownership === 'physical') ? 'fa-solid fa-compact-disc' : 'fa-solid fa-cloud';
    const ownLabel = (g.ownership === 'physical') ? t('ownPhysical') : t('ownDigital');
    result.innerHTML = `
        <div class="goal-card" id="rouletteCard" style="text-align:center;">
            <div style="font-size:32px; margin-bottom:6px;">🎲</div>
            <div style="font-family:var(--font-display); font-size:26px; font-weight:600; color:var(--text-white); margin-bottom:10px;">${escapeHtml(g.name)}</div>
            <div style="display:flex; justify-content:center; gap:16px; flex-wrap:wrap; font-size:13px; color:var(--text-dim); margin-bottom:16px;">
                <span class="source-txt ${meta.cls}">${meta.label()}</span>
                <span><i class="${ownIcon}"></i> ${ownLabel}</span>
                <span><i class="fa-solid fa-calendar"></i> ${g.date}</span>
                <span style="color:var(--steam-blue);">${g.priceChf.toFixed(2)} CHF</span>
            </div>
            <button type="button" class="btn-tool" style="width:auto; margin:0 auto;" onclick="rollBacklogRoulette()"><i class="fa-solid fa-shuffle"></i> ${t('rouletteRerollBtn')}</button>
        </div>`;
}


function hashStringToHue(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) { hash = (hash * 31 + str.charCodeAt(i)) >>> 0; }
    return hash % 360;
}

let _shelfMeasureCanvas = null;
function measureShelfTextWidth(text, fontPx) {
    if (!_shelfMeasureCanvas) _shelfMeasureCanvas = document.createElement('canvas');
    const ctx = _shelfMeasureCanvas.getContext('2d');
    ctx.font = `600 ${fontPx}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif`;
    return ctx.measureText(text).width;
}

// Zamiast obcinać za długie tytuły wielokropkiem, zmniejszamy czcionkę tak, żeby cały tytuł się zmieścił
function fitShelfTitles() {
    document.querySelectorAll('#shelfWrap .game-box-title').forEach(titleEl => {
        const wrapEl = titleEl.parentElement;
        const available = wrapEl.clientHeight - 8;
        if (available <= 0) return; // widok jeszcze niewidoczny - dopasujemy przy następnym renderze
        const text = titleEl.textContent;
        const refSize = 12;
        const measured = measureShelfTextWidth(text, refSize) || 1;
        let fontSize = Math.min(11.5, (refSize * available) / measured);
        fontSize = Math.max(fontSize, 5.5); // minimalny czytelny rozmiar zamiast ucinania "…"
        titleEl.style.fontSize = fontSize.toFixed(1) + 'px';
        titleEl.style.width = available + 'px';
    });
}

let shelfResizeTimer = null;
window.addEventListener('resize', () => {
    clearTimeout(shelfResizeTimer);
    shelfResizeTimer = setTimeout(() => {
        const shelfView = $('view-shelf');
        if (shelfView && shelfView.classList.contains('active')) fitShelfTitles();
    }, 200);
});

function renderShelf() {
    const wrap = $('shelfWrap');
    if (!wrap) return;
    const ownFilter = $('shelfOwnershipFilter') ? $('shelfOwnershipFilter').value : 'all';
    const srcFilter = $('shelfSourceFilter') ? $('shelfSourceFilter').value : 'all';
    const filtered = games.filter(g => {
        const matchesOwnership = (ownFilter === 'all') || ((g.ownership || 'digital') === ownFilter);
        const matchesSource = (srcFilter === 'all') || ((g.source || 'Steam') === srcFilter);
        return matchesOwnership && matchesSource;
    }).sort((a, b) => a.name.localeCompare(b.name));

    wrap.innerHTML = '';
    $('shelfEmptyMsg').style.display = filtered.length === 0 ? 'block' : 'none';
    wrap.style.display = filtered.length === 0 ? 'none' : 'flex';

    filtered.forEach(g => {
        const srcRaw = g.source || 'Steam';
        const displaySrc = shelfDisplaySource(srcRaw); // v0.7.3: na półce Kluczykarnia wygląda jak Steam
        const meta = platformMeta(displaySrc);
        const platformColors = {
            Steam: '#2a6ea6', PlayStation: '#1e3d6b', Xbox: '#1f6b2c', Nintendo: '#a12e2e',
            GOG: '#5b3a8a', 'Epic Games': '#2b2b2b'
        };
        const baseColor = platformColors[displaySrc] || '#2a6ea6';
        const hue = hashStringToHue(g.name + srcRaw);
        const own = g.ownership || 'digital';
        const ownIcon = own === 'physical' ? 'fa-solid fa-compact-disc' : 'fa-solid fa-cloud';
        const box = document.createElement('div');
        box.className = 'game-box';
        box.style.background = `linear-gradient(155deg, ${baseColor} 0%, hsl(${hue}, 45%, 28%) 100%)`;
        box.title = g.name;
        box.innerHTML = `
            <div class="game-box-top">${escapeHtml(meta.label())}</div>
            <div class="game-box-title-wrap"><div class="game-box-title">${escapeHtml(g.name)}</div></div>
            <div class="game-box-own" title="${own === 'physical' ? t('ownPhysical') : t('ownDigital')}"><i class="${ownIcon}"></i></div>`;
        wrap.appendChild(box);
    });

    fitShelfTitles();
}

const PLATFORM_META = {
    'Steam': { cls: 'src-steam', label: () => t('steam') },
    'PlayStation': { cls: 'src-playstation', label: () => 'PlayStation' },
    'Xbox': { cls: 'src-xbox', label: () => 'Xbox' },
    'Nintendo': { cls: 'src-nintendo', label: () => 'Nintendo' },
    'GOG': { cls: 'src-gog', label: () => 'GOG' },
    'Epic Games': { cls: 'src-epic', label: () => 'Epic Games' },
    'Kluczykarnia': { cls: 'src-key', label: () => t('keyStore') }
};
function platformMeta(source) {
    return PLATFORM_META[source] || PLATFORM_META['Kluczykarnia'];
}
// v0.7.3: Kluczykarnia/Key Store zostaje pełnoprawną, osobną kategorią źródła wszędzie
// (formularz, filtry, edycja masowa, statystyki) - podmiana na "Steam" dotyczy WYŁĄCZNIE
// wyglądu na wirtualnej półce (okładka pudełka), nie zmienia rzeczywistych danych gry.
function shelfDisplaySource(source) {
    return (source === 'Kluczykarnia') ? 'Steam' : (source || 'Steam');
}

function renderTable() {
    const tbody = document.querySelector('#gamesTable tbody');
    tbody.innerHTML = '';
    globalTotalChf = 0;
    renderBacklogHealth(); // v0.9: aktualizuj wskaźnik kondycji backlogu przy każdej zmianie biblioteki

    ['name','source','ownership','date','price','priceChf'].forEach(k => {
        const el = $('si-' + k);
        if (el) el.textContent = (sortKey === k) ? (sortDir === 1 ? '▲' : '▼') : '';
    });

    const q = ($('searchInput').value || '').toLowerCase();
    const srcFilter = $('sourceFilter') ? $('sourceFilter').value : 'all'; // v2.1: filtr źródła
    const ownFilter = $('ownershipFilter') ? $('ownershipFilter').value : 'all'; // v0.7: filtr formy gry
    const priceMinF = $('priceMinFilter') ? parseFloat($('priceMinFilter').value) : NaN; // v0.8: filtry zaawansowane
    const priceMaxF = $('priceMaxFilter') ? parseFloat($('priceMaxFilter').value) : NaN;
    const dateFromF = $('dateFromFilter') ? $('dateFromFilter').value : '';
    const dateToF = $('dateToFilter') ? $('dateToFilter').value : '';
    const filterCur = getDisplayCurrency(); // v0.8: filtry ceny liczone w walucie wybranej przez użytkownika, nie na sztywno w CHF
    const toChf = (v) => (filterCur === 'CHF') ? v : v * (rates[filterCur] || 1);
    updateFilterCurrencyLabels(filterCur);
    const indexed = games.map((g, i) => ({ g, i }));
    indexed.forEach(({ g }) => globalTotalChf += g.priceChf);

    let visible = indexed.filter(({ g }) => {
        const matchesSearch = g.name.toLowerCase().includes(q);
        const matchesSource = (srcFilter === 'all') || ((g.source || 'Steam') === srcFilter);
        const matchesOwnership = (ownFilter === 'all') || ((g.ownership || 'digital') === ownFilter);
        const matchesPriceMin = isNaN(priceMinF) || g.priceChf >= toChf(priceMinF);
        const matchesPriceMax = isNaN(priceMaxF) || g.priceChf <= toChf(priceMaxF);
        const matchesDateFrom = !dateFromF || (g.date && g.date >= dateFromF);
        const matchesDateTo = !dateToF || (g.date && g.date <= dateToF);
        return matchesSearch && matchesSource && matchesOwnership && matchesPriceMin && matchesPriceMax && matchesDateFrom && matchesDateTo;
    });
    visible.sort((a, b) => {
        let va = a.g[sortKey], vb = b.g[sortKey];
        if (sortKey === 'source') { va = va || 'Steam'; vb = vb || 'Steam'; }
        if (sortKey === 'ownership') { va = va || 'digital'; vb = vb || 'digital'; }
        if (typeof va === 'string') return va.localeCompare(vb) * sortDir;
        return (va - vb) * sortDir;
    });

    if (games.length === 0) {
        tbody.innerHTML = `<tr><td colspan="9"><div class="empty-state"><i class="fa-solid fa-gamepad"></i>${t('emptyLib')}</div></td></tr>`;
    } else if (visible.length === 0) {
        tbody.innerHTML = `<tr><td colspan="9"><div class="empty-state"><i class="fa-solid fa-magnifying-glass"></i>${t('noResults')}</div></td></tr>`;
    } else {
        visible.forEach(({ g, i }, rowNum) => {
            const srcRaw = g.source || "Steam";
            const meta = platformMeta(srcRaw);
            const srcClass = meta.cls;
            const srcDisplay = meta.label();
            const own = g.ownership || 'digital';
            const ownIcon = own === 'physical' ? 'fa-solid fa-compact-disc' : 'fa-solid fa-cloud';
            const ownLabel = own === 'physical' ? t('ownPhysical') : t('ownDigital');
            const tr = document.createElement('tr');
            if (g.__flash) tr.className = 'row-new'; // v2.3: podświetlenie nowo dodanej gry
            tr.innerHTML = `
                <td style="text-align:left;"><input type="checkbox" class="row-select-cb" data-idx="${i}" onchange="toggleSelectGame(${i}, this.checked)" ${selectedGames.has(i) ? 'checked' : ''}></td>
                <td style="color:var(--text-dim);">${rowNum + 1}</td>
                <td class="name-cell" style="color:var(--text-white);">${escapeHtml(g.name)}${g.status === 'completed' ? ` <span class="status-badge status-completed" title="${t('statusCompleted')}">✅</span>` : ''}${g.status === 'not_completed' ? ` <span class="status-badge status-not-completed" title="${t('statusNotCompleted')}">⏳</span>` : ''}${g.status === 'endless' ? ` <span class="status-badge status-endless" title="${t('statusEndless')}">♾️</span>` : ''}${g.status === 'wont_play' ? ` <span class="status-badge status-wont-play" title="${t('statusWontPlay')}">🚫</span>` : ''}</td>
                <td data-label="${t('colPlatform')}"><span class="source-txt ${srcClass}">${srcDisplay}</span></td>
                <td data-label="${t('fldOwnership')}"><span class="own-chip" data-own="${own}"><i class="${ownIcon}"></i>${ownLabel}</span></td>
                <td data-label="${t('purchaseDate')}">${g.date}</td>
                <td data-label="${t('colOrigPrice')}">${g.price.toFixed(2)} <span style="font-size:10px; color:var(--text-dim);">${g.currency}</span></td>
                <td data-label="${t('colChfPrice')}" style="color:var(--steam-blue);">${g.priceChf.toFixed(2)} <span style="font-size:10px;">CHF</span></td>
                <td class="action-icons">
                    <button class="edit" onclick="editGame(${i})" aria-label="Edit"><i class="fa-solid fa-pen"></i></button>
                    <button class="del" onclick="deleteGame(${i})" aria-label="Delete"><i class="fa-solid fa-trash"></i></button>
                </td>`;
            tbody.appendChild(tr);
        });
    }

    updateBulkEditBar();
    updateTotalDisplay();
    updateStats();
    updateCharts();
    renderShelf();
}

function updateTotalDisplay() {
    const currency = $('totalCurrency').value;
    let total = globalTotalChf;
    if (currency !== 'CHF' && rates[currency]) {
        total = globalTotalChf / rates[currency];
    }
    $('totalAmount').textContent = total.toLocaleString(currentLang, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function onTotalCurrencyChange() {
    localStorage.setItem('totalCurrencyManual', $('totalCurrency').value);
    updateTotalDisplay();
    updateFilterCurrencyLabels(); // v0.8: filtry ceny w bibliotece podążają za wybraną walutą
    renderTable();
    updateStats(); // v1.1: licznik wydatków w miesiącu podąża za wybraną walutą
}

async function initCurrencyPreference() {
    const manual = localStorage.getItem('totalCurrencyManual');
    $('totalCurrency').value = manual || 'EUR';
    updateTotalDisplay();
}

function updateStats() {
    const now = new Date();
    const ym = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    const y = String(now.getFullYear());
    $('statTotal').textContent = games.length;
    $('statMonth').textContent = games.filter(g => (g.date || '').startsWith(ym)).length;
    $('statYear').textContent = games.filter(g => (g.date || '').startsWith(y)).length;

    const prevDate = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const prevYm = `${prevDate.getFullYear()}-${String(prevDate.getMonth() + 1).padStart(2, '0')}`;
    const spentThisMonth = games.filter(g => (g.date || '').startsWith(ym)).reduce((s, g) => s + (g.priceChf || 0), 0);
    const spentPrevMonth = games.filter(g => (g.date || '').startsWith(prevYm)).reduce((s, g) => s + (g.priceChf || 0), 0);
    const trendEl = $('statMonthTrend');
    if (trendEl) {
        if (spentPrevMonth > 0) {
            const pct = Math.round(((spentThisMonth - spentPrevMonth) / spentPrevMonth) * 100);
            const up = pct >= 0;
            trendEl.style.color = up ? 'var(--warn, #e6a32e)' : '#5cb85c';
            trendEl.innerHTML = `<i class="fa-solid fa-arrow-${up ? 'up' : 'down'}"></i> ${up ? '+' : ''}${pct}% ${t('vsLastMonth')}`;
        } else {
            trendEl.textContent = '';
        }
    }

    // v1.1: licznik wydatków w bieżącym miesiącu z porównaniem do poprzedniego miesiąca
    const spentCurrency = ($('totalCurrency') && $('totalCurrency').value) || 'EUR';
    const rate = rates[spentCurrency] || 1;
    const spentThisMonthDisplay = spentThisMonth / rate;
    const spentEl = $('statSpentMonth');
    if (spentEl) {
        spentEl.textContent = spentThisMonthDisplay.toLocaleString(currentLang, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' ' + spentCurrency;
    }
    const spentTrendEl = $('statSpentMonthTrend');
    if (spentTrendEl) {
        if (spentPrevMonth > 0) {
            const pct2 = Math.round(((spentThisMonth - spentPrevMonth) / spentPrevMonth) * 100);
            const up2 = pct2 >= 0;
            spentTrendEl.style.color = up2 ? 'var(--warn, #e6a32e)' : '#5cb85c';
            spentTrendEl.innerHTML = `<i class="fa-solid fa-arrow-${up2 ? 'up' : 'down'}"></i> ${up2 ? '+' : ''}${pct2}% ${t('vsLastMonth')}`;
        } else if (spentThisMonth > 0) {
            spentTrendEl.textContent = '';
        } else {
            spentTrendEl.textContent = '';
        }
    }
}

Chart.defaults.color = '#677887';
Chart.defaults.font.family = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif';

// v0.7: uniwersalna wtyczka rysująca wartość + procent bezpośrednio na wykresie kołowym/pierścieniowym
const percentLabelPlugin = {
    id: 'percentLabels',
    afterDatasetsDraw(chart) {
        const { ctx } = chart;
        const meta = chart.getDatasetMeta(0);
        if (!meta || !meta.data || !meta.data.length) return;
        const data = chart.data.datasets[0].data;
        const total = data.reduce((s, v) => s + v, 0);
        if (total <= 0) return;
        ctx.save();
        meta.data.forEach((arc, i) => {
            const value = data[i];
            if (!value) return;
            const pct = Math.round((value / total) * 100);
            const pos = arc.tooltipPosition();
            ctx.font = '600 12px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif';
            ctx.fillStyle = '#ffffff';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.shadowColor = 'rgba(0,0,0,0.55)';
            ctx.shadowBlur = 4;
            ctx.fillText(`${value} (${pct}%)`, pos.x, pos.y);
        });
        ctx.restore();
    }
};

function periodKey(dateStr, gran) {
    const d = new Date(dateStr);
    if (isNaN(d)) return null;
    if (gran === 'year') return String(d.getFullYear());
    if (gran === 'quarter') return `Q${Math.floor(d.getMonth() / 3) + 1} ${d.getFullYear()}`;
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
}
function periodSortValue(key, gran) {
    if (gran === 'quarter') {
        const [q, y] = key.split(' ');
        return parseInt(y) * 10 + parseInt(q[1]);
    }
    return key;
}

function niceStepSize(maxValue) {
    if (maxValue <= 10) return 1;
    const roughStep = maxValue / 8;
    const magnitude = Math.pow(10, Math.floor(Math.log10(roughStep)));
    const normalized = roughStep / magnitude;
    let niceNormalized;
    if (normalized <= 1) niceNormalized = 1;
    else if (normalized <= 2) niceNormalized = 2;
    else if (normalized <= 5) niceNormalized = 5;
    else niceNormalized = 10;
    return niceNormalized * magnitude;
}

function updateCharts() {
    if (typeof Chart === 'undefined') return;
    const type = $('chartType').value;
    const gran = $('chartGranularity').value;
    $('chartGranularity').style.display = (type === 'sources' || type === 'ownership') ? 'none' : '';

    if (mainChart) mainChart.destroy();
    const ctx = $('mainChart');
    const gridColor = cssVar('--border');

    if (type === 'sources') {
        const counts = {};
        games.forEach(g => {
            const src = g.source || 'Steam';
            counts[src] = (counts[src] || 0) + 1;
        });
        const srcKeys = Object.keys(counts);
        mainChart = new Chart(ctx, {
            type: 'pie',
            plugins: [percentLabelPlugin],
            data: {
                labels: srcKeys.map(k => platformMeta(k).label()),
                datasets: [{
                    data: srcKeys.map(k => counts[k]),
                    backgroundColor: srcKeys.map(k => {
                        const colors = { Steam: cssVar('--steam-blue'), PlayStation: '#4da3ff', Xbox: '#4caf50', Nintendo: '#ff6b6b', GOG: '#b98af0', 'Epic Games': '#c9c9c9', Kluczykarnia: cssVar('--key-purple') };
                        return colors[k] || cssVar('--key-purple');
                    }),
                    borderWidth: 1, borderColor: cssVar('--bg-panel')
                }]
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'right', labels: { color: cssVar('--text-main'), boxWidth: 12 } },
                    title: { display: true, text: t('chartSources'), color: cssVar('--text-light') }
                }
            }
        });
        return;
    }

    if (type === 'ownership') {
        const ownCounts = { digital: 0, physical: 0 };
        games.forEach(g => { ownCounts[g.ownership || 'digital']++; });
        mainChart = new Chart(ctx, {
            type: 'doughnut',
            plugins: [percentLabelPlugin],
            data: {
                labels: [t('ownDigital'), t('ownPhysical')],
                datasets: [{
                    data: [ownCounts.digital, ownCounts.physical],
                    backgroundColor: [cssVar('--steam-blue'), cssVar('--key-purple')],
                    borderWidth: 1, borderColor: cssVar('--bg-panel')
                }]
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'right', labels: { color: cssVar('--text-main'), boxWidth: 12 } },
                    title: { display: true, text: t('chartOptOwnership'), color: cssVar('--text-light') }
                }
            }
        });
        return;
    }

    const counts = {};
    games.forEach(g => {
        const k = periodKey(g.date, gran);
        if (k) counts[k] = (counts[k] || 0) + 1;
    });
    const labels = Object.keys(counts).sort((a, b) => {
        const va = periodSortValue(a, gran), vb = periodSortValue(b, gran);
        return va < vb ? -1 : va > vb ? 1 : 0;
    });

    if (type === 'purchases') {
        const maxCount = Math.max(1, ...labels.map(l => counts[l]));
        mainChart = new Chart(ctx, {
            type: 'bar',
            data: { labels, datasets: [{ data: labels.map(l => counts[l]), backgroundColor: 'rgba(51,191,161,0.55)', hoverBackgroundColor: cssVar('--steam-blue'), borderRadius: 3 }] },
            options: {
                maintainAspectRatio: false,
                scales: {
                    y: { beginAtZero: true, ticks: { stepSize: niceStepSize(maxCount), precision: 0 }, grid: { color: gridColor }, border: { display: false } },
                    x: { grid: { display: false }, border: { display: false } }
                },
                plugins: { legend: { display: false }, title: { display: true, text: `${t('chartPurchases')} / ${t('gran' + gran.charAt(0).toUpperCase() + gran.slice(1))}`, color: cssVar('--text-light') } }
            }
        });
    } else {
        let running = 0;
        const cumData = labels.map(l => (running += counts[l]));
        const maxTotal = Math.max(1, ...cumData);
        mainChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels,
                datasets: [{
                    data: cumData,
                    borderColor: cssVar('--steam-blue'),
                    backgroundColor: 'rgba(51,191,161,0.15)',
                    fill: true,
                    tension: 0.25,
                    pointBackgroundColor: cssVar('--steam-blue'),
                    pointRadius: 3
                }]
            },
            options: {
                maintainAspectRatio: false,
                scales: {
                    y: { beginAtZero: true, ticks: { stepSize: niceStepSize(maxTotal), precision: 0 }, grid: { color: gridColor }, border: { display: false } },
                    x: { grid: { display: false }, border: { display: false } }
                },
                plugins: { legend: { display: false }, title: { display: true, text: t('chartCumulative'), color: cssVar('--text-light') } }
            }
        });
    }
}

function exportCSV() {
    const rows = [['Name', 'Source', 'Ownership', 'Date', 'Price', 'Currency', 'PriceCHF', 'Status']];
    games.forEach(g => rows.push([g.name, g.source || 'Steam', g.ownership || 'digital', g.date, g.price, g.currency, g.priceChf.toFixed(2), g.status || '']));
    const csv = rows.map(r => r.map(v => `"${String(v).replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'games-library.csv';
    a.click();
    URL.revokeObjectURL(a.href);
}

function updateCookieConsentTexts() {
    $('cookieConsentText').textContent = t('cookieConsentText');
    $('cookieMoreInfoBtn').textContent = t('cookieMoreInfo');
    $('cookieDeclineBtn').textContent = t('cookieDeclineBtn');
    $('cookieAcceptBtn').textContent = t('cookieAcceptBtn');
}
function setCookieConsent(accepted) {
    localStorage.setItem('cookieConsent', accepted ? 'accepted' : 'declined');
    $('cookieConsent').style.display = 'none';
}
function initCookieConsent() {
    updateCookieConsentTexts();
    if (!localStorage.getItem('cookieConsent')) {
        $('cookieConsent').style.display = 'block';
    }
}

window.addEventListener('scroll', () => {
    $('backToTopBtn').style.display = (window.scrollY > 400) ? 'flex' : 'none';
});

function cssVar(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function applyTheme(theme, persist) {
    theme = (theme === 'light') ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    const icon = document.querySelector('#themeToggleBtn i');
    if (icon) icon.className = (theme === 'light') ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    const ps = document.getElementById('profTheme');
    if (ps) ps.value = theme;
    if (typeof Chart !== 'undefined') Chart.defaults.color = cssVar('--text-dim');
    if (persist) localStorage.setItem('theme', theme);
    try { if (typeof updateCharts === 'function') updateCharts(); } catch (e) {}
}
function toggleTheme() {
    const next = (document.documentElement.getAttribute('data-theme') === 'light') ? 'dark' : 'light';
    applyTheme(next, true);
    if (currentUser) { userProfile.theme = next; writeUserDoc(); }
}
function initTheme() { applyTheme(localStorage.getItem('theme') || 'dark', false); }

function updateHomeGate() {
    const logged = !!currentUser;
    const verified = logged && (currentUser.emailVerified || currentUser.providerData.some(p => p.providerId !== 'password'));
    if (banGateActive) {
        if ($('homeApp')) $('homeApp').style.display = 'none';
        if ($('homeLanding')) $('homeLanding').style.display = 'none';
        if ($('verifyGate')) $('verifyGate').style.display = 'none';
        if ($('banGate')) $('banGate').style.display = 'block';
        return;
    }
    if ($('banGate')) $('banGate').style.display = 'none';
    if (document.getElementById('homeApp')) document.getElementById('homeApp').style.display = (logged && verified) ? 'block' : 'none';
    if (document.getElementById('homeLanding')) document.getElementById('homeLanding').style.display = logged ? 'none' : 'block';
    if (document.getElementById('verifyGate')) document.getElementById('verifyGate').style.display = (logged && !verified) ? 'block' : 'none';
}

function showBanGate(reason, until) {
    banGateActive = true;
    if ($('banGateReason')) $('banGateReason').textContent = reason || t('banGateNoReason');
    if ($('banGateUntil')) $('banGateUntil').textContent = until ? (t('banGateUntilPrefix') + ' ' + until.toLocaleString(currentLang)) : t('banGatePermanent');
    updateHomeGate();
}

function dismissBanGate() {
    banGateActive = false;
    updateHomeGate();
    showView('home');
}

async function resendVerificationEmail() {
    if (!currentUser) return;
    try {
        await currentUser.sendEmailVerification();
        showToast('verifyEmailSent');
    } catch (e) {
        showToast('authErrGeneric');
    }
}

async function recheckVerification() {
    if (!currentUser) return;
    try {
        await currentUser.reload();
        currentUser = auth.currentUser;
        if (currentUser && currentUser.emailVerified) {
            showToast('verifyNowVerified');
            updateHomeGate();
            updateAuthUI();
        } else {
            showToast('verifyStillNotVerified');
        }
    } catch (e) {}
}

function goRegister() { showView('auth'); setAuthMode('register'); }
function goLogin() { showView('auth'); setAuthMode('login'); }

async function writeUserDoc() {
    if (!(currentUser && db)) return;
    try { await db.collection('users').doc(currentUser.uid).set({ games: games, profile: userProfile }, { merge: true }); }
    catch (e) { console.warn('writeUserDoc', e); }
}

function applyProfile() {
    const nick = (userProfile && userProfile.nickname) ? userProfile.nickname : '';
    if ($('profNickname')) $('profNickname').value = nick;
    if ($('profCurrency')) $('profCurrency').value = (userProfile && userProfile.currency) || $('totalCurrency').value;
    const th = (userProfile && userProfile.theme) ? userProfile.theme : (localStorage.getItem('theme') || 'dark');
    applyTheme(th, false);
    localStorage.setItem('theme', th);
    if ($('loggedEmail') && currentUser) $('loggedEmail').textContent = nick || currentUser.email;
    if (userProfile && userProfile.currency) {
        $('totalCurrency').value = userProfile.currency;
        localStorage.setItem('totalCurrencyManual', userProfile.currency);
        updateTotalDisplay();
    }
}

function updateAccountMetaUI() { // v0.9: pokazuje datę i godzinę rejestracji konta w panelu "Twoje konto"
    const el = $('accRegisteredAt');
    if (!el) return;
    if (myRegisteredAt) {
        const d = new Date(myRegisteredAt);
        el.textContent = isNaN(d) ? '-' : d.toLocaleString(currentLang, { dateStyle: 'medium', timeStyle: 'short' });
    } else {
        el.textContent = '-';
    }
}

(function () {
    const pf = document.getElementById('profileForm');
    if (!pf) return;
    pf.addEventListener('submit', async function (e) {
        e.preventDefault();
        const msg = $('profileMsg'); msg.className = 'auth-msg';
        userProfile.nickname = $('profNickname').value.trim().slice(0, 32);
        userProfile.currency = $('profCurrency').value;
        userProfile.theme = $('profTheme').value;
        $('totalCurrency').value = userProfile.currency;
        localStorage.setItem('totalCurrencyManual', userProfile.currency);
        updateTotalDisplay();
        applyTheme(userProfile.theme, true);
        try {
            if (currentUser && currentUser.updateProfile) await currentUser.updateProfile({ displayName: userProfile.nickname });
            await writeUserDoc();
            if ($('loggedEmail')) $('loggedEmail').textContent = userProfile.nickname || (currentUser ? currentUser.email : '');
            updateUserChip();
            msg.textContent = t('profileSaved'); msg.className = 'auth-msg show ok';
            showToastText(t('profileSaved'));
        } catch (err) {
            console.warn(err);
            msg.textContent = t('authErrGeneric'); msg.className = 'auth-msg show error';
        }
    });
})();

function exportMyData() {
    const data = {
        app: 'Backlog Wallet',
        exportedAt: new Date().toISOString(),
        account: currentUser ? { email: currentUser.email, uid: currentUser.uid } : null,
        profile: userProfile,
        games: games,
        wishGoals: wishGoals
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'backlog-wallet-backup.json';
    a.click();
    URL.revokeObjectURL(a.href);
}

async function handleImportFile(event) { // v0.9: import biblioteki z pliku JSON (np. kopii zapasowej z "Pobierz moje dane")
    const file = event.target.files && event.target.files[0];
    event.target.value = ''; // pozwól wybrać ten sam plik ponownie w przyszłości
    if (!file) return;
    let data;
    try {
        const text = await file.text();
        data = JSON.parse(text);
    } catch (e) {
        showToastText(t('importInvalidFile'));
        return;
    }
    if (!data || !Array.isArray(data.games)) {
        showToastText(t('importInvalidFile'));
        return;
    }

    const existingNames = new Set(games.map(g => (g.name || '').trim().toLowerCase()));
    let added = 0, skipped = 0, duplicates = 0;

    data.games.forEach(g => {
        try {
            if (!g || typeof g.name !== 'string' || !g.name.trim()) { skipped++; return; }
            const name = g.name.trim().slice(0, 100);
            const price = parseFloat(g.price);
            if (isNaN(price) || price < 0 || isPriceTooHigh(price, (g.currency || 'EUR').toString().toUpperCase())) { skipped++; return; }
            if (isSuspiciousGameName(name)) { skipped++; return; }
            const nameKey = name.toLowerCase();
            if (existingNames.has(nameKey)) { duplicates++; return; }

            let currency = (g.currency || 'EUR').toString().toUpperCase();
            if (!TOP_CURRENCIES.includes(currency)) currency = 'EUR';
            const source = PLATFORM_META[g.source] ? g.source : 'Steam';
            const ownership = g.ownership === 'physical' ? 'physical' : 'digital';
            const validStatuses = ['completed', 'not_completed', 'endless', 'wont_play'];
            const status = validStatuses.includes(g.status) ? g.status : null;
            const date = (typeof g.date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(g.date)) ? g.date : new Date().toISOString().slice(0, 10);
            const priceChf = price * (rates[currency] || 1);

            games.push({ name, price, currency, source, date, ownership, status, priceChf });
            existingNames.add(nameKey);
            added++;
        } catch (e) { skipped++; }
    });

    if (added > 0) { renderTable(); persistData(); }
    const msg = t('importResult').replace('{added}', added).replace('{skipped}', skipped).replace('{dup}', duplicates);
    showToastText(msg);
}

async function deleteMyAccount() {
    if (!currentUser) return;
    if (!confirm(t('deleteAccountConfirm'))) return;
    try { exportMyData(); } catch (e) {} // v0.9: automatyczna kopia zapasowa danych przed usunięciem konta
    try {
        if (db) await db.collection('users').doc(currentUser.uid).delete();
        await currentUser.delete();
        games = [];
        userProfile = { nickname: '', currency: '', theme: '' };
        showToastText(t('accountDeleted'));
        showView('home');
    } catch (err) {
        console.warn(err.code);
        if (err.code === 'auth/requires-recent-login') alert(t('deleteNeedsRecentLogin'));
        else alert(t('authErrGeneric'));
    }
}

function onPriceSort(v) {
    if (v === 'desc') { sortKey = 'price'; sortDir = -1; }
    else if (v === 'asc') { sortKey = 'price'; sortDir = 1; }
    else if (v === 'dateNewest') { sortKey = 'date'; sortDir = -1; }
    else if (v === 'dateOldest') { sortKey = 'date'; sortDir = 1; }
    else if (v === 'nameAsc') { sortKey = 'name'; sortDir = 1; }
    else if (v === 'nameDesc') { sortKey = 'name'; sortDir = -1; }
    renderTable();
}

async function updateLeaderboardEntry() {
    if (!db || !currentUser) return;
    try {
        const totalEur = rates.EUR ? (globalTotalChf / rates.EUR) : 0;
        await db.collection('leaderboard').doc(currentUser.uid).set({
            nickname: (userProfile && userProfile.nickname) ? userProfile.nickname.slice(0, 40) : '',
            totalEur: Math.round(totalEur * 100) / 100,
            gamesCount: games.length,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
    } catch (e) { }
}

function initYearReview() {
    const years = Array.from(new Set(games.map(g => (g.date || '').slice(0, 4)).filter(Boolean))).sort().reverse();
    const currentYear = String(new Date().getFullYear());
    if (!years.includes(currentYear)) years.unshift(currentYear);

    const sel = $('yearReviewSelect');
    const prevMain = sel.value;
    sel.innerHTML = years.map(y => `<option value="${y}">${y}</option>`).join('');
    if (years.includes(prevMain)) sel.value = prevMain;

    // v1.2: second dropdown so a year can be read against another one
    const cmp = $('yearCompareSelect');
    if (cmp) {
        const prevCmp = cmp.value;
        cmp.innerHTML = `<option value="">${t('yrCompareNone')}</option>` +
            years.map(y => `<option value="${y}">${y}</option>`).join('');
        if (years.includes(prevCmp)) cmp.value = prevCmp;
        else if (!prevCmp && years.length > 1) {
            // default to the year right before the selected one, when it exists
            const idx = years.indexOf(sel.value);
            if (idx > -1 && years[idx + 1]) cmp.value = years[idx + 1];
        }
    }
    renderYearReview();
}

// v1.2: one place that computes every headline number for a given year,
// so the card and the comparison can never drift apart
function yearStats(year) {
    const yGames = games.filter(g => (g.date || '').startsWith(year));
    const totalChf = yGames.reduce((s, g) => s + (g.priceChf || 0), 0);

    const platformCounts = {};
    yGames.forEach(g => { const p = g.source || 'Steam'; platformCounts[p] = (platformCounts[p] || 0) + 1; });
    const topPlatform = Object.entries(platformCounts).sort((a, b) => b[1] - a[1])[0] || null;

    const monthCounts = {};
    yGames.forEach(g => { const m = (g.date || '').slice(0, 7); if (m) monthCounts[m] = (monthCounts[m] || 0) + 1; });
    const topMonth = Object.entries(monthCounts).sort((a, b) => b[1] - a[1])[0] || null;

    const priciest = yGames.slice().sort((a, b) => (b.priceChf || 0) - (a.priceChf || 0))[0] || null;
    const completed = yGames.filter(g => g.status === 'completed').length;
    const hours = yGames.reduce((s, g) => s + (g.hltbMain || 0), 0);

    return {
        year, games: yGames, count: yGames.length, totalChf,
        avgChf: yGames.length ? totalChf / yGames.length : 0,
        topPlatform, topMonth, priciest, completed, hours,
        physical: yGames.filter(g => g.ownership === 'physical').length
    };
}

function monthLabel(monthKey) {
    const monthNames = {
        en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    };
    if (!monthKey) return '-';
    const mIdx = parseInt(monthKey.slice(5, 7), 10) - 1;
    const names = monthNames[currentLang] || monthNames.en;
    return names[mIdx] || monthKey;
}

function renderYearReview() {
    const year = $('yearReviewSelect').value || String(new Date().getFullYear());
    const A = yearStats(year);
    $('yrYear').textContent = year;

    if (A.count === 0) {
        $('yrEmptyMsg').style.display = 'block';
        $('yrTotal').innerHTML = '0.00 <small>CHF</small>';
        $('yrGames').textContent = '0';
        $('yrTopPlatform').textContent = '-';
        $('yrTopMonth').textContent = '-';
        $('yrExpensive').innerHTML = '';
    } else {
        $('yrEmptyMsg').style.display = 'none';
        $('yrTotal').innerHTML = `${A.totalChf.toFixed(2)} <small>CHF</small>`;
        $('yrGames').textContent = A.count;
        $('yrTopPlatform').textContent = A.topPlatform ? platformMeta(A.topPlatform[0]).label() : '-';
        $('yrTopMonth').textContent = A.topMonth ? `${monthLabel(A.topMonth[0])} (${A.topMonth[1]})` : '-';
        $('yrExpensive').innerHTML = A.priciest
            ? `${t('yrMostExpensive')}: <strong style="color:var(--text-white);">${escapeHtml(A.priciest.name)}</strong> (${(A.priciest.priceChf || 0).toFixed(2)} CHF)`
            : '';
    }

    renderYearComparison(A);
}

// v1.2: side-by-side read of two years, with the direction of every change spelled out
function renderYearComparison(A) {
    const wrap = $('yrCompareWrap');
    if (!wrap) return;
    const cmpSel = $('yearCompareSelect');
    const otherYear = cmpSel ? cmpSel.value : '';

    if (!otherYear || otherYear === A.year) { wrap.style.display = 'none'; return; }
    wrap.style.display = 'block';

    const B = yearStats(otherYear);

    // spending going up is the "bad" direction for a wallet, so the arrow colours follow that
    const rows = [
        { key: 'yrTotalSpent', a: A.totalChf.toFixed(2) + ' CHF', b: B.totalChf.toFixed(2) + ' CHF', va: A.totalChf, vb: B.totalChf, money: true },
        { key: 'yrGamesLabel', a: A.count, b: B.count, va: A.count, vb: B.count },
        { key: 'yrAvgPrice', a: A.avgChf.toFixed(2) + ' CHF', b: B.avgChf.toFixed(2) + ' CHF', va: A.avgChf, vb: B.avgChf, money: true },
        { key: 'yrCompletedLabel', a: A.completed, b: B.completed, va: A.completed, vb: B.completed, invert: true },
        { key: 'yrPlatformLabel', a: A.topPlatform ? platformMeta(A.topPlatform[0]).label() : '-', b: B.topPlatform ? platformMeta(B.topPlatform[0]).label() : '-' },
        { key: 'yrMonthLabel', a: A.topMonth ? monthLabel(A.topMonth[0]) : '-', b: B.topMonth ? monthLabel(B.topMonth[0]) : '-' }
    ];

    const col = (stats, side) => `
        <h4>${stats.year}</h4>
        ${rows.map(r => `
            <div class="yr-cmp-line">
                <span>${escapeHtml(t(r.key))}</span>
                <span>${escapeHtml(String(side === 'a' ? r.a : r.b))}</span>
            </div>`).join('')}`;

    $('yrCmpColA').innerHTML = col(A, 'a');
    $('yrCmpColB').innerHTML = col(B, 'b');

    // verdict block: the handful of deltas that actually mean something
    const deltaHtml = (labelKey, va, vb, suffix, invert) => {
        if (vb === 0 && va === 0) return '';
        const diff = va - vb;
        const pct = vb === 0 ? null : (diff / vb) * 100;
        let cls = 'flat';
        if (Math.abs(diff) > 0.005) cls = (diff > 0) ? (invert ? 'down' : 'up') : (invert ? 'up' : 'down');
        const arrow = Math.abs(diff) <= 0.005 ? '=' : (diff > 0 ? '▲' : '▼');
        const pctTxt = pct === null ? '' : ` (${pct > 0 ? '+' : ''}${pct.toFixed(0)}%)`;
        return `<div class="yr-cmp-line">
            <span>${escapeHtml(t(labelKey))}</span>
            <span class="yr-delta ${cls}">${arrow} ${Math.abs(diff).toFixed(suffix === ' CHF' ? 2 : 0)}${suffix}${pctTxt}</span>
        </div>`;
    };

    $('yrVerdict').innerHTML =
        `<div style="font-weight:600; color:var(--text-white); margin-bottom:6px;">${escapeHtml(t('yrVsTitle').replace('{a}', A.year).replace('{b}', B.year))}</div>` +
        deltaHtml('yrTotalSpent', A.totalChf, B.totalChf, ' CHF', false) +
        deltaHtml('yrGamesLabel', A.count, B.count, '', false) +
        deltaHtml('yrAvgPrice', A.avgChf, B.avgChf, ' CHF', false) +
        deltaHtml('yrCompletedLabel', A.completed, B.completed, '', true);
}

let yearsChartInstance = null;
function showAllYearsChart() {
    const wrap = $('yrAllYearsWrap');
    if (!wrap) return;
    const open = wrap.style.display !== 'block';
    wrap.style.display = open ? 'block' : 'none';
    if (!open) return;

    const years = Array.from(new Set(games.map(g => (g.date || '').slice(0, 4)).filter(Boolean))).sort();
    const totals = years.map(y => games.filter(g => (g.date || '').startsWith(y))
        .reduce((s, g) => s + (g.priceChf || 0), 0));
    const counts = years.map(y => games.filter(g => (g.date || '').startsWith(y)).length);

    const css = getComputedStyle(document.documentElement);
    const coin = css.getPropertyValue('--coin').trim() || '#f0b429';
    const accent = css.getPropertyValue('--steam-blue').trim() || '#8b7bff';
    const dim = css.getPropertyValue('--text-dim').trim() || '#78829a';
    const border = css.getPropertyValue('--border').trim() || '#232a38';

    if (yearsChartInstance) yearsChartInstance.destroy();
    const ctx = $('yearsChart').getContext('2d');
    yearsChartInstance = new Chart(ctx, {
        data: {
            labels: years,
            datasets: [
                { type: 'bar', label: t('yrTotalSpent') + ' (CHF)', data: totals, backgroundColor: coin, borderRadius: 4, yAxisID: 'y' },
                { type: 'line', label: t('yrGamesLabel'), data: counts, borderColor: accent, backgroundColor: accent, tension: 0.3, yAxisID: 'y1' }
            ]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { labels: { color: dim } } },
            scales: {
                x: { ticks: { color: dim }, grid: { color: border } },
                y: { position: 'left', ticks: { color: dim }, grid: { color: border } },
                y1: { position: 'right', ticks: { color: dim, precision: 0 }, grid: { drawOnChartArea: false } }
            }
        }
    });
}

function downloadYearReviewImage() {
    const year = $('yrYear').textContent;
    const w = 800, h = 1000;
    const canvas = document.createElement('canvas');
    canvas.width = w; canvas.height = h;
    const ctx = canvas.getContext('2d');

    const grad = ctx.createLinearGradient(0, 0, w * 0.3, h);
    grad.addColorStop(0, '#0f3d33');
    grad.addColorStop(0.7, '#0b0f14');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    ctx.textAlign = 'center';
    ctx.strokeStyle = '#33bfa1';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);
    ctx.strokeRect(60, 60, 160, 36);
    ctx.setLineDash([]);
    ctx.fillStyle = '#33bfa1';
    ctx.font = '600 14px monospace';
    ctx.fillText('BACKLOG WALLET', 140, 83);

    ctx.fillStyle = '#8a96a3';
    ctx.font = '500 26px Georgia, serif';
    ctx.fillText(year, w / 2, 170);

    ctx.fillStyle = '#8a96a3';
    ctx.font = '11px monospace';
    ctx.fillText(t('yrTotalSpent').toUpperCase(), w / 2, 220);

    ctx.fillStyle = '#ffffff';
    ctx.font = '600 72px Georgia, serif';
    ctx.fillText($('yrTotal').textContent.replace('CHF', '').trim(), w / 2, 310);
    ctx.fillStyle = '#8a96a3';
    ctx.font = '20px Georgia, serif';
    ctx.fillText('CHF', w / 2, 345);

    const stats = [
        [$('yrGames').textContent, t('yrGamesLabel')],
        [$('yrTopPlatform').textContent, t('yrPlatformLabel')],
        [$('yrTopMonth').textContent, t('yrMonthLabel')]
    ];
    const colW = w / 3;
    stats.forEach((s, i) => {
        const cx = colW * i + colW / 2;
        ctx.fillStyle = '#33bfa1';
        ctx.font = '600 24px monospace';
        ctx.fillText(s[0], cx, 430);
        ctx.fillStyle = '#8a96a3';
        ctx.font = '10px monospace';
        ctx.fillText(String(s[1]).toUpperCase(), cx, 452);
    });

    ctx.strokeStyle = 'rgba(255,255,255,0.15)';
    ctx.setLineDash([3, 5]);
    ctx.beginPath(); ctx.moveTo(80, 500); ctx.lineTo(w - 80, 500); ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = '#dce3e9';
    ctx.font = '14px Arial';
    const highlightText = $('yrExpensive').textContent || '';
    wrapCanvasText(ctx, highlightText, w / 2, 540, w - 160, 20);

    ctx.fillStyle = '#6e7982';
    ctx.font = '11px monospace';
    ctx.fillText('backlogwallet.com', w / 2, h - 40);

    const link = document.createElement('a');
    link.download = `backlog-wallet-${year}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
}


/* ============================================================
   v1.2 — Playtime module (HowLongToBeat)

   HowLongToBeat publishes no official API. Every working client is a
   scraper that needs a token lifted from the site's own JS bundle, and
   howlongtobeat.com sends no CORS headers, so a page served from
   GitHub Pages cannot call it directly from the browser.

   So this module works two ways:
     1. Manual entry — always available, no dependencies.
     2. A proxy URL the user supplies themselves (Cloudflare Worker,
        Vercel function, self-hosted service). We append the encoded
        title and expect JSON back.
   ============================================================ */

const HLTB_PROXY_KEY = 'hltbProxyUrl';

function numOrNull(v) {
    if (v === '' || v === null || v === undefined) return null;
    const n = parseFloat(v);
    return (isNaN(n) || n < 0) ? null : n;
}

function fmtHours(h) {
    if (!h) return '0';
    if (h < 10) return h.toFixed(1).replace(/\.0$/, '');
    return Math.round(h).toString();
}

function hltbProxyUrl() {
    return (localStorage.getItem(HLTB_PROXY_KEY) || '').trim();
}

function saveHltbProxy() {
    const val = ($('hltbProxyUrl').value || '').trim();
    // https wszędzie, ale http dopuszczone dla lokalnego proxy na tej maszynie
    const localOk = /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?\//i.test(val);
    if (val && !/^https:\/\//i.test(val) && !localOk) {
        $('ptProxyStatus').textContent = t('ptProxyInvalid');
        return;
    }
    localStorage.setItem(HLTB_PROXY_KEY, val);
    $('ptProxyStatus').textContent = val ? t('ptProxySaved') : t('ptProxyCleared');
    updateHltbFormNote();
}

async function testHltbProxy() {
    const status = $('ptProxyStatus');
    const url = ($('hltbProxyUrl').value || '').trim();
    if (!url) { status.textContent = t('ptProxyNone'); return; }
    status.textContent = t('ptProxyTesting');
    try {
        const res = await hltbFetch(url, 'Hollow Knight');
        status.textContent = res
            ? t('ptProxyOk').replace('{main}', fmtHours(res.main)).replace('{extra}', fmtHours(res.extra)).replace('{complete}', fmtHours(res.complete))
            : t('ptProxyEmpty');
    } catch (e) {
        status.textContent = t('ptProxyFail') + ' ' + (e && e.message ? e.message : '');
    }
}

/* Accepts a few common response shapes so most community wrappers
   work without the user having to reshape their output. */
function normalizeHltbResponse(data) {
    if (!data) return null;
    let g = data;
    if (Array.isArray(data)) g = data[0];
    else if (Array.isArray(data.data)) g = data.data[0];
    else if (Array.isArray(data.results)) g = data.results[0];
    if (!g) return null;

    // values arrive as plain numbers, as "52h 39m", or as seconds - handle all three
    const toHours = (raw) => {
        if (typeof raw === 'number') return raw;
        const str = String(raw).trim();
        const hm = str.match(/(\d+(?:\.\d+)?)\s*h(?:ours?)?(?:\s*(\d+)\s*m)?/i);
        if (hm) return parseFloat(hm[1]) + (hm[2] ? parseInt(hm[2], 10) / 60 : 0);
        const mOnly = str.match(/^(\d+)\s*m(?:in)?/i);
        if (mOnly) return parseInt(mOnly[1], 10) / 60;
        const plain = parseFloat(str.replace(/[^\d.]/g, ''));
        return isNaN(plain) ? null : plain;
    };
    const pick = (...keys) => {
        for (const k of keys) {
            if (g[k] !== undefined && g[k] !== null && g[k] !== '') {
                const n = toHours(g[k]);
                if (n !== null && !isNaN(n) && n > 0) return Math.round(n * 10) / 10;
            }
        }
        return null;
    };
    const out = {
        name: g.name || g.title || g.game_name || '',
        main: pick('gameplayMain', 'mainStory', 'main', 'comp_main', 'main_story'),
        extra: pick('gameplayMainExtra', 'mainStoryWithExtras', 'extra', 'comp_plus', 'main_extra'),
        complete: pick('gameplayCompletionist', 'completionist', 'complete', 'comp_100')
    };
    // some sources report seconds rather than hours
    ['main', 'extra', 'complete'].forEach(k => {
        if (out[k] && out[k] > 1000) out[k] = Math.round((out[k] / 3600) * 10) / 10;
    });
    return (out.main || out.extra || out.complete) ? out : null;
}

async function hltbFetch(proxy, title) {
    const url = proxy.includes('{q}')
        ? proxy.replace('{q}', encodeURIComponent(title))
        : proxy + encodeURIComponent(title);
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 12000);
    try {
        const r = await fetch(url, { signal: controller.signal, headers: { 'Accept': 'application/json' } });
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return normalizeHltbResponse(await r.json());
    } finally {
        clearTimeout(timer);
    }
}

async function hltbLookupForForm() {
    const title = ($('hltbSearchInput').value || $('gameName').value || '').trim();
    const note = $('hltbFormNote');
    if (!title) { note.textContent = t('hltbNeedTitle'); return; }

    const proxy = hltbProxyUrl();
    if (!proxy) {
        note.textContent = t('hltbNoProxy');
        showView('playtime');
        return;
    }
    note.textContent = t('hltbSearching');
    try {
        const res = await hltbFetch(proxy, title);
        if (!res) { note.textContent = t('hltbNotFound').replace('{title}', title); return; }
        if (res.main) $('hltbMain').value = res.main;
        if (res.extra) $('hltbExtra').value = res.extra;
        if (res.complete) $('hltbComplete').value = res.complete;
        note.textContent = t('hltbFound').replace('{title}', res.name || title);
    } catch (e) {
        note.textContent = t('hltbFetchFail') + ' ' + (e && e.message ? e.message : '');
    }
}

function updateHltbFormNote() {
    const note = $('hltbFormNote');
    if (note) note.textContent = hltbProxyUrl() ? t('hltbFormNoteProxy') : t('hltbFormNote');
}

/* v1.3.1: jeden punkt prawdy o tym, jak daleko user zaszedl.
   Jesli nie ustawil poziomu, a gra ma status "ukonczona", przyjmujemy
   przejscie glownego watku - inaczej ukonczone gry nie liczyly sie wcale. */
function effectiveLevel(g) {
    if (g.completionLevel) return g.completionLevel;
    if (g.status === 'completed') return 'main';
    return null;
}

function isInferredLevel(g) {
    return !g.completionLevel && g.status === 'completed';
}

/* The hours a game still owes you, given how far you say you got. */
function hltbRemaining(g, tier) {
    const target = tier === 'main' ? g.hltbMain : (tier === 'extra' ? g.hltbExtra : g.hltbComplete);
    if (!target) return 0;
    const lvl = effectiveLevel(g);
    if (lvl === 'complete') return 0;
    if (lvl === 'extra') return Math.max(0, target - (g.hltbExtra || g.hltbMain || 0));
    if (lvl === 'main') return Math.max(0, target - (g.hltbMain || 0));
    return target;
}

// v1.3: uzupelnianie czasow dla calej biblioteki naraz.
// Leci po jednej grze, bo lokalne proxy i tak obsluguje zapytania szeregowo,
// a przy okazji nie zasypujemy HowLongToBeat.
let bulkHltbRunning = false;
let bulkHltbStop = false;

function stopBulkHltb() {
    bulkHltbStop = true;
    $('ptBulkStatus').textContent = t('ptBulkStopping');
}

function hasHltbTimes(g) {
    return !!(g.hltbMain || g.hltbExtra || g.hltbComplete);
}

async function bulkFetchHltb() {
    if (bulkHltbRunning) return;

    const proxy = hltbProxyUrl();
    if (!proxy) {
        $('ptBulkSummary').style.display = 'block';
        $('ptBulkSummary').textContent = t('ptBulkNeedProxy');
        return;
    }

    const overwrite = $('ptBulkOverwrite').checked;
    const targets = games
        .map((g, i) => ({ g: g, i: i }))
        .filter(x => overwrite || !hasHltbTimes(x.g));

    if (!targets.length) {
        $('ptBulkSummary').style.display = 'block';
        $('ptBulkSummary').textContent = t('ptBulkNoneMissing');
        return;
    }

    bulkHltbRunning = true;
    bulkHltbStop = false;
    $('ptBulkStartBtn').disabled = true;
    $('ptBulkStopBtn').style.display = 'inline-flex';
    $('ptBulkProgressWrap').style.display = 'block';
    $('ptBulkSummary').style.display = 'none';

    let ok = 0, miss = 0, err = 0, done = 0;

    for (const item of targets) {
        if (bulkHltbStop) break;

        done++;
        $('ptBulkBar').style.width = ((done / targets.length) * 100).toFixed(1) + '%';
        $('ptBulkStatus').textContent = t('ptBulkProgress')
            .replace('{i}', done).replace('{n}', targets.length)
            .replace('{name}', item.g.name);

        try {
            const res = await hltbFetch(proxy, item.g.name);
            if (res && (res.main || res.extra || res.complete)) {
                if (res.main) item.g.hltbMain = res.main;
                if (res.extra) item.g.hltbExtra = res.extra;
                if (res.complete) item.g.hltbComplete = res.complete;
                ok++;
            } else {
                miss++;
            }
        } catch (e) {
            err++;
        }

        // zapisujemy na biezaco, zeby nic nie przepadlo przy przerwaniu
        if (done % 5 === 0) persistData();
    }

    persistData();
    renderTable();
    renderPlaytime();

    bulkHltbRunning = false;
    $('ptBulkStartBtn').disabled = false;
    $('ptBulkStopBtn').style.display = 'none';
    $('ptBulkProgressWrap').style.display = 'none';
    $('ptBulkSummary').style.display = 'block';
    $('ptBulkSummary').textContent = (bulkHltbStop ? t('ptBulkStopped') : t('ptBulkDone'))
        .replace('{ok}', ok).replace('{miss}', miss).replace('{err}', err);
}

// v1.3.1: ustawienie poziomu prosto z listy, bez wchodzenia w edycje gry
function setCompletionLevel(index, value) {
    const g = games[index];
    if (!g) return;
    g.completionLevel = value || null;
    persistData();
    renderTable();
    renderPlaytime();
}

function renderPlaytime() {
    const saved = localStorage.getItem(HLTB_PROXY_KEY) || '';
    if ($('hltbProxyUrl')) $('hltbProxyUrl').value = saved;
    const noteEl = document.querySelector('[data-i18n="ptSourceNote"]');
    if (noteEl) noteEl.textContent = t('ptSourceNote');

    const timed = games.filter(g => g.hltbMain || g.hltbExtra || g.hltbComplete);
    const sum = (k) => timed.reduce((s, g) => s + (g[k] || 0), 0);

    const totals = { main: sum('hltbMain'), extra: sum('hltbExtra'), complete: sum('hltbComplete') };
    const tiers = ['main', 'extra', 'complete'];
    const idMap = { main: 'ptMainTotal', extra: 'ptExtraTotal', complete: 'ptCompleteTotal' };
    const subMap = { main: 'ptMainSub', extra: 'ptExtraSub', complete: 'ptCompleteSub' };

    tiers.forEach(tier => {
        $(idMap[tier]).innerHTML = `${fmtHours(totals[tier])}<small>h</small>`;
        const remaining = timed.reduce((s, g) => s + hltbRemaining(g, tier), 0);
        const days = totals[tier] / 24;
        $(subMap[tier]).innerHTML = totals[tier]
            ? `${escapeHtml(t('ptRemaining'))}: <strong style="color:var(--text-light);">${fmtHours(remaining)} h</strong><br>${escapeHtml(t('ptEquals').replace('{d}', days.toFixed(1)))}`
            : escapeHtml(t('ptNoData'));
    });

    // progress: hours cleared vs hours logged, at the Main + Extras level
    const body = $('ptProgressBody');
    if (timed.length === 0) {
        body.innerHTML = `<p class="auth-note">${escapeHtml(t('ptEmpty'))}</p>`;
        $('ptList').innerHTML = '';
        updateHltbFormNote();
        return;
    }

    const clearedHours = timed.reduce((s, g) => {
        const lvl = effectiveLevel(g);
        if (lvl === 'complete') return s + (g.hltbComplete || g.hltbExtra || g.hltbMain || 0);
        if (lvl === 'extra') return s + (g.hltbExtra || g.hltbMain || 0);
        if (lvl === 'main') return s + (g.hltbMain || 0);
        return s;
    }, 0);
    const baseHours = timed.reduce((s, g) => s + (g.hltbExtra || g.hltbMain || 0), 0);
    const pct = baseHours ? Math.min(100, (clearedHours / baseHours) * 100) : 0;

    const byLevel = { main: 0, extra: 0, complete: 0, none: 0 };
    timed.forEach(g => { byLevel[effectiveLevel(g) || 'none']++; });

    body.innerHTML = `
        <div class="hltb-tile" style="padding:18px 18px 18px 21px;">
            <div class="hltb-label">${escapeHtml(t('ptClearedLabel'))}</div>
            <div class="hltb-value">${fmtHours(clearedHours)}<small>h / ${fmtHours(baseHours)} h</small></div>
            <div class="hltb-bar-track"><div class="hltb-bar-done" style="width:${pct.toFixed(1)}%"></div></div>
            <div class="hltb-legend">
                <span><i class="fa-solid fa-circle" style="color:var(--accent-2);"></i>${escapeHtml(t('hltbLevelMain'))}: ${byLevel.main}</span>
                <span><i class="fa-solid fa-circle" style="color:var(--steam-blue);"></i>${escapeHtml(t('hltbLevelExtra'))}: ${byLevel.extra}</span>
                <span><i class="fa-solid fa-circle" style="color:var(--coin);"></i>${escapeHtml(t('hltbLevelComplete'))}: ${byLevel.complete}</span>
                <span><i class="fa-solid fa-circle" style="color:var(--text-dim);"></i>${escapeHtml(t('hltbLevelNone'))}: ${byLevel.none}</span>
            </div>
            <div class="hltb-explain">${escapeHtml(t('ptClearedExplain').replace('{base}', fmtHours(baseHours)))}</div>
        </div>`;

    const lvlLabel = { main: t('hltbLevelMain'), extra: t('hltbLevelExtra'), complete: t('hltbLevelComplete') };
    $('ptList').innerHTML = timed
        .slice()
        .sort((a, b) => (b.hltbExtra || b.hltbMain || 0) - (a.hltbExtra || a.hltbMain || 0))
        .map(g => {
            const idx = games.indexOf(g);
            const lvl = effectiveLevel(g);
            const opt = (val, label) =>
                `<option value="${val}"${lvl === val ? ' selected' : ''}>${escapeHtml(label)}</option>`;
            const picker = `<select class="hltb-level-pick" onchange="setCompletionLevel(${idx}, this.value)">
                    <option value=""${!lvl ? ' selected' : ''}>${escapeHtml(t('hltbLevelNone'))}</option>
                    ${opt('main', lvlLabel.main)}
                    ${opt('extra', lvlLabel.extra)}
                    ${opt('complete', lvlLabel.complete)}
                </select>`;
            const hint = isInferredLevel(g)
                ? `<div class="hltb-row-hint">${escapeHtml(t('ptLevelFromStatus'))}</div>` : '';
            const times = [g.hltbMain, g.hltbExtra, g.hltbComplete]
                .map(v => v ? fmtHours(v) + 'h' : '—').join(' / ');
            return `<div class="hltb-row">
                <div>
                    <div class="hltb-row-name">${escapeHtml(g.name)}</div>
                    <div class="hltb-row-times">${times}</div>
                </div>
                <div>${picker}${hint}</div>
            </div>`;
        }).join('');

    updateHltbFormNote();
}

function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split(' ');
    let line = '', lines = [];
    words.forEach(word => {
        const test = line + word + ' ';
        if (ctx.measureText(test).width > maxWidth && line) {
            lines.push(line);
            line = word + ' ';
        } else {
            line = test;
        }
    });
    if (line) lines.push(line);
    lines.forEach((l, i) => ctx.fillText(l.trim(), x, y + i * lineHeight));
}

async function renderRanking() {
    const tbody = $('rankingTbody');
    const emptyMsg = $('rankingEmptyMsg');
    if (!tbody) return;
    tbody.innerHTML = '';
    if (!db) { if (emptyMsg) { emptyMsg.style.display = 'block'; } return; }
    try {
        const snap = await db.collection('leaderboard').orderBy('totalEur', 'desc').limit(100).get();
        if (snap.empty) { if (emptyMsg) emptyMsg.style.display = 'block'; return; }
        if (emptyMsg) emptyMsg.style.display = 'none';
        let rank = 0;
        snap.forEach(doc => {
            rank++;
            const d = doc.data();
            const isYou = currentUser && doc.id === currentUser.uid;
            const name = escapeHtml(d.nickname || t('anonNickname'));
            const tr = document.createElement('tr');
            if (isYou) tr.style.color = 'var(--steam-blue)';
            tr.innerHTML = `<td>${rank}</td><td>${name}${isYou ? ' <em>(' + t('rankingYou') + ')</em>' : ''}</td><td>${(d.totalEur || 0).toFixed(2)}</td>`;
            tbody.appendChild(tr);
        });
    } catch (e) {
        console.error(e);
        if (emptyMsg) emptyMsg.style.display = 'block';
    }
}

async function recordVisit() {
    if (!db) return;
    if (sessionStorage.getItem('visitCounted')) return;
    sessionStorage.setItem('visitCounted', '1');
    const today = new Date().toISOString().slice(0, 10);
    try {
        const ref = db.collection('visits').doc(today);
        await db.runTransaction(async (tx) => {
            const doc = await tx.get(ref);
            const current = (doc.exists && doc.data().count) || 0;
            tx.set(ref, { count: current + 1 }, { merge: true });
        });
    } catch (e) { }
}

let publicShareEnabled = false;

function updatePublicShareUI() {
    if ($('publicShareToggle')) $('publicShareToggle').checked = publicShareEnabled;
    if ($('publicShareLinkBox')) {
        $('publicShareLinkBox').style.display = publicShareEnabled ? 'flex' : 'none';
        if (publicShareEnabled && currentUser) {
            const url = window.location.origin + window.location.pathname + '#share=' + currentUser.uid;
            $('publicShareLink').value = url;
        }
    }
}

async function togglePublicShare(enabled) {
    if (!db || !currentUser) return;
    try {
        await db.collection('users').doc(currentUser.uid).set({ publicShare: enabled }, { merge: true });
        publicShareEnabled = enabled;
        updatePublicShareUI();
        showToastText(enabled ? t('shareEnabledMsg') : t('shareDisabledMsg'));
    } catch (e) {
        showToastText('Nie udało się zmienić ustawienia udostępniania.');
        if ($('publicShareToggle')) $('publicShareToggle').checked = publicShareEnabled;
    }
}

function copyPublicShareLink() {
    const input = $('publicShareLink');
    input.select();
    input.setSelectionRange(0, 99999);
    navigator.clipboard && navigator.clipboard.writeText(input.value).then(() => showToastText(t('linkCopiedMsg')));
}

async function initPublicShareIfNeeded() {
    if (!location.hash.startsWith('#share=')) return false;
    const uid = location.hash.slice(7).split('&')[0];
    document.body.querySelectorAll(':scope > header, :scope > .drawer-overlay, :scope > .drawer, :scope > main').forEach(el => el.style.display = 'none');
    const view = $('publicShareView');
    view.style.display = 'block';
    if (!db) { $('publicShareBody').innerHTML = '<div class="empty-state"><i class="fa-solid fa-triangle-exclamation"></i> Nie udało się połączyć z bazą danych.</div>'; return true; }
    try {
        const doc = await db.collection('users').doc(uid).get();
        if (!doc.exists || doc.data().publicShare !== true) {
            $('publicShareBody').innerHTML = '<div class="empty-state"><i class="fa-solid fa-lock"></i> Ten link jest nieprawidłowy albo biblioteka nie jest już udostępniana.</div>';
            return true;
        }
        const d = doc.data();
        const nick = (d.profile && d.profile.nickname) || 'Gracz';
        const pubGames = Array.isArray(d.games) ? d.games : [];
        const totalChf = pubGames.reduce((s, g) => s + (g.priceChf || 0), 0);
        $('publicShareTitle').textContent = `Biblioteka: ${nick}`;
        const rows = pubGames.slice().sort((a, b) => (b.date || '').localeCompare(a.date || ''))
            .map(g => {
                const meta = platformMeta(g.source || 'Steam');
                const statusIcon = g.status === 'completed' ? ' ✅' : (g.status === 'not_completed' ? ' ⏳' : '');
                return `<tr><td>${escapeHtml(g.name)}${statusIcon}</td><td><span class="source-txt ${meta.cls}">${meta.label()}</span></td><td>${g.date || '-'}</td><td style="text-align:right; font-weight:600;">${(g.price || 0).toFixed(2)} ${escapeHtml(g.currency || '')}</td></tr>`;
            }).join('');
        $('publicShareBody').innerHTML = `
            <div class="stats-row" style="margin-bottom:20px;">
                <div class="stat-tile"><div class="stat-label"><i class="fa-solid fa-gamepad"></i> Gry</div><div class="stat-value">${pubGames.length}</div></div>
                <div class="stat-tile stat-hero"><div class="stat-label"><i class="fa-solid fa-coins"></i> Wartość biblioteki</div><div class="stat-value">${totalChf.toFixed(2)} <small>CHF</small></div></div>
            </div>
            <div class="table-container" style="max-height:500px; padding:0;">
                <table><thead><tr><th>Tytuł</th><th>Platforma</th><th>Data</th><th style="text-align:right;">Cena</th></tr></thead><tbody>${rows || '<tr><td colspan="4" style="text-align:center; color:var(--text-dim);">Brak gier.</td></tr>'}</tbody></table>
            </div>
        `;
    } catch (e) {
        $('publicShareBody').innerHTML = '<div class="empty-state"><i class="fa-solid fa-triangle-exclamation"></i> Nie udało się wczytać biblioteki.</div>';
    }
    return true;
}

let adminUsersCache = {};
async function loadAdminPanel() {
    if (!db || !isAdmin()) return;
    try {
        const usersSnap = await db.collection('users').get();
        let totalGames = 0, steamCount = 0, keyCount = 0, priceSumEur = 0, priceCount = 0;
        const gameCounts = {};
        const usersTbody = $('adminUsersTbody');
        usersTbody.innerHTML = '';
        adminUsersCache = {};

        // v0.9: zbieramy wiersze do tablicy, żeby móc posortować wg wartości biblioteki (największe konta na górze)
        const rows = [];

        usersSnap.forEach(doc => {
            const d = doc.data();
            const uGames = Array.isArray(d.games) ? d.games : [];
            totalGames += uGames.length;
            let userChf = 0;
            uGames.forEach(g => {
                if ((g.source || 'Steam') === 'Steam') steamCount++; else keyCount++;
                const eur = g.currency === 'EUR' ? g.price : (g.priceChf && rates.EUR ? g.priceChf / rates.EUR : null);
                if (eur !== null && !isNaN(eur)) { priceSumEur += eur; priceCount++; }
                const key = (g.name || '').trim().toLowerCase();
                if (key) gameCounts[key] = (gameCounts[key] || 0) + 1;
                userChf += g.priceChf || 0;
            });

            const nick = (d.profile && d.profile.nickname) || doc.id.slice(0, 8) + '…';
            const country = d.regCountry ? escapeHtml(String(d.regCountry)) : '-';
            const banned = d.banned === true;
            const registeredAt = d.registeredAt ? new Date(d.registeredAt) : null;
            const registeredLabel = registeredAt && !isNaN(registeredAt) ? registeredAt.toLocaleDateString('pl-PL') : '-';

            adminUsersCache[doc.id] = d;
            rows.push({ uid: doc.id, nick, country, uGamesLen: uGames.length, userChf, banned, registeredLabel });
        });

        rows.sort((a, b) => b.userChf - a.userChf); // v0.9: największe biblioteki na górze listy

        rows.forEach(r => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${escapeHtml(r.nick)}</td><td>${r.country}</td><td style="white-space:nowrap;">${r.registeredLabel}</td><td>${r.uGamesLen}</td><td>${r.userChf.toFixed(2)}</td><td>${r.banned ? '🚫 Zbanowany' : '✅ Aktywny'}</td>
                <td style="display:flex; gap:6px; flex-wrap:wrap; justify-content:flex-end;">
                    <button type="button" class="btn-tool" style="width:auto; padding:4px 10px;" onclick="showAdminUserDetail('${r.uid}')"><i class="fa-solid fa-eye"></i></button>
                    <button type="button" class="btn-tool" style="width:auto; padding:4px 10px;" onclick="${r.banned ? `unbanUser('${r.uid}')` : `openBanModal('${r.uid}')`}">${r.banned ? 'Odbanuj' : 'Zbanuj'}</button>
                    <button type="button" class="btn-danger-ghost" style="width:auto; padding:4px 10px;" onclick="deleteUserRecords('${r.uid}')"><i class="fa-solid fa-trash"></i></button>
                </td>`;
            usersTbody.appendChild(tr);
        });

        $('adminStatTotalGames').textContent = totalGames;
        $('adminStatUsers').textContent = usersSnap.size;
        $('adminStatAvgPrice').textContent = priceCount ? (priceSumEur / priceCount).toFixed(2) : '-';
        const totalSourced = steamCount + keyCount;
        $('adminStatSourceSplit').textContent = totalSourced
            ? `Steam ${Math.round(steamCount / totalSourced * 100)}% / Kluczykarnia ${Math.round(keyCount / totalSourced * 100)}%`
            : '-';

        const topGamesTbody = $('adminTopGamesTbody');
        topGamesTbody.innerHTML = '';
        Object.entries(gameCounts).sort((a, b) => b[1] - a[1]).slice(0, 20).forEach(([name, count]) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${escapeHtml(name)}</td><td>${count}</td>`;
            topGamesTbody.appendChild(tr);
        });

        const now = new Date();
        const todayId = now.toISOString().slice(0, 10);
        const monthPrefix = todayId.slice(0, 7);
        const yearPrefix = todayId.slice(0, 4);
        const visitsSnap = await db.collection('visits')
            .orderBy(firebase.firestore.FieldPath.documentId())
            .startAt(yearPrefix + '-01-01').endAt(yearPrefix + '-12-31').get();
        let dayCount = 0, monthCount = 0, yearCount = 0;
        visitsSnap.forEach(doc => {
            const c = doc.data().count || 0;
            yearCount += c;
            if (doc.id.startsWith(monthPrefix)) monthCount += c;
            if (doc.id === todayId) dayCount = c;
        });
        $('adminVisitsDay').textContent = dayCount;
        $('adminVisitsMonth').textContent = monthCount;
        $('adminVisitsYear').textContent = yearCount;
    } catch (e) {
        console.error(e);
        showToastText('Błąd wczytywania panelu administratora (sprawdź reguły Firestore).');
    }
}

function showAdminUserDetail(uid) {
    const d = adminUsersCache[uid];
    if (!d) return;
    const nick = (d.profile && d.profile.nickname) || '(brak pseudonimu)';
    const country = d.regCountry || '-';
    const banned = d.banned === true;
    const theme = (d.profile && d.profile.theme) || '-';
    const uGames = Array.isArray(d.games) ? d.games : [];
    const totalChf = uGames.reduce((s, g) => s + (g.priceChf || 0), 0);
    const registeredAt = d.registeredAt ? new Date(d.registeredAt) : null;
    const registeredLabel = registeredAt && !isNaN(registeredAt) ? registeredAt.toLocaleString('pl-PL', { dateStyle: 'medium', timeStyle: 'short' }) : '-';

    // v0.9: rozkład gier wg platformy - żeby admin widział na pierwszy rzut oka skąd użytkownik kupuje
    const platformCounts = {};
    uGames.forEach(g => {
        const src = g.source || 'Steam';
        platformCounts[src] = (platformCounts[src] || 0) + 1;
    });
    const platformChips = Object.entries(platformCounts).sort((a, b) => b[1] - a[1])
        .map(([src, count]) => `<span class="source-txt ${platformMeta(src).cls}" style="margin-right:8px; display:inline-block; margin-bottom:6px;">${escapeHtml(src)}: ${count}</span>`)
        .join('') || '<span style="color:var(--text-dim);">Brak gier</span>';

    let banInfoHtml = '';
    if (banned) {
        const until = d.banUntil ? new Date(d.banUntil) : null;
        const untilLabel = until ? until.toLocaleString('pl-PL', { dateStyle: 'medium', timeStyle: 'short' }) : 'Bezterminowo';
        banInfoHtml = `<div style="margin-bottom:16px; padding:12px 14px; background:var(--bg-input); border:1px solid var(--err); border-radius:8px;">
            <strong style="color:var(--err);"><i class="fa-solid fa-ban"></i> Konto zbanowane</strong><br>
            <span style="font-size:13px;">Powód: ${escapeHtml(d.banReason || '(brak powodu)')}</span><br>
            <span style="font-size:13px; color:var(--text-dim);">Do: ${untilLabel}</span>
        </div>`;
    }

    let rows = uGames.slice().sort((a, b) => (b.date || '').localeCompare(a.date || ''))
        .map(g => `<tr><td>${escapeHtml(g.name)}</td><td>${escapeHtml(g.source || 'Steam')}</td><td>${g.date || '-'}</td><td>${(g.price || 0).toFixed(2)} ${escapeHtml(g.currency || '')}</td></tr>`)
        .join('');
    if (!rows) rows = `<tr><td colspan="4" style="text-align:center; color:var(--text-dim);">Brak gier na koncie.</td></tr>`;

    $('adminModalTitle').textContent = 'Podgląd konta: ' + nick;
    $('adminModalBody').innerHTML = `
        ${banInfoHtml}
        <div class="stats-row" style="margin-bottom:16px;">
            <div class="stat-tile"><div class="stat-label">UID</div><div class="stat-value" style="font-size:12px; word-break:break-all;">${escapeHtml(uid)}</div></div>
            <div class="stat-tile"><div class="stat-label">Kraj</div><div class="stat-value">${escapeHtml(String(country))}</div></div>
            <div class="stat-tile"><div class="stat-label">Zarejestrowano</div><div class="stat-value" style="font-size:14px;">${registeredLabel}</div></div>
            <div class="stat-tile"><div class="stat-label">Motyw</div><div class="stat-value" style="font-size:16px;">${escapeHtml(String(theme))}</div></div>
            <div class="stat-tile"><div class="stat-label">Status</div><div class="stat-value" style="font-size:16px;">${banned ? '🚫 Zbanowany' : '✅ Aktywny'}</div></div>
            <div class="stat-tile stat-hero"><div class="stat-label">Wartość biblioteki</div><div class="stat-value">${totalChf.toFixed(2)} <small>CHF</small></div></div>
        </div>
        <h4 class="acc-h">Platformy</h4>
        <div style="margin-bottom:18px;">${platformChips}</div>
        <h4 class="acc-h">Gry na koncie (${uGames.length})</h4>
        <div class="table-container" style="max-height:300px;">
            <table><thead><tr><th>Tytuł</th><th>Platforma</th><th>Data</th><th>Cena</th></tr></thead><tbody>${rows}</tbody></table>
        </div>
        <div style="margin-top:18px; display:flex; gap:10px; flex-wrap:wrap;">
            ${banned
                ? `<button type="button" class="btn-tool" onclick="unbanUser('${uid}'); closeAdminUserModal();">Odbanuj konto</button>`
                : `<button type="button" class="btn-danger-ghost" onclick="closeAdminUserModal(); openBanModal('${uid}');">Zbanuj konto</button>`}
            <button type="button" class="btn-danger-ghost" onclick="deleteUserRecords('${uid}')"><i class="fa-solid fa-trash"></i> Usuń wszystkie dane konta</button>
        </div>
    `;
    $('adminUserModal').style.display = 'block';
    $('adminModalOverlay').style.display = 'block';
}

function closeAdminUserModal() {
    $('adminUserModal').style.display = 'none';
    $('adminModalOverlay').style.display = 'none';
}

async function deleteUserRecords(uid) {
    if (!db || !isAdmin()) return;
    const d = adminUsersCache[uid] || {};
    const nick = (d.profile && d.profile.nickname) || uid;
    if (!confirm(`Na pewno usunąć WSZYSTKIE dane konta "${nick}"?\n\nTo usunie bibliotekę gier, profil, pozycję w rankingu i wpis pseudonimu z bazy. Konto logowania (e-mail/hasło) pozostanie aktywne w Firebase Authentication - to trzeba usunąć osobno z konsoli Firebase.\n\nTej operacji NIE da się cofnąć.`)) return;
    try {
        const nickKey = (d.profile && d.profile.nickname) ? d.profile.nickname.toLowerCase() : null;
        await db.collection('users').doc(uid).delete();
        try { await db.collection('leaderboard').doc(uid).delete(); } catch (e) {}
        if (nickKey) { try { await db.collection('nicknames').doc(nickKey).delete(); } catch (e) {} }
        closeAdminUserModal();
        showToastText('Dane konta zostały usunięte.');
        loadAdminPanel();
    } catch (e) {
        showToastText('Nie udało się usunąć danych konta (sprawdź reguły Firestore).');
    }
}

// v0.9: modal banowania z powodem i czasem trwania (zamiast prostego confirm())
let banTargetUid = null;

function openBanModal(uid) {
    if (!isAdmin()) return;
    banTargetUid = uid;
    const d = adminUsersCache[uid] || {};
    const nick = (d.profile && d.profile.nickname) || uid.slice(0, 8) + '…';
    $('banModalTitle').textContent = 'Zbanuj użytkownika: ' + nick;
    $('banReasonInput').value = '';
    $('banDurationSelect').value = 'permanent';
    $('banModal').style.display = 'block';
    $('banModalOverlay').style.display = 'block';
}

function closeBanModal() {
    $('banModal').style.display = 'none';
    $('banModalOverlay').style.display = 'none';
    banTargetUid = null;
}

async function confirmBanUser() {
    if (!banTargetUid || !db || !isAdmin()) return;
    const reason = $('banReasonInput').value.trim();
    if (!reason) { showToastText('Podaj powód bana - użytkownik go zobaczy.'); return; }
    const duration = $('banDurationSelect').value;
    let banUntil = null;
    if (duration !== 'permanent') {
        const days = parseInt(duration, 10);
        const until = new Date();
        until.setDate(until.getDate() + days);
        banUntil = until.toISOString();
    }
    const uid = banTargetUid;
    try {
        await db.collection('users').doc(uid).set({
            banned: true,
            banReason: reason,
            banUntil: banUntil,
            bannedAt: new Date().toISOString()
        }, { merge: true });
        try { await db.collection('leaderboard').doc(uid).delete(); } catch (e) {} // usuń z rankingu
        closeBanModal();
        closeAdminUserModal();
        showToastText('Użytkownik zbanowany.');
        loadAdminPanel();
    } catch (e) {
        showToastText('Nie udało się zbanować użytkownika (sprawdź reguły Firestore).');
    }
}

async function unbanUser(uid) {
    if (!db || !isAdmin()) return;
    if (!confirm('Odbanować tego użytkownika?')) return;
    try {
        await db.collection('users').doc(uid).set({
            banned: false,
            banReason: firebase.firestore.FieldValue.delete(),
            banUntil: firebase.firestore.FieldValue.delete()
        }, { merge: true });
        closeAdminUserModal();
        showToastText('Użytkownik odbanowany.');
        loadAdminPanel();
    } catch (e) {
        showToastText('Nie udało się odbanować użytkownika (sprawdź reguły Firestore).');
    }
}

async function forceSyncLeaderboard() {
    if (!db || !isAdmin()) return;
    try {
        const usersSnap = await db.collection('users').get();
        let done = 0, failed = 0;
        for (const doc of usersSnap.docs) {
            const d = doc.data();
            if (d.banned === true) continue;
            const uGames = Array.isArray(d.games) ? d.games : [];
            const totalChf = uGames.reduce((s, g) => s + (g.priceChf || 0), 0);
            const totalEur = rates.EUR ? (totalChf / rates.EUR) : 0;
            try {
                await db.collection('leaderboard').doc(doc.id).set({
                    nickname: (d.profile && d.profile.nickname) ? String(d.profile.nickname).slice(0, 40) : '',
                    totalEur: Math.round(totalEur * 100) / 100,
                    gamesCount: uGames.length,
                    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
                });
                done++;
            } catch (e) { failed++; }
        }
        showToastText(`Zsynchronizowano ranking: ${done} kont${failed ? ', błędy: ' + failed : ''}.`);
        renderRanking();
    } catch (e) {
        console.error(e);
        showToastText('Nie udało się zsynchronizować rankingu.');
    }
}

initPublicShareIfNeeded().then(isPublicShare => {
    if (isPublicShare) return;
    buildLangQuickMenu();
    initTheme();
    $('langSwitcher').value = currentLang;
    changeLanguage(currentLang);
    if (!firebaseReady) loadGuestData();
    fetchExchangeRates();
    initCurrencyPreference();
    recordVisit(); // v0.6
    initCookieConsent();
});

const footerTranslations={
en:{d:"Backlog Wallet helps you track game purchases, monitor spending over time, and analyze your library with statistics and charts. Your collection can be stored locally or synchronized across devices using your account."}
};

function updateFooterLanguage(){
 const lang = (typeof currentLang !== 'undefined' && currentLang) || localStorage.getItem('appLang') || 'en';
 const data = footerTranslations[lang] || footerTranslations.en;
 const d=document.getElementById('footerDescription');
 if(d) d.innerHTML=data.d;
}
function updateFooterDateTime(){
 const el=document.getElementById('footerDateTime');
 if(!el) return;
 const lang=(typeof currentLang !== 'undefined' && currentLang) || localStorage.getItem('appLang') || 'en';
 el.textContent=new Date().toLocaleString(lang,{dateStyle:'medium',timeStyle:'short'});
}
document.addEventListener('DOMContentLoaded',updateFooterLanguage);
document.addEventListener('DOMContentLoaded',updateFooterDateTime);
setInterval(updateFooterDateTime,30000);
