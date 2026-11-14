const firebaseConfig = {
    apiKey: "AIzaSyBjbk0I-oOLJU7H-Iga-7e3ChIShctObug",
    authDomain: "steamtracker-394df.firebaseapp.com",
    projectId: "steamtracker-394df",
    storageBucket: "steamtracker-394df.firebasestorage.app",
    messagingSenderId: "529218265920",
    appId: "1:529218265920:web:217c3e79f5c56aacc910a5",
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
        
        heroTagline: "A ledger for the games you buy.",
        heroLead: "Log what you paid, where you bought it and when. Backlog Wallet adds it up, converts it to your currency and shows how much of your library is still unplayed.",
        ctaRegister: "Create a free account",
        ctaHaveAccount: "Log in",
        
        feat1T: "Purchases",
        feat1D: "Title, price, store, date, digital or physical. Add games one at a time, or paste a whole list.",
        feat2T: "Spending",
        feat2D: "Totals per month and per year, charts, savings goals and a summary of your year.",
        feat3T: "Currencies",
        feat3D: "Prices stay as you paid them. Totals can be shown in any of 20+ currencies using live rates.",
        feat4T: "Sync",
        feat4D: "Your library lives in your account, so it is the same on your phone and your computer.",
        privHead: "Privacy",
        priv1: "Your data is not sold and not shared for marketing.",
        priv2: "It is stored only to run the app and sync your library.",
        priv3: "You can export or delete everything from your account at any time.",
        landingFootNote: "You need an account to use Backlog Wallet. It is free and setup takes about a minute.",
        
heroFact4: "Steam, PlayStation, Xbox, Nintendo, GOG, Epic, key stores, physical copies",         whyHead: "Why this exists", whyBody: "I buy more games than I play, and I never knew what I had actually spent. Spreadsheets got tedious, so I built this for myself and then opened it up. It is a small one-person project, and the feedback form goes straight to my inbox.", whyLink: "Send feedback", footerNote: "Built by one person, updated when I get to it.", feedbackMail: "Prefer e-mail?", previewLabel: "Example library", previewNote: "Example data",
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
regConsentPre: "I am at least 16 years old and I accept the", regConsentAnd: "and the", authErrConsent: "Please confirm that you are at least 16 and accept the Terms and the Privacy Policy.", accRankHead: "Public ranking", accRankNote: "Optional. If you join, your nickname, the total value of your library (in EUR) and the number of games are shown to everyone on the Ranking page. Leave it off and nothing about you is listed.", accRankEnable: "Show me in the ranking", rankOnMsg: "You are now listed in the ranking.", rankOffMsg: "You are no longer listed in the ranking.", clearLocalConfirm: "This removes the library, goals and settings stored in this browser, including a guest library that is not saved to an account. Data in your account is not touched. Continue?", accStoredHead: "What we store about you", accStoredNote: "That is all of it. There is no analytics, no tracking and no advertising profile. Your password is kept by Firebase Authentication as a hash and is not visible to us.", stEmail: "E-mail", stNick: "Nickname", stRegistered: "Registered", stGames: "Games in your library", stGoals: "Savings goals", stRanking: "Public ranking", stShare: "Public link to your library", stTerms: "Terms accepted", stOn: "On", stOff: "Off", stEarlier: "Before 12 Nov 2026", regPassHint: "Use at least 8 characters. A short phrase is easier to remember than a random word.", accShareHead: "Share your library", accShareNote: "Enable to generate a public read-only link - anyone with it will see your nickname and game list (not your email).", accShareEnable: "Share publicly", copyLinkBtn: "Copy link", shareEnabledMsg: "Your library is now shared publicly.", shareDisabledMsg: "Sharing disabled.", linkCopiedMsg: "Link copied to clipboard.",         accDataNote: "You are in control of your data. Export a full copy at any time, or permanently delete your account and everything stored with it.",
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
        
        
        
        appTitle: "Backlog Wallet", menu: "Menu", navHome: "Home", navAuth: "Login / Register", navFaq: "FAQ", navChangelog: "Changelog", navDonate: "Donate", language: "Language",
        gameTitle: "Game Title", price: "Price", currency: "Currency", source: "Source", purchaseDate: "Purchase Date", addBtn: "Add", saveBtn: "Save", cancelBtn: "Cancel", addGame: "Add game",
fldStatus: "Completion status (optional)", statusNone: "- not set -", statusCompleted: "Completed", statusNotCompleted: "Not completed", statusInProgress: "In progress", statusToggleHint: "click to change", statusEndless: "Endless game", statusWontPlay: "Won't play",         addFormShow: "Show form", addFormHide: "Hide form",
        myLibrary: "Your Library", colPlatform: "Platform", colOrigPrice: "Original Price", colChfPrice: "CHF Value", colOptions: "Options", totalValue: "Library value",
        statTotalGames: "Games total", statThisMonth: "This month", statSpentThisMonth: "Spent this month", statThisYear: "This year",
        chartsTitle: "Statistics", chartOptPurchases: "Purchases over time", chartOptCumulative: "Cumulative total", chartOptSources: "Sources",
        granMonth: "Month", granQuarter: "Quarter", granYear: "Year",
        chartPurchases: "Number of purchases", chartCumulative: "Total games owned", chartSources: "Purchase sources",
        steam: "Steam", keyStore: "Key Store", noResults: "Nothing matches those filters.",
        liveRates: "Live", offlineRates: "Offline", suspiciousName: "That title looks made up. Fix it and try again.", priceTooHigh: "That price looks too high (the limit is about 2000 CHF). Check it and try again.", navYearReview: "Year in Review", yrTotalSpent: "Spent this year", yrGamesLabel: "Games bought", yrPlatformLabel: "Favorite platform", yrMonthLabel: "Most active month", yrMostExpensive: "Priciest purchase", yrDownloadBtn: "Download as image", yrEmpty: "No games this year.", navRanking: "Ranking", rankingTitle: "Library Value Ranking", rankingColRank: "Rank", rankingColNickname: "Player", rankingColValue: "Value (EUR)", rankingYou: "You", rankingEmpty: "Nobody has joined the ranking yet. You can opt in under Account.", rankingNote: "Each entry is worked out from the library on that account when it is saved. This is a ranking for fun, and entries that look fake can be removed.", vsLastMonth: "vs last month", anonNickname: "Player", fldOwnership: "Ownership", ownDigital: "Digital", ownPhysical: "Physical", filterAllOwnership: "All formats", chartOptOwnership: "Digital vs Physical", bulkBarSelected: "Selected: {n}", bulkSetOwnershipLabel: "Set format:", bulkSetSourceLabel: "Set source:", bulkSetStatusLabel: "Set status:", bulkClearStatus: "Clear status (unset)", bulkNoChange: "— no change —", bulkApplyBtn: "Apply", bulkClearBtn: "Deselect all", bulkSelectAllBtn: "Select all", bulkNoSelection: "No games selected.", bulkApplied: "Updated {n} games.", navGoals: "Savings Goals", goalsDesc: "Save up for games you want and track your progress.", goalName: "Game title", goalTargetAmount: "Target amount", goalSavedAmount: "Saved so far", goalAddBtn: "Add goal", goalEmpty: "You don't have any savings goals yet.", goalRemaining: "Remaining", goalReached: "Goal reached!", goalDeleteConfirm: "Delete this goal?", goalUpdateSaved: "Update", navShelf: "Virtual Shelf", shelfDesc: "Your library as a virtual game shelf - covers are generated automatically based on the title and platform.", shelfEmpty: "Your shelf is still empty - add your first game in the Library tab.",
        searchPh: "Search games...", exportCsv: "Export CSV",
        tabLogin: "Log in", tabRegister: "Create account", tabReset: "Reset password",
        email: "E-mail", password: "Password", loginBtn: "Log in", registerBtn: "Create account", resetBtn: "Send reset link", logoutBtn: "Log out",
        authNoteGuest: "An account is required to use Backlog Wallet. It is free, and your library is the same on every device.",
        authNoteLogged: "Your library is synced to the cloud and available on any device after logging in.",
        resetSent: "A password reset link has been sent to your e-mail. Check your spam folder too.",
        
        registerCheckEmail: "Account created. Confirm your e-mail (check spam too) and you are in.", verifyGateTitle: "Confirm your email address", verifyGateBody: "We've sent a confirmation link to your email. Click it, then come back here and check again.", resendVerifyBtn: "Resend email", recheckVerifyBtn: "Check again", verifyEmailSent: "Sent again.", verifyStillNotVerified: "Not confirmed yet. Check your inbox and spam folder.", verifyNowVerified: "Confirmed, thanks.",
        loginOk: "Logged in.", logoutOk: "Logged out.",
        authErrInvalid: "Wrong e-mail or password.", authErrInUse: "This e-mail is already registered.", authErrWeak: "Password must be at least 8 characters.", authErrNoUser: "No account found with this e-mail.", authErrGeneric: "Something went wrong, try again.", authErrNicknameLookup: "Couldn't verify that nickname - try logging in with your e-mail address instead.", accRegisteredSince: "Registered", importDataBtn: "Import data (JSON)", importDataNote: "Import a JSON file previously downloaded with \"Download my data\" (e.g. from another account or as a backup restore). Games are added to your current library - duplicates (by name) are skipped automatically.", importInvalidFile: "Invalid file - please choose a JSON file previously downloaded with \"Download my data\".", importResult: "Games imported: {added} (invalid lines skipped: {skipped}, duplicates: {dup}).", banGateTitle: "This account has been suspended", banGateReasonLabel: "Reason", banGateNoReason: "The administrator did not provide a reason.", banGatePermanent: "This is a permanent suspension.", banGateUntilPrefix: "Suspended until:", banGateContact: "If you believe this is a mistake, please get in touch through Feedback & contact (linked in the footer).", banGateBackBtn: "Back to home page", authErrTooFast: "Form filled out too quickly - please try again in a moment.", authErrTooSoon: "Too many registration attempts in a short time - please try again in a minute.", healthLabel: "Backlog health", healthGradeExemplary: "Exemplary backlog", healthGradeGood: "In good shape", healthGradeAverage: "Average", healthGradeGrowing: "Growing debt", healthGradeOverwhelmed: "Backlog took over", healthGradeUnknown: "Unknown", healthMsgExemplary: "You're keeping up with your games - respect!", healthMsgGood: "Your backlog is under control, keep it up.", healthMsgAverage: "A few games have piled up, but that's normal.", healthMsgGrowing: "Your backlog is growing faster than you're clearing it.", healthMsgOverwhelmed: "Maybe it's time to buy less and play more?", healthNoStatusMsg: "Set a status (Completed/Not completed) on your games to see your score.", healthEmptyMsg: "Add your first game to see your score.", sideStoreTitle: "Spending by store", sideCostTitle: "Cost insights", costPerCompleted: "Spent per completed game", costDead: "Dead backlog value", costDeadShare: "Share of library value", costThisYear: "Spent this year", costSamePeriod: "Same period last year", costChange: "Change", costHint: "Dead backlog = games with no status, Not completed or Won't play. Set statuses on your games to make it accurate.", chartOptYoy: "Spending, year over year", chartYoyTitle: "Cumulative spending ({cur}), by year", chartDownloadPng: "Download PNG", yrAllTime: "All time", yrTotalSpentAll: "Spent in total", yrWrappedIntroAll: "Your whole library", yrWrappedOutroAll: "That was your whole library so far. Keep going.", sideInfoTitle: "Library info", sideEmpty: "Nothing to show yet.", infoFirst: "First purchase", infoLast: "Latest purchase", infoAvg: "Average price", infoMax: "Most expensive", infoFormats: "Digital / physical", infoTracked: "With a status",
        firebaseNotConfigured: "Firebase is not configured. Paste your config in the file (FIREBASE CONFIG section).",
        syncCloud: "Cloud", syncSyncing: "Syncing...", syncErr: "Sync error", retryBtn: "Retry", libraryLoadError: "Couldn't load your library. Check your connection and try again.",
        savedCloud: "Saved", itemDeleted: "Item deleted", itemsDeleted: "{n} games deleted", bulkDeleteBtn: "Delete selected", savePending: "Not saved yet. Will retry automatically.", syncMerged: "Merged changes from your other device", syncRefreshed: "Updated from your other device", syncRestored: "Restored unsaved changes from this device", navFeedback: "Feedback & contact", feedbackDesc: "Got an idea for improving Backlog Wallet? Send it here.", feedbackSubject: "Subject", feedbackMessage: "Message", feedbackSend: "Send", feedbackSending: "Sending...", feedbackOk: "Thanks! Your message was sent.", feedbackFail: "Could not send the message. Please try again later.", feedbackWait: "Please wait a moment before sending another message.", feedbackNote: "Messages are delivered by email through Web3Forms. Please don't include sensitive personal data.", undoBtn: "Undo", smartImportBtn: "Smart import (Steam & more)", smartImportHint: "Paste your Steam purchase history (or any order list/receipt) below - one purchase per line works best. Steam doesn't offer an official export, so this is a best-effort reader: it tries to find a date, a price and a title on each line. Nothing gets added until you review and confirm the results below.", smartImportParseBtn: "Find purchases", smartImportPreviewNote: "Review each row - uncheck anything that isn't a game (wallet top-ups and refunds are pre-unchecked, but double-check). Every field can be edited directly.", smartImportCommitBtn: "Add checked games", onThisDayText: "{years} year(s) ago today, you bought {name}", onThisDayExtra: " (and {n} more)", yrHeatmapHeading: "Purchase activity", yrHeatmapLess: "Less", yrHeatmapMore: "More", yrWrappedBtn: "View as Wrapped", yrWrappedIntro: "Your year in games", yrWrappedOutro: "That was {year}. See you next year.", yrFirstGame: "First game bought", yrHeatmapDayCount: "{date}: {count} game(s) bought", yrHeatmapDayNone: "{date}: nothing bought",
        emptyLib: "No games yet. Add the first one with the form above.", bulkAddBtn: "Add multiple games", bulkAddHint: "Paste one game per line, in the format: Title;Price;Currency;Source;Date (YYYY-MM-DD). Currency, Source and Date are optional.", bulkAddSubmit: "Add all", bulkAddResult: "Games added: {added} (skipped invalid lines: {skipped})", bulkAddNone: "No valid entries found to add.", hideList: "Hide list", showList: "Show list", expandList: "Expand list", collapseList: "Collapse list", filterAllSources: "All sources", navRates: "Exchange Rates", ratesColCurrency: "Currency", ratesColRate: "Rate per 1 EUR", ratesBaseNote: "All rates are shown relative to 1 EUR (base currency).", ratesUpdated: "Updated", scrollTopTitle: "Back to top", changePasswordBtn: "Change password", currentPassword: "Current password", newPassword: "New password", newPasswordConfirm: "Confirm new password", changePasswordSubmit: "Change password", passwordMismatch: "The passwords do not match.", passwordChanged: "Password updated.",
        confirmDuplicate: "A game with this name is already in your library. Add it again anyway?", advFiltersToggle: "Advanced filters", priceMin: "Price from", priceMax: "Price to", dateFrom: "Date from", dateTo: "Date to", resetFilters: "Clear filters", bulkAddResultDup: "Games added: {added} (invalid lines: {skipped}, duplicates: {dup})", bulkAddAllDup: "All pasted games ({dup}) are already in your library - nothing was added.", navAchievements: "Achievements", achievementsDesc: "Unlock badges as you grow your game library.", achUnlocked: "Unlocked", achLocked: "Locked", achMaxLevel: "Max level!", achLevel: "Level {level}/{max}", achFirstGameT: "First Step", achFirstGameD: "Add your first game to the library.", achCollectorT: "Collector", achCollectorD: "Own {target} games in your library.", achDiversityT: "Multi-Platform", achDiversityD: "Own games from {target} different platforms.", achFinisherT: "Finisher", achFinisherD: "Complete {target} games from your library.", achPhysicalT: "Box Collector", achPhysicalD: "Own {target} physical games.", achInvestorT: "Big Investor", achInvestorD: "Reach a library value of {target}.", achDreamT: "Dream Fulfilled", achDreamD: "Reach at least one savings goal.", achCurrenciesT: "Multi-Currency", achCurrenciesD: "Buy games in {target} different currencies.", achVeteranT: "Collection Veteran", achVeteranD: "Keep your library going for {target} years.", achBalancedT: "Balanced Collection", achBalancedD: "Own both digital and physical games in your library.", navRoulette: "What to play?", rouletteDesc: "Can't decide what to play tonight? Roll the dice on your backlog.", rouletteBtn: "Pick a game", rouletteRerollBtn: "Pick another", rouletteEmptyLib: "No games to pick from yet. Add a few first.", rouletteAllDone: "No games marked as \"Not completed\" - set that status on some games in your library so there's something to roll for.", roulettePlatformAll: "All platforms", navSectionLibrary: "Your library", navSectionTools: "Tools",
        navTerms: "Terms & Conditions", navPrivacy: "Privacy Policy", rememberMe: "Remember me", footerContact: "Contact", cookieConsentText: "No tracking or advertising cookies here. The site only keeps technical data in your browser (local storage) to work properly and remember your settings, such as language, theme and your login. Details are in the Privacy Policy.", cookieMoreInfo: "More information", cookieAcceptBtn: "OK",
        faqHtml: "<h3>Is it free?</h3><p>Yes. It is a hobby project. You need an account to use it, and the account is free.</p><h3>Can I import my Steam purchases?</h3><p>Sort of. Steam has no official export, but Smart import lets you paste your purchase history (or any order list) and it picks out titles, prices and dates. You review the result before anything is added.</p><h3>I buy in different currencies. Does that work?</h3><p>Yes. Each game keeps the price and currency you paid in. Totals are converted with live rates from open.er-api.com, and if that service is down the app falls back to saved rates.</p><h3>Where is my data stored?</h3><p>In Firebase (Google Cloud), behind access rules, so only your account can read your library. You can download everything as JSON at any time.</p><h3>What happens if I delete my account?</h3><p>Everything is removed. The app downloads a backup of your data first, so you can import it again later if you change your mind.</p><h3>Can I switch between light and dark?</h3><p>Yes, with the moon/sun button at the top. You can also set your nickname and preferred currency in your account.</p><h3>Can I cheat the ranking?</h3><p>Not easily, but it is not impossible either. Your entry is worked out from your own library in your browser, and obviously broken values are rejected, but a determined person could still fake one. It is a ranking for fun, and entries that look fake can be removed.</p><h3>I found a bug or have an idea.</h3><p>Use Feedback &amp; contact in the footer. The e-mail address is on that page too.</p>",
        yrYearLabel: "Year", yrCompareLabel: "Compare with", yrCompareNone: "— no comparison —", yrAllYearsBtn: "All years", yrCompareHeading: "Year comparison", yrAllYearsHeading: "Spending year by year", yrAvgPrice: "Average game price", yrCompletedLabel: "Completed games", yrVsTitle: "{a} compared with {b}",
        changelogHtml: "<div class='log-entry'><div class='log-head'><h3 class='log-title'>1.11.2 | Nov 14, 2026</h3><span class='log-rule'></span></div><div class='log-table'><div class='log-row'><span class='log-tag log-fixed'>Fixed</span><span class='log-text'>The percentage under &quot;This month&quot; showed the change in money spent instead of the change in games bought. It now compares the number of games with last month.</span></div></div></div><div class='log-entry'><div class='log-head'><h3 class='log-title'>1.11.1 | Nov 14, 2026</h3><span class='log-rule'></span></div><div class='log-table'><div class='log-row'><span class='log-tag log-fixed'>Fixed</span><span class='log-text'>Download as image did nothing on iPhone. On phones it now opens the share sheet, where you can pick Save Image. The same applies to the Wrapped slides and chart downloads.</span></div></div></div><div class='log-entry'><div class='log-head'><h3 class='log-title'>1.11.0 | Nov 12, 2026</h3><span class='log-rule'></span></div><div class='log-table'><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>New account menu in the top bar: your name, sync status, light/dark theme and log out in one place.</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>The language picker was removed, the site is English only.</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>An account is now clearly required: the old guest-mode wording, the \"Local data\" badge and the matching lines in the FAQ, Terms and Privacy Policy were removed. A library kept in this browser by an older version is still merged into your account when you log in.</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Logged out, the top bar shows a Log in button.</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Log in and register window rebuilt: one card with a clear title, a single link to switch between logging in and creating an account, a show/hide button for the password and a short info card next to it.</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Reset password and error messages now appear inside the same card.</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Changelog redesigned: every release is a table of New, Changed and Fixed entries.</span></div><div class='log-row'><span class='log-tag log-fixed'>Fixed</span><span class='log-text'>Footer links on the main page were grey, now they use the same blue as on the Features and FAQ pages.</span></div><div class='log-row'><span class='log-tag log-fixed'>Fixed</span><span class='log-text'>Wrong current password in Change password showed an internal code instead of a message.</span></div><div class='log-row'><span class='log-tag log-fixed'>Fixed</span><span class='log-text'>Password field is hidden again after you switch between Log in, Create account and Reset password.</span></div></div></div><div class='log-entry'><div class='log-head'><h3 class='log-title'>1.10.0 | Nov 12, 2026</h3><span class='log-rule'></span></div><div class='log-table'><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Panel: Spending by store, shown in the currency you picked</span></div><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Panel: Library info (first and latest purchase, average price, most expensive game, digital vs physical, games with a status)</span></div><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Panel: Cost insights - spent per completed game, dead backlog value (games with no status, Not completed or Won&#39;t play) and its share of the library, and spending this year against the same period last year</span></div><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Chart: Spending, year over year - cumulative spending by month for the last three years on one chart</span></div><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Charts can be downloaded as PNG images (the Statistics chart and the year-by-year chart in Year in Review)</span></div><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Year in Review has a new All time option with its own card, downloadable image and Wrapped slides</span></div><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Safer saving: if you use the library on two devices, changes from both are now merged instead of the last save overwriting the other.</span></div><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>A save that fails (offline, bad connection) is kept and retried automatically, and the page warns you before you close it with unsaved changes.</span></div><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Coming back to a tab picks up changes made on your other device.</span></div><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Deleting a game can be undone for 10 seconds, also after several deletions in a row.</span></div><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Select games and delete them in one go, with undo.</span></div><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Accessibility: skip-to-content link, every field and icon button now has a proper name, and the game name is included in each row&#39;s edit, delete and status buttons.</span></div><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Dialogs keep the keyboard focus inside, close with Escape and give focus back where you were. The menu is no longer hidden from screen readers on desktop.</span></div><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Sortable table headers work with the keyboard and announce their sort order.</span></div><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>New standalone pages for Features, FAQ, Privacy Policy and Terms, so they can be found and shared by link, plus a sitemap.</span></div><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Installed app: shortcuts for Add a game, Year in Review and What to play?, store screenshots, and offline opening also for links with extras like <code>?view=faq</code>.</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>New look: darker charcoal background, flat panels with thin borders and smaller corners, blue for links and amber for money</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>The left sidebar is replaced by a top bar and a page strip under it; on phones the menu button works as before</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>The home page summary is now a single strip: library value, games total, this month, this year, spent this month</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>On wide screens the home page has two columns, with Backlog health and three new panels next to the library</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Year in Review: the heatmap legend and the downloadable image use the new colours</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>The library table is more compact: about 40% more games fit on a screen, with striped rows, a fixed header and aligned numbers</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Games with a status show a small badge next to the title (Completed, In progress, Not completed, Endless, Won&#39;t play)</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Filters and buttons look like fields and buttons again instead of plain underlined text</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>The start page for visitors has a new layout with an example table and feature cards</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>The light theme uses the same layout</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>The 404 page no longer loads fonts from Google, and icons, banner and theme colors match the new design.</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Slightly stronger contrast for dimmed text and the amber accent, in both themes.</span></div><div class='log-row'><span class='log-tag log-fixed'>Fixed</span><span class='log-text'>Year in Review: the purchase heatmap showed every purchase one day too early (a game bought on 31 December did not appear at all)</span></div><div class='log-row'><span class='log-tag log-fixed'>Fixed</span><span class='log-text'>Games added late in the evening could get tomorrow&#39;s or yesterday&#39;s date. \"Today\" now follows your local date.</span></div></div></div><div class='log-entry'><div class='log-head'><h3 class='log-title'>1.09.0 | Nov 12, 2026</h3><span class='log-rule'></span></div><div class='log-table'><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Privacy: the country is no longer looked up from your IP address, and an old value is removed when you log in</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>The ranking is now opt-in (Account &rarr; Public ranking)</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Deleting your account also removes your ranking entry and nickname record</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Registration asks you to confirm you are 16+ and accept the Terms and Privacy Policy</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Privacy Policy and Terms rewritten and expanded; the storage notice is now just a notice</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>The ranking text and the FAQ no longer claim that entries cannot be faked</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Privacy Policy: a link to clear the data this site keeps on your device</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Admin panel no longer shows a country column</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Privacy Policy: messages sent through the feedback form are deleted after 12 months</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Fonts and icons are now served from this site instead of Google Fonts and a CDN, so fewer outside services see your IP address</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Privacy Policy now starts with a short plain-language summary</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Your account shows what we store about you</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>The data export now includes your ranking and sharing settings and the dates you accepted the Terms</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>New passwords must be at least 8 characters</span></div><div class='log-row'><span class='log-tag log-fixed'>Fixed</span><span class='log-text'>Empty icon on the year summary</span></div></div></div><div class='log-entry'><div class='log-head'><h3 class='log-title'>1.08.0 | Nov 11, 2026</h3><span class='log-rule'></span></div><div class='log-table'><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>A feedback form in the footer. Ideas go straight to the author's inbox</span></div><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Added a page description for search engines and link previews</span></div><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Press / to jump to the search box</span></div><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>A proper 404 page</span></div><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>A status button on every row. One click cycles through completed (tick), not completed (cross) and in progress (hourglass), and back to not set - no need to open the edit form</span></div><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Status: In progress (also available in the edit form and bulk edit). The hourglass used to mean \"not completed\"; that is now the cross</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Redesigned the homepage to feel lighter: flat hero, smaller corner radii, calmer cards, no floating animation</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>New typography: Source Sans 3 for headings, menus, descriptions and game titles; IBM Plex Mono for prices, statistics, dates and numbers</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Removed emoji from the interface - statuses and achievements now use icons</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>The \"Your library\" menu section is now visible only when signed in</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Shortened the homepage: fewer feature tiles, no duplicate buttons or text, tidier sign-up buttons</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Removed HowLongToBeat and the Playtime tab</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>The \"years ago today\" banner now stays closed once you close it</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Updated the Privacy Policy: named the data controller and added a note about the feedback form (Web3Forms)</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Faster loading: dropped an unused monitoring script and pinned the chart library version</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Flatter look: dropped the gradients, glows and hover lift. One blue accent instead of violet and teal, smaller corners</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>New homepage: a small preview of the library table, plain text rows instead of icon tiles, and a short note on why the app exists</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Plainer wording on the homepage and in empty states</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>The theme is applied before the page paints, so no more dark flash in light mode</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Dashboard is more compact: one summary line instead of a big centred total</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Backlog health is a plain bar now, not a ring with a score in the middle</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Calmer charts: one colour, thin lines, no fill</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>The login page is just the form, no sales pitch next to it</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Fewer icons - they stay only where they actually help</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Rewrote the FAQ around real questions and shortened a few messages</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>New favicon, app icon and share image to match the BW logo</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Slimmer footer</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>The currency picker now sits next to the \"Library value\" label, so the big number stands alone</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>The e-mail address moved from the footer to the Feedback &amp; contact page</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Tidier footer on phones</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Plainer headings, no icons on empty states, stats and filters without boxes</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>The total has a double underline, like a ledger</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>A line in the footer about who is behind this</span></div><div class='log-row'><span class='log-tag log-fixed'>Fixed</span><span class='log-text'>Page jumping around when editing a game</span></div><div class='log-row'><span class='log-tag log-fixed'>Fixed</span><span class='log-text'>Leftover Polish text in the interface</span></div><div class='log-row'><span class='log-tag log-fixed'>Fixed</span><span class='log-text'>Dashboard summary looking uneven on phones: the stats now sit in a tidy 2x2 grid</span></div></div></div><div class='log-entry'><div class='log-head'><h3 class='log-title'>1.07.1 | Jul 27, 2026</h3><span class='log-rule'></span></div><div class='log-table'><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Heatmap cells are now clickable/tappable - shows how many games were bought on that day</span></div><div class='log-row'><span class='log-tag log-fixed'>Fixed</span><span class='log-text'>Purchase activity heatmap: month labels (Jan, Feb, ...) were squeezed into cells too narrow for the text, so they could visually run into each other</span></div></div></div><div class='log-entry'><div class='log-head'><h3 class='log-title'>1.07.0 | Jul 27, 2026</h3><span class='log-rule'></span></div><div class='log-table'><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>A small banner on the dashboard when today matches the purchase date of a game from a previous year, like \"3 years ago today, you bought Hades\"</span></div><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>A purchase activity heatmap in Year in Review, showing which days you bought games across the year</span></div><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>\"View as Wrapped\" in Year in Review - a slide-by-slide summary of your year (total spent, games bought, favourite platform, priciest purchase, first game of the year, busiest month, completion rate), each slide downloadable as an image</span></div></div></div><div class='log-entry'><div class='log-head'><h3 class='log-title'>1.06.4 | Jul 26, 2026</h3><span class='log-rule'></span></div><div class='log-table'><div class='log-row'><span class='log-tag log-fixed'>Fixed</span><span class='log-text'>Rare crash where a slow-loading chart library could break unrelated parts of the app, like the Playtime tab</span></div></div></div><div class='log-entry'><div class='log-head'><h3 class='log-title'>1.06.3 | Jul 26, 2026</h3><span class='log-rule'></span></div><div class='log-table'><div class='log-row'><span class='log-tag log-fixed'>Fixed</span><span class='log-text'>Uneven row heights when a game title wraps onto multiple lines</span></div><div class='log-row'><span class='log-tag log-fixed'>Fixed</span><span class='log-text'>Login/account screen not centering properly next to the feature cards</span></div></div></div><div class='log-entry'><div class='log-head'><h3 class='log-title'>1.06.2 | Jul 26, 2026</h3><span class='log-rule'></span></div><div class='log-table'><div class='log-row'><span class='log-tag log-fixed'>Fixed</span><span class='log-text'>Gaps in the homepage feature-card grid so it fills evenly at every screen size</span></div></div></div><div class='log-entry'><div class='log-head'><h3 class='log-title'>1.06.1 | Jul 26, 2026</h3><span class='log-rule'></span></div><div class='log-table'><div class='log-row'><span class='log-tag log-fixed'>Fixed</span><span class='log-text'>\"Advanced filters\" button not lining up with the rest of the toolbar</span></div></div></div><div class='log-entry'><div class='log-head'><h3 class='log-title'>1.06.0 | Jul 26, 2026</h3><span class='log-rule'></span></div><div class='log-table'><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>\"Smart import\" - paste your Steam purchase history (or any receipt/order list) and review detected games before adding them</span></div><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Added a social preview image and description for shared links</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Digital/Physical badge redesigned as a proper chip</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Buttons like \"Advanced filters\" and \"Add multiple games\" now have a visible border</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Row striping in the table is now actually visible</span></div><div class='log-row'><span class='log-tag log-fixed'>Fixed</span><span class='log-text'>\"Ownership\" and \"Purchase date\" columns being wrongly right-aligned</span></div></div></div><div class='log-entry'><div class='log-head'><h3 class='log-title'>1.05.0 | Jul 26, 2026</h3><span class='log-rule'></span></div><div class='log-table'><div class='log-row'><span class='log-tag log-fixed'>Fixed</span><span class='log-text'>Login/account card sitting too high on tall screens instead of centering</span></div><div class='log-row'><span class='log-tag log-fixed'>Fixed</span><span class='log-text'>Inconsistent letter-spacing across labels and badges</span></div></div></div><div class='log-entry'><div class='log-head'><h3 class='log-title'>1.04.0 | Jul 26, 2026</h3><span class='log-rule'></span></div><div class='log-table'><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Added error monitoring</span></div><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Added a loading skeleton and a retry option if the library fails to load</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Deleting a game is now instant with an \"Undo\" option, instead of a confirmation popup</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Backlog Wallet can now be installed as an app, with basic offline support</span></div></div></div><div class='log-entry'><div class='log-head'><h3 class='log-title'>1.03.2 | Jul 26, 2026</h3><span class='log-rule'></span></div><div class='log-table'><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Added an explanation for the \"Hours already cleared\" progress bar</span></div></div></div><div class='log-entry'><div class='log-head'><h3 class='log-title'>1.03.1 | Jul 26, 2026</h3><span class='log-rule'></span></div><div class='log-table'><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Completion level can now be set directly from the list</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Completed games without a level set now count towards progress</span></div></div></div><div class='log-entry'><div class='log-head'><h3 class='log-title'>1.03.0 | Jul 26, 2026</h3><span class='log-rule'></span></div><div class='log-table'><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Bulk-fetch HowLongToBeat times for your whole library, with a progress bar</span></div></div></div><div class='log-entry'><div class='log-head'><h3 class='log-title'>1.02.1 | Jul 26, 2026</h3><span class='log-rule'></span></div><div class='log-table'><div class='log-row'><span class='log-tag log-fixed'>Fixed</span><span class='log-text'>HowLongToBeat proxy field rejecting local addresses</span></div></div></div><div class='log-entry'><div class='log-head'><h3 class='log-title'>1.02.0 | Jul 26, 2026</h3><span class='log-rule'></span></div><div class='log-table'><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Year in Review can now compare two years side by side</span></div><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>\"Playtime\" tab showing total completion time across your library</span></div><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Track HowLongToBeat times and completion level per game</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Complete visual redesign - new colors, fonts and layout</span></div></div></div><div class='log-entry'><div class='log-head'><h3 class='log-title'>1.01.0 | Jul 24, 2026</h3><span class='log-rule'></span></div><div class='log-table'><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Monthly spending counter with a percentage change vs last month</span></div></div></div><div class='log-entry'><div class='log-head'><h3 class='log-title'>1.00.1 | Jul 20, 2026</h3><span class='log-rule'></span></div><div class='log-table'><div class='log-row'><span class='log-tag log-fixed'>Fixed</span><span class='log-text'>Bug from 1.00.0 that broke the entire site</span></div></div></div><div class='log-entry'><div class='log-head'><h3 class='log-title'>1.00.0 | Jul 20, 2026</h3><span class='log-rule'></span></div><div class='log-table'><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Full redesign - new look, fixed desktop sidebar, better contrast</span></div><div class='log-row'><span class='log-tag log-fixed'>Fixed</span><span class='log-text'>Page-width bug causing a horizontal scrollbar</span></div><div class='log-row'><span class='log-tag log-fixed'>Fixed</span><span class='log-text'>Home page content being misaligned on desktop</span></div></div></div><div class='log-entry'><div class='log-head'><h3 class='log-title'>0.09.1 | Jul 17, 2026</h3><span class='log-rule'></span></div><div class='log-table'><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Bulk-edit game status for multiple selected games at once</span></div><div class='log-row'><span class='log-tag log-fixed'>Fixed</span><span class='log-text'>Backlog Health score calculation</span></div></div></div><div class='log-entry'><div class='log-head'><h3 class='log-title'>0.09.0 | Jul 17, 2026</h3><span class='log-rule'></span></div><div class='log-table'><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>\"Backlog Health\" score</span></div><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Two more game statuses (Endless, Won't play)</span></div><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Import data from a JSON backup</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Account deletion now backs up your data first automatically</span></div><div class='log-row'><span class='log-tag log-fixed'>Fixed</span><span class='log-text'>Nickname login</span></div></div></div><div class='log-entry'><div class='log-head'><h3 class='log-title'>0.08.1 | Jul 17, 2026</h3><span class='log-rule'></span></div><div class='log-table'><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>\"Endless game\" and \"Won't play\" statuses</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>\"What to play?\" now only picks unplayed games</span></div></div></div><div class='log-entry'><div class='log-head'><h3 class='log-title'>0.08.0 | Jul 17, 2026</h3><span class='log-rule'></span></div><div class='log-table'><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>\"What to play?\" random game picker</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>More achievement tiers, plus 3 new badges</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Visual refresh - clearer contrast and borders</span></div><div class='log-row'><span class='log-tag log-fixed'>Fixed</span><span class='log-text'>Price filter using the wrong currency</span></div></div></div><div class='log-entry'><div class='log-head'><h3 class='log-title'>0.07.4 | Jul 16, 2026</h3><span class='log-rule'></span></div><div class='log-table'><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Achievements tab</span></div><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Duplicate detection when adding games</span></div><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Advanced filters by price and purchase date</span></div></div></div><div class='log-entry'><div class='log-head'><h3 class='log-title'>0.07.3 | Jul 15, 2026</h3><span class='log-rule'></span></div><div class='log-table'><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Restored \"Key Store\" as a purchase source</span></div></div></div><div class='log-entry'><div class='log-head'><h3 class='log-title'>0.07.2 | Jul 15, 2026</h3><span class='log-rule'></span></div><div class='log-table'><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Long titles on the virtual shelf no longer get cut off</span></div><div class='log-row'><span class='log-tag log-fixed'>Fixed</span><span class='log-text'>Checkbox alignment in the table</span></div></div></div><div class='log-entry'><div class='log-head'><h3 class='log-title'>0.07.1 | Jul 15, 2026</h3><span class='log-rule'></span></div><div class='log-table'><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Various fixes: translations, checkbox size, scrollable side menu</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Redesigned the virtual shelf to look like a real shelf</span></div></div></div><div class='log-entry'><div class='log-head'><h3 class='log-title'>0.07.0 | Jul 15, 2026</h3><span class='log-rule'></span></div><div class='log-table'><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Savings Goals tab</span></div><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Digital/physical format per game</span></div><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Bulk editing for format and purchase source</span></div></div></div><div class='log-entry'><div class='log-head'><h3 class='log-title'>0.06.1 | Jul 15, 2026</h3><span class='log-rule'></span></div><div class='log-table'><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Removed Google AdSense</span></div><div class='log-row'><span class='log-tag log-fixed'>Fixed</span><span class='log-text'>Language menu position, top-menu overflow, and a country-saving bug</span></div></div></div><div class='log-entry'><div class='log-head'><h3 class='log-title'>0.06.0 | Jul 13, 2026</h3><span class='log-rule'></span></div><div class='log-table'><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Shareable public library link</span></div><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Year in Review shareable card</span></div><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Optional completion status per game</span></div></div></div><div class='log-entry'><div class='log-head'><h3 class='log-title'>0.05.0 | Jul 13, 2026</h3><span class='log-rule'></span></div><div class='log-table'><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Added PlayStation, Xbox, Nintendo, GOG and Epic Games as sources</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Email confirmation now required at registration</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Major homepage redesign</span></div><div class='log-row'><span class='log-tag log-fixed'>Fixed</span><span class='log-text'>Chart readability issues</span></div></div></div><div class='log-entry'><div class='log-head'><h3 class='log-title'>0.04.1 | Jul 13, 2026</h3><span class='log-rule'></span></div><div class='log-table'><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Added sorting by date and alphabetically</span></div><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Added nickname login</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Removed emoji avatars</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Default language is now English</span></div></div></div><div class='log-entry'><div class='log-head'><h3 class='log-title'>0.04.0 | Jul 12, 2026</h3><span class='log-rule'></span></div><div class='log-table'><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>New tagline and homepage design</span></div><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Added emoji avatar personalisation</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Renamed to Backlog Wallet</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Expanded FAQ and privacy policy</span></div></div></div><div class='log-entry'><div class='log-head'><h3 class='log-title'>0.03.1 | Jul 12, 2026</h3><span class='log-rule'></span></div><div class='log-table'><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Ranking tab</span></div><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Added basic protection against junk game names</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Expanded currency choice to all 20 currencies</span></div></div></div><div class='log-entry'><div class='log-head'><h3 class='log-title'>0.03.0 | Jul 11, 2026</h3><span class='log-rule'></span></div><div class='log-table'><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Full tracker now requires a free account</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Light/dark theme toggle</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>GDPR-compliant data export and deletion</span></div></div></div><div class='log-entry'><div class='log-head'><h3 class='log-title'>0.02.4 | Jul 11, 2026</h3><span class='log-rule'></span></div><div class='log-table'><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Minor bug fixes and UX improvements</span></div></div></div><div class='log-entry'><div class='log-head'><h3 class='log-title'>0.02.3 | Jul 11, 2026</h3><span class='log-rule'></span></div><div class='log-table'><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Added password change option</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Replaced the Steam logo with a neutral icon</span></div><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Expanded currency choice</span></div></div></div><div class='log-entry'><div class='log-head'><h3 class='log-title'>0.02.2 | Jul 11, 2026</h3><span class='log-rule'></span></div><div class='log-table'><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Added a quick language switcher</span></div><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Exchange Rates tab</span></div><div class='log-row'><span class='log-tag log-fixed'>Fixed</span><span class='log-text'>Mobile expand/collapse bug</span></div></div></div><div class='log-entry'><div class='log-head'><h3 class='log-title'>0.02.1 | Jul 11, 2026</h3><span class='log-rule'></span></div><div class='log-table'><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Added bulk adding of games</span></div><div class='log-row'><span class='log-tag log-new'>New</span><span class='log-text'>Added a filter by purchase source</span></div><div class='log-row'><span class='log-tag log-fixed'>Fixed</span><span class='log-text'>Language-detection bug</span></div></div></div><div class='log-entry'><div class='log-head'><h3 class='log-title'>0.02.0</h3><span class='log-rule'></span></div><div class='log-table'><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Major rebuild - side menu, accounts, charts, mobile support</span></div></div></div><div class='log-entry'><div class='log-head'><h3 class='log-title'>0.01.0</h3><span class='log-rule'></span></div><div class='log-table'><div class='log-row'><span class='log-tag log-changed'>Changed</span><span class='log-text'>Initial release</span></div></div></div>",
        donateHtml: "<h3>Support the project</h3><p>This app is free and made as a hobby. If you find it useful, you can buy the author a coffee.</p><p><a href='https://buymeacoffee.com/' target='_blank' rel='noopener'><i class='fa-solid fa-mug-hot'></i> Buy Me a Coffee</a></p><p><a href='https://ko-fi.com/' target='_blank' rel='noopener'><i class='fa-solid fa-heart'></i> Ko-fi</a></p><p>Thank you for any support!</p>",
        termsHtml: "<p><em>Last updated: 12 November 2026</em></p><h3>1. General</h3><p>These Terms govern the use of Backlog Wallet (the \"App\"). By creating an account or using the App you accept them. How we handle personal data is described in the <a href='#' onclick=\"showView('privacy'); return false;\">Privacy Policy</a>.</p><h3>2. The service</h3><p>The App is a free tool for personal tracking of video game purchases, built and run by an individual as a hobby project. It is not affiliated with, endorsed by or connected to Valve Corporation, Steam or any other store or platform named in it; those names are used only to describe where you bought a game.</p><h3>3. Who can use it</h3><p>You must be at least 16 years old to create an account. An account is required to use the App.</p><h3>4. Your account</h3><p>Give a working e-mail address and keep your password confidential; you are responsible for activity under your account. One person, one account. You can delete your account and data yourself at any time in \"Your account\".</p><h3>5. Nicknames and shared content</h3><p>Your nickname can be shown publicly if you join the ranking or share your library. Do not use a nickname or enter content that is unlawful, offensive, misleading, impersonates someone else or contains other people's personal data. We may change or remove such content.</p><h3>6. Acceptable use</h3><ul><li>No unlawful use.</li><li>No attempts to compromise the security of the App or its infrastructure, to scrape it at scale, to overload it or to manipulate the ranking.</li><li>You are responsible for the data you enter.</li></ul><h3>7. Suspension and termination</h3><p>We may suspend or delete an account that breaks these Terms or harms the App or other users, normally after notifying you at your e-mail address unless that is not possible or appropriate. You may stop using the App and delete your account at any time.</p><h3>8. Availability and changes to the App</h3><p>The App is provided as a hobby project without a guaranteed level of availability. Features may change or be removed, or the service may be discontinued; we will try to announce this in advance and you can export your data at any time.</p><h3>9. Third-party services and donations</h3><p>Currency rates and some other parts of the App come from third parties and may be inaccurate or unavailable. Donations through Buy Me a Coffee or Ko-fi are voluntary, are handled by those services and give no additional rights or features.</p><h3>10. Ownership</h3><p>The App's design and code belong to its author. Your data remains yours; you allow us to store and process it only to run the App for you.</p><h3>11. Liability</h3><p>The App is provided \"as is\". To the extent the law allows, we are not liable for data loss or for indirect losses. Nothing in these Terms limits liability that cannot be limited by law, such as liability for intent or gross negligence or for injury to life, body or health, or your mandatory rights as a consumer.</p><h3>12. Changes to these Terms</h3><p>We may update these Terms. The date at the top shows the latest version and significant changes are listed in the changelog. If you do not agree to a change, you can delete your account; continuing to use the App after the change means you accept it.</p><h3>13. Governing law</h3><p>These Terms are governed by the law of the country where the administrator is established, without depriving you of the mandatory consumer protection of the country where you live.</p><h3>14. Contact</h3><p>Questions about these Terms: <a href='mailto:info@backlogwallet.com'>info@backlogwallet.com</a> or the Feedback &amp; contact page.</p>",
        privacyHtml: "<p><em>Last updated: 12 November 2026</em></p><div class='policy-summary'><strong>In short</strong><ul><li>We keep your e-mail, nickname and game library so the app can sync them between your devices.</li><li>Nothing is sold. No ads, no analytics, no tracking cookies.</li><li>The public ranking and the public link are off until you switch them on.</li><li>Google (Firebase) stores the data; Cloudflare and GitHub host the site.</li><li>You can export or delete everything yourself under Your account, or write to info@backlogwallet.com.</li></ul><p>The full text follows.</p></div><h3>1. Who is responsible</h3><p>Backlog Wallet is a small, non-commercial project run by an individual developer, who is the data controller for the personal data described here. You can reach us at <a href='mailto:info@backlogwallet.com'>info@backlogwallet.com</a> or through the Feedback &amp; contact page.</p><h3>2. What data we process</h3><ul><li><strong>Account:</strong> your e-mail address, your password (handled by Firebase Authentication; we never see it in plain text), your nickname, your library, savings goals, display settings (currency, theme), the date you registered, whether your e-mail is verified, and the time you accepted these terms. A record linking your nickname to your e-mail address is kept so that you can log in with your nickname and so that nicknames stay unique.</li><li><strong>Public ranking (optional, off by default):</strong> only if you switch it on in your account, your nickname, the total value of your library in EUR and your number of games are shown to everyone on the Ranking page.</li><li><strong>Public sharing (optional, off by default):</strong> only if you switch it on, anyone who has your link can see your nickname and game list (never your e-mail).</li><li><strong>Feedback form:</strong> the subject and message you type (and the e-mail address, if you give one) are sent to us by e-mail through Web3Forms. Please do not include sensitive data.</li><li><strong>Visit counter:</strong> we count how many sessions start per day. The counter is a single number per day and contains no personal data.</li><li><strong>Server logs:</strong> our hosting providers (Cloudflare and GitHub) process technical request data such as your IP address and browser type to deliver and protect the site. We do not have access to these logs for profiling.</li><li><strong>What we do not do:</strong> we do not use analytics, advertising or tracking tools, we do not build profiles, and we make no automated decisions about you. Since version 1.8.11 we no longer determine your country from your IP address; a value stored earlier is deleted automatically the next time you log in.</li></ul><h3>3. Cookies and local storage</h3><p>The site sets no tracking or advertising cookies. It uses your browser's local storage (and, for the login session, the storage of the Firebase Authentication library) only for technical purposes you asked for or that are needed to run the app: theme, currency, your \"remember me\" choice, dismissed hints, menu state, a short anti-spam timer, the fact that you have seen the storage notice, your login session and, for the visit counter, a one-session flag. Because this storage is strictly necessary or requested by you, no consent banner is required; the notice only informs you. You can clear it at any time in your browser settings, or right here: <a href='#' onclick='clearLocalData(); return false;'>clear local data on this device</a> (this removes everything this site has saved on this device and signs you out; your account data is not affected).</p><h3>4. Services we use and who receives data</h3><ul><li><strong>Google (Firebase Authentication and Cloud Firestore):</strong> stores accounts and libraries.</li><li><strong>Cloudflare:</strong> DNS and security proxy in front of the site. <strong>GitHub (GitHub Pages):</strong> hosts the site files.</li><li><strong>Web3Forms:</strong> forwards feedback messages to our inbox.</li><li><strong>Resources loaded by your browser:</strong> the charts library from jsDelivr, the Firebase code from Google (gstatic.com) and currency rates from open.er-api.com. When the page loads, these providers receive your IP address and basic browser information, as with any website resource.</li><li><strong>Buy Me a Coffee and Ko-fi:</strong> only if you click a donation link; their own privacy policies then apply.</li></ul><p>We do not sell your data and do not share it for marketing. Your data is not made public except through the optional ranking and sharing features above.</p><h3>5. Legal bases (GDPR)</h3><ul><li><strong>Contract (Art. 6(1)(b)):</strong> running your account and syncing your library.</li><li><strong>Consent (Art. 6(1)(a)):</strong> the public ranking and public sharing. You can withdraw consent at any time by switching the option off; the ranking entry is then deleted.</li><li><strong>Legitimate interest (Art. 6(1)(f)):</strong> keeping the site secure and available, preventing abuse, the aggregated visit counter, loading the third-party resources listed above, and answering your messages.</li></ul><h3>6. How long we keep data</h3><p>Account and library data: until you delete your account. Ranking entry: until you switch it off or delete your account. Deleting your account from \"Your account\" removes your profile, library, ranking entry and nickname record; copies may remain in provider backups for a limited period under the provider's own rules. Feedback e-mails: up to 12 months after your last message, then they are deleted. Local browser data: until you clear it.</p><h3>7. International transfers</h3><p>Google, Cloudflare, GitHub and Web3Forms may process data outside the EEA/Switzerland, including in the United States. Where this happens we rely on the provider's safeguards, such as the EU-US Data Privacy Framework certification and/or Standard Contractual Clauses.</p><h3>8. Your rights</h3><p>You have the right to access, rectify, erase and port your data, to restrict or object to processing, and to withdraw consent. Export and deletion are available to you directly in \"Your account\"; for anything else write to <a href='mailto:info@backlogwallet.com'>info@backlogwallet.com</a> and we will answer within one month. You may complain to the data-protection supervisory authority in your country of residence (for example UODO in Poland, the FDPIC in Switzerland).</p><h3>9. Age</h3><p>The App is not intended for children. You must be at least 16 years old to create an account.</p><h3>10. Security</h3><p>Data is transmitted over HTTPS and stored with Firebase's security features and access rules; no method of transmission or storage is 100% secure.</p><h3>11. Changes</h3><p>If we change this policy, the date at the top is updated and significant changes are listed in the changelog.</p>",
    }
};

let currentLang = 'en';
let games = [];
let globalTotalChf = 0;
let mainChart = null;
let editingIndex = -1;
let selectedGames = new Set();
let wishGoals = [];
let currentUser = null;
let userProfile = { nickname: '', currency: '', theme: '' };
let myRegisteredAt = null;
let banGateActive = false;
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
    if (!/[a-zA-ZÀ-ž\u0400-\u04FF\u4e00-\u9fff\u3040-\u30ff\uac00-\ud7a3]/.test(n)) return true; // no letters at all
    if (/^(.)\1{3,}$/.test(n.replace(/\s/g, ''))) return true; // np. "aaaaaa"
    const words = n.toLowerCase().split(/\s+/).filter(Boolean);
    if (words.length >= 2 && new Set(words).size === 1) return true; // np. "dupa dupa dupa"
    if (/^[^a-zA-ZÀ-ž\u0400-\u04FF]{0,3}(asdf|qwerty|test123|lorem|xxx+|dupa|zzz+)/i.test(n)) return true;
    if (containsBannedTerm(n)) return true;
    return false;
}

const MAX_PRICE_CHF = 2000;
function findDuplicateIndex(name, excludeIndex) {
    const norm = (name || '').trim().toLowerCase();
    if (!norm) return -1;
    return games.findIndex((g, i) => i !== excludeIndex && (g.name || '').trim().toLowerCase() === norm);
}

function isPriceTooHigh(price, currency) {
    const chf = price * (rates[currency] || 1);
    return chf > MAX_PRICE_CHF;
}

const desktopNavQuery = window.matchMedia('(min-width: 860px)');
// on desktop the menu is a permanent strip, on mobile it is a panel that slides in
function syncDrawerA11y() {
    const d = $('drawer');
    if (!d) return;
    const open = d.classList.contains('open');
    if (desktopNavQuery.matches) { d.removeAttribute('aria-hidden'); d.inert = false; }
    else { d.setAttribute('aria-hidden', String(!open)); d.inert = !open; }
    const mb = $('menuBtn');
    if (mb) mb.setAttribute('aria-expanded', String(open && !desktopNavQuery.matches));
}
function toggleDrawer(open) {
    const wasOpen = $('drawer').classList.contains('open');
    $('drawer').classList.toggle('open', open);
    $('drawerOverlay').classList.toggle('show', open);
    syncDrawerA11y();
    if (!desktopNavQuery.matches) {
        if (open && !wasOpen) { const c = document.querySelector('#drawer .drawer-close'); if (c) c.focus(); }
        else if (!open && wasOpen && $('drawer').contains(document.activeElement)) { const mb = $('menuBtn'); if (mb) mb.focus(); }
    }
}
if (desktopNavQuery.addEventListener) desktopNavQuery.addEventListener('change', syncDrawerA11y);
document.addEventListener('DOMContentLoaded', syncDrawerA11y);
document.addEventListener('keydown', e => { if (e.key === 'Escape') toggleDrawer(false); });

function showView(view) {
    try { renderStoredSummary(); } catch (e) {}
    if (view === 'yearreview') ensureCanvasFonts();
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    $('view-' + view).classList.add('active');
    document.querySelectorAll('.nav-item').forEach(b => {
        const on = b.dataset.view === view;
        b.classList.toggle('active', on);
        if (on) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current');
    });
    document.querySelectorAll('.nav-dropdown').forEach(d => {
        const grp = d.querySelector('.nav-group');
        const toggle = d.querySelector('.nav-section-toggle');
        if (toggle) toggle.classList.toggle('has-active', !!(grp && grp.querySelector('.nav-item.active')));
        d.classList.remove('dropdown-open');
    });
    toggleDrawer(false);
    window.scrollTo({ top: 0 });
    if (view === 'feedback') setFeedbackMsg('', true);
    if (view === 'ranking') renderRanking();
    if (view === 'yearreview') initYearReview();
    if (view === 'goals') renderGoals();
    if (view === 'shelf') renderShelf();
    if (view === 'achievements') renderAchievements();
    if (view === 'roulette') { $('rouletteResult').innerHTML = ''; rouletteLastPickIdx = -1; clearInterval(rouletteSpinTimer); }
    if (view === 'admin' && isAdmin()) loadAdminPanel();
}


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
    document.documentElement.dir = 'ltr';
    document.documentElement.lang = lang;

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
let fullRatesFromChf = null; // full set of rates fetched from the API (CHF base)

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
            fullRatesFromChf = data.rates;
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
    badge.className = 'sync-badge tb-r tb-desktop ' + state;
    let icon = '<i class="fa-solid fa-hard-drive"></i>';
    if (state === 'success') icon = '<i class="fa-solid fa-cloud"></i>';
    else if (state === 'error') icon = '<i class="fa-solid fa-triangle-exclamation"></i>';
    else if (state === 'loading') icon = '<i class="fa-solid fa-spinner fa-spin"></i>';
    badge.innerHTML = icon + ' <span id="badgeText">' + t(textKey) + '</span>';
    lastBadgeState = state;
    syncAcctUI();
}
let lastBadgeState = 'offline';

// Show a readable banner with a retry button instead of a silent failure that only appears in the badge.
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

// nobody is signed in: the library lives in the account, so there is nothing to show
function clearSessionData() {
    syncBase = null; pendingSave = false; clearTimeout(saveRetryTimer);
    games = [];
    wishGoals = [];
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
        banGateActive = false;
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
        rankingOptIn = (doc.exists && doc.data().rankingOptIn === true);
        userMeta = doc.exists ? { registeredAt: doc.data().registeredAt || null, termsAcceptedAt: doc.data().termsAcceptedAt || null, termsVersion: doc.data().termsVersion || null } : {};
        rankingCleaned = false;
        updatePublicShareUI();
        updateRankingUI();

        // fill it in from Firebase Auth metadata (available for every account, whenever it was
        // created), so it shows up both on the user account and in the admin panel
        const authCreatedAt = (currentUser.metadata && currentUser.metadata.creationTime) ? new Date(currentUser.metadata.creationTime).toISOString() : null;
        myRegisteredAt = (doc.exists && doc.data().registeredAt) ? doc.data().registeredAt : authCreatedAt;
        updateAccountMetaUI();
        if (doc.exists && !doc.data().registeredAt && authCreatedAt) {
            db.collection('users').doc(currentUser.uid).set({ registeredAt: authCreatedAt }, { merge: true }).catch(() => {});
        }

        // saved properly at registration (e.g. a brief write error), we recreate it on every
        // successful e-mail login, so nickname login starts working without any action from the user
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

        // the registration country is no longer collected (v1.8.11); drop any value stored earlier
        if (doc.exists && doc.data().regCountry) {
            db.collection('users').doc(currentUser.uid).update({ regCountry: firebase.firestore.FieldValue.delete() }).catch(() => {});
        }

        // a library kept in this browser by an older version is merged into the account once
        const guest = JSON.parse(localStorage.getItem('guestGames') || '[]');
        localStorage.removeItem('guestWishGoals');
        if (guest.length > 0) {
            const seen = new Set(cloudGames.map(g => g.name + '|' + g.date + '|' + g.price));
            guest.forEach(g => { if (!seen.has(g.name + '|' + g.date + '|' + g.price)) cloudGames.push(g); });
            localStorage.removeItem('guestGames');
            await db.collection('users').doc(currentUser.uid).set({ games: cloudGames, profile: userProfile }, { merge: true });
        }

        ensureGameIds(cloudGames);
        syncBase = takeSnapshot(cloudGames, wishGoals, userProfile);
        games = cloudGames;
        restorePendingBackup();
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
    updateLeaderboardEntry();
}

// ---------------------------------------------------------------------------
// Saving to the cloud, safely.
//  - every game has an id, so changes made on two devices can be merged instead of one
//    device overwriting the other (three-way merge against the last synced state)
//  - a save that fails is kept (in this browser too) and retried; leaving the page warns you
//  - when you come back to a tab, changes from your other device are picked up
// ---------------------------------------------------------------------------
let syncBase = null;          // snapshot of what the cloud held at the last successful sync
let pendingSave = false;      // local changes that are not in the cloud yet
let saving = false, saveQueued = false, localRev = 0, saveRetryTimer = null, saveRetries = 0, lastCloudCheck = 0;

function newGameId() { return 'g' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8); }

// ids for libraries saved before ids existed: derived from the game itself, so two devices agree
function ensureGameIds(list) {
    const seen = {};
    list.forEach(g => {
        if (!g || g.id) return;
        const s = [g.name, g.date, g.price, g.currency, g.source].join('|');
        let h = 5381;
        for (let i = 0; i < s.length; i++) h = ((h * 33) ^ s.charCodeAt(i)) >>> 0;
        const k = h.toString(36);
        seen[k] = (seen[k] || 0) + 1;
        g.id = 'l' + k + '-' + seen[k];
    });
}

function gameSig(g) { return JSON.stringify(Object.keys(g).sort().map(k => [k, g[k]])); }
function gamesSig(list) { return JSON.stringify(list.map(gameSig)); }
function takeSnapshot(g, w, p) { return JSON.parse(JSON.stringify({ games: g, wishGoals: w, profile: p })); }

// base = state at last sync, local = what this device has now, remote = what the cloud has now
function mergeGames(base, local, remote) {
    const idx = (arr) => { const m = new Map(); arr.forEach(g => { if (g && g.id) m.set(g.id, g); }); return m; };
    const B = idx(base), L = idx(local), Rm = idx(remote);
    const out = [];
    remote.forEach(r => {
        if (!L.has(r.id)) {
            // not on this device: either we deleted it or it is new from the other device
            if (B.has(r.id) && gameSig(B.get(r.id)) === gameSig(r)) return;   // deleted here, untouched there: stays deleted
            out.push(r); return;                                               // new there, or edited there after we deleted: keep
        }
        const l = L.get(r.id);
        if (!B.has(r.id)) { out.push(l); return; }
        out.push(gameSig(B.get(r.id)) !== gameSig(l) ? l : r);                 // edited here wins, otherwise take the cloud copy
    });
    local.forEach(l => {
        if (!l.id || Rm.has(l.id)) return;
        if (B.has(l.id) && gameSig(B.get(l.id)) === gameSig(l)) return;        // deleted on the other device, untouched here
        out.push(l);                                                           // new here, or edited here after the other device deleted it
    });
    return out;
}

function pendingKey() { return currentUser ? 'bwPending:' + currentUser.uid : null; }
function writePendingBackup() {
    const k = pendingKey();
    if (!k || !syncBase) return;
    try { localStorage.setItem(k, JSON.stringify({ ts: Date.now(), base: syncBase, games, wishGoals, profile: userProfile })); } catch (e) {}
}
function clearPendingBackup() { const k = pendingKey(); if (k) { try { localStorage.removeItem(k); } catch (e) {} } }

// unsaved changes from an earlier visit (tab closed or offline) are merged back in after login
function restorePendingBackup() {
    const k = pendingKey();
    if (!k) return;
    let b = null;
    try { b = JSON.parse(localStorage.getItem(k) || 'null'); } catch (e) {}
    if (!b || !b.base || !Array.isArray(b.games)) { clearPendingBackup(); return; }
    ensureGameIds(b.games);
    const changed = gamesSig(b.games) !== gamesSig(b.base.games || []) ||
        JSON.stringify(b.wishGoals) !== JSON.stringify(b.base.wishGoals) ||
        JSON.stringify(b.profile) !== JSON.stringify(b.base.profile);
    if (!changed) { clearPendingBackup(); return; }
    const merged = gamesSig(games) === gamesSig(b.base.games || []) ? b.games : mergeGames(b.base.games || [], b.games, games);
    games.splice(0, games.length, ...merged);
    if (Array.isArray(b.wishGoals) && JSON.stringify(b.wishGoals) !== JSON.stringify(b.base.wishGoals)) wishGoals = b.wishGoals;
    if (b.profile && JSON.stringify(b.profile) !== JSON.stringify(b.base.profile)) userProfile = b.profile;
    pendingSave = true;
    setTimeout(() => { showToastText(t('syncRestored')); persistData(); }, 400);
}

function scheduleSaveRetry() {
    clearTimeout(saveRetryTimer);
    if (saveRetries >= 6) return;
    const wait = Math.min(120000, 8000 * Math.pow(2, saveRetries));
    saveRetries++;
    saveRetryTimer = setTimeout(() => { if (pendingSave && !saving) persistData(); }, wait);
}

async function persistData() {
    if (!(currentUser && db)) {
        return;
    }
    ensureGameIds(games);
    localRev++;
    pendingSave = true;
    writePendingBackup();
    if (saving) { saveQueued = true; return; }
    saving = true;
    try {
        do {
            saveQueued = false;
            await saveToCloudOnce();
        } while (saveQueued);
    } finally {
        saving = false;
    }
}

async function saveToCloudOnce() {
    const startRev = localRev;
    setBadge('loading', 'syncSyncing');
    try {
        const ref = db.collection('users').doc(currentUser.uid);
        const result = await db.runTransaction(async (tx) => {
            const snap = await tx.get(ref);
            const remote = snap.exists ? snap.data() : {};
            const remoteGames = Array.isArray(remote.games) ? remote.games : [];
            ensureGameIds(remoteGames);
            let out = games;
            let merged = false;
            if (syncBase && gamesSig(remoteGames) !== gamesSig(syncBase.games)) {
                out = mergeGames(syncBase.games, games, remoteGames);
                merged = gamesSig(out) !== gamesSig(games);
            }
            const payload = { games: out };
            if (!syncBase || JSON.stringify(wishGoals) !== JSON.stringify(syncBase.wishGoals)) payload.wishGoals = wishGoals;
            if (!syncBase || JSON.stringify(userProfile) !== JSON.stringify(syncBase.profile)) payload.profile = userProfile;
            tx.set(ref, payload, { merge: true });
            return { out, merged };
        });
        if (localRev !== startRev) {
            // edited again while saving: leave the baseline alone and save once more, which merges again
            saveQueued = true;
            return;
        }
        if (result.merged) {
            games.splice(0, games.length, ...result.out);
            selectedGames.clear();
            if (editingIndex > -1) cancelEdit();
            renderTable();
            showToastText(t('syncMerged'));
        } else {
            showToast('savedCloud');
        }
        syncBase = takeSnapshot(games, wishGoals, userProfile);
        pendingSave = false; saveRetries = 0; clearTimeout(saveRetryTimer);
        clearPendingBackup();
        setBadge('success', 'syncCloud');
        updateLeaderboardEntry();
    } catch (e) {
        console.warn('save failed', e && e.code);
        setBadge('error', 'syncErr');
        showToastText(t('savePending'));
        scheduleSaveRetry();
    }
}

// picking up changes made on another device when you come back to this tab
async function refreshFromCloud() {
    if (!currentUser || !db || !syncBase || saving || pendingSave || editingIndex > -1) return;
    if (Date.now() - lastCloudCheck < 30000) return;
    lastCloudCheck = Date.now();
    try {
        const doc = await db.collection('users').doc(currentUser.uid).get();
        if (!doc.exists || saving || pendingSave || editingIndex > -1) return;
        const remoteGames = Array.isArray(doc.data().games) ? doc.data().games : [];
        ensureGameIds(remoteGames);
        if (gamesSig(games) !== gamesSig(syncBase.games)) return;                 // unsaved local changes: the next save merges
        if (gamesSig(remoteGames) === gamesSig(syncBase.games)) return;           // nothing new
        games.splice(0, games.length, ...remoteGames);
        if (Array.isArray(doc.data().wishGoals)) wishGoals = doc.data().wishGoals;
        syncBase = takeSnapshot(games, wishGoals, userProfile);
        selectedGames.clear();
        renderTable(); renderGoals();
        showToastText(t('syncRefreshed'));
    } catch (e) { /* stay quiet, the next save merges anyway */ }
}
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') refreshFromCloud(); });
window.addEventListener('online', () => { if (pendingSave && !saving && currentUser && db) { saveRetries = 0; persistData(); } });
window.addEventListener('beforeunload', (e) => { if (pendingSave && currentUser) { e.preventDefault(); e.returnValue = ''; } });

let authMode = 'login';
let authFormShownAt = 0;

function setAuthMode(mode, silent) {
    authMode = mode;
    if ($('authPass') && $('authPass').type === 'text') toggleAuthPeek();
    document.querySelectorAll('.auth-tab').forEach(b => b.classList.toggle('active', b.dataset.mode === mode));
    $('passGroup').style.display = (mode === 'reset') ? 'none' : '';
    $('authPass').required = (mode !== 'reset');
    $('rememberGroup').style.display = (mode === 'login') ? '' : 'none';
    if ($('nicknameGroup')) $('nicknameGroup').style.display = (mode === 'register') ? '' : 'none';
    if ($('regConsentGroup')) $('regConsentGroup').style.display = (mode === 'register') ? '' : 'none';
    if ($('regPassHint')) $('regPassHint').style.display = (mode === 'register') ? 'block' : 'none';
    if ($('authNickname')) $('authNickname').required = (mode === 'register');
    if ($('authEmailLabel')) $('authEmailLabel').textContent = (mode === 'login') ? t('emailOrNickname') : t('email');
    if ($('authEmail')) $('authEmail').type = (mode === 'login') ? 'text' : 'email';
    const btnSpan = $('authSubmitBtn').querySelector('span');
    btnSpan.textContent = mode === 'login' ? t('loginBtn') : mode === 'register' ? t('registerBtn') : t('resetBtn');
    if (!silent) hideAuthMsg();
    if (mode === 'register') authFormShownAt = Date.now();
    const box = $('authBox');
    if (box) {
        box.dataset.mode = mode;
        const copy = {
            login: ['Log in', 'Enter the e-mail or nickname you registered with.', 'Create account'],
            register: ['Create account', 'Free. Your library syncs across your devices.', 'Log in'],
            reset: ['Reset password', 'Enter your e-mail and we will send you a link.', 'Back to log in']
        }[mode];
        $('authTitle').textContent = copy[0];
        $('authSub').textContent = copy[1];
        $('authSwitch').textContent = copy[2];
    }
}

function authSwitch() { setAuthMode(authMode === 'login' ? 'register' : 'login'); }

function toggleAuthPeek() {
    const input = $('authPass'), btn = $('authPeek');
    const show = input.type === 'password';
    input.type = show ? 'text' : 'password';
    btn.textContent = show ? 'Hide' : 'Show';
    btn.setAttribute('aria-pressed', String(show));
    btn.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
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
            if ($('authWebsite') && $('authWebsite').value.trim()) {
                showToast('registerCheckEmail');
                showView('home');
                this.reset();
                return;
            }
            if (authFormShownAt && (Date.now() - authFormShownAt) < 1500) {
                showAuthMsg('authErrTooFast', 'error');
                return;
            }
            const lastReg = parseInt(localStorage.getItem('lastRegisterAttempt') || '0', 10);
            if (lastReg && (Date.now() - lastReg) < 60000) {
                showAuthMsg('authErrTooSoon', 'error');
                return;
            }

            if (!$('regConsent') || !$('regConsent').checked) { showAuthMsg('authErrConsent', 'error'); return; }
            if (pass.length < 8) { showAuthMsg('authErrWeak', 'error'); return; }
            const email = rawInput;
            const nick = $('authNickname') ? $('authNickname').value.trim().slice(0, 32) : '';
            if (!nick) { showAuthMsg('authErrNicknameRequired', 'error'); return; }
            const nickKey = nick.toLowerCase();
            if (db) {
                const existing = await db.collection('nicknames').doc(nickKey).get();
                if (existing.exists) { showAuthMsg('authErrNicknameTaken', 'error'); return; }
            }
            localStorage.setItem('lastRegisterAttempt', String(Date.now()));
            const credU = await auth.createUserWithEmailAndPassword(email, pass);
            userProfile.nickname = nick;
            try { await credU.user.updateProfile({ displayName: nick }); } catch (e) {}
            try { await credU.user.sendEmailVerification(); } catch (e) {}
            try {
                if (db) {
                    const userDoc = { profile: userProfile, registeredAt: new Date().toISOString(), termsAcceptedAt: new Date().toISOString(), termsVersion: '2026-11-12' };
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
    if (newPass.length < 8) {
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
        msgEl.textContent = t(mapAuthError(err.code));
        msgEl.className = 'auth-msg show error';
    }
});

function updateUserChip() {
    const chip = $('userChip');
    const txt = $('userChipText');
    const quickLogout = $('quickLogoutBtn');
    document.body.classList.remove('auth-pending');
    document.body.classList.toggle('signed-out', !currentUser);
    if (currentUser) {
        chip.classList.add('logged');
        txt.textContent = (userProfile && userProfile.nickname) || currentUser.email;
        chip.title = currentUser.email;
        quickLogout.style.display = 'flex';
        quickLogout.title = t('logoutBtn');
    } else {
        txt.textContent = '';
        chip.title = '';
        quickLogout.style.display = 'none';
        toggleAcctMenu(false);
    }
    syncAcctUI();
}
setTimeout(() => document.body.classList.remove('auth-pending'), 4000);

// ---- account menu in the top bar (narrow screens) ----
const ACCT_STATE_TEXT = { success: 'Synced to cloud', loading: 'Syncing', error: 'Sync error', offline: 'Not synced' };
function syncAcctUI() {
    const btn = $('acctBtn');
    if (!btn) return;
    const name = currentUser ? ((userProfile && userProfile.nickname) || currentUser.email || '') : '';
    const initial = (name.trim().charAt(0) || '?').toUpperCase();
    $('acctInitial').textContent = initial;
    $('acctAvatar').textContent = initial;
    $('acctName').textContent = name;
    btn.dataset.state = lastBadgeState;
    const st = $('acctState');
    st.dataset.state = lastBadgeState;
    st.textContent = ACCT_STATE_TEXT[lastBadgeState] || '';
    btn.setAttribute('aria-label', 'Account menu' + (name ? ': ' + name : '') + ', ' + (ACCT_STATE_TEXT[lastBadgeState] || '').toLowerCase());
    const light = document.documentElement.getAttribute('data-theme') === 'light';
    $('acctThemeDark').setAttribute('aria-pressed', String(!light));
    $('acctThemeLight').setAttribute('aria-pressed', String(light));
}
function toggleAcctMenu(force) {
    const menu = $('acctMenu'), btn = $('acctBtn');
    if (!menu) return;
    const show = (force !== undefined) ? force : menu.hidden;
    if (show && !currentUser) return;
    menu.hidden = !show;
    btn.setAttribute('aria-expanded', String(show));
    if (show) { syncAcctUI(); const first = menu.querySelector('button'); if (first) first.focus(); }
}
function acctGo(view) { toggleAcctMenu(false); showView(view); }
function acctLogout() { toggleAcctMenu(false); doLogout(); }
function setThemeChoice(theme) {
    if ((document.documentElement.getAttribute('data-theme') === 'light') !== (theme === 'light')) toggleTheme();
    syncAcctUI();
}
document.addEventListener('click', (e) => {
    const menu = $('acctMenu');
    if (menu && !menu.hidden && !menu.contains(e.target) && !$('acctBtn').contains(e.target)) toggleAcctMenu(false);
});
document.addEventListener('keydown', (e) => {
    const menu = $('acctMenu');
    if (e.key === 'Escape' && menu && !menu.hidden) { toggleAcctMenu(false); $('acctBtn').focus(); }
});
document.addEventListener('focusin', (e) => {
    const menu = $('acctMenu');
    if (menu && !menu.hidden && !menu.contains(e.target) && !$('acctBtn').contains(e.target)) toggleAcctMenu(false);
});
window.addEventListener('resize', () => { if (window.innerWidth >= 860) toggleAcctMenu(false); });

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
    const libWrap = $('navLibraryWrap');
    if (libWrap) libWrap.style.display = logged ? '' : 'none';
    if (!logged && ['shelf', 'achievements', 'roulette', 'ranking', 'yearreview', 'goals'].some(v => $('view-' + v) && $('view-' + v).classList.contains('active'))) showView('home');
    const navRanking = $('navRankingBtn');
    if (navRanking) navRanking.style.display = logged ? '' : 'none';
    const navYearReview = $('navYearReviewBtn');
    if (navYearReview) navYearReview.style.display = logged ? '' : 'none';
    const navGoals = $('navGoalsBtn');
    if (navGoals) navGoals.style.display = logged ? '' : 'none';
    const navAdmin = $('navAdminBtn');
    if (navAdmin) navAdmin.style.display = isAdmin() ? '' : 'none';
}

if (firebaseReady) {
    auth.onAuthStateChanged(user => {
        currentUser = user;
        updateUserChip();
        updateAuthUI();
        if (user) Promise.resolve(loadCloudData()).then(() => applyDeepLink(true));
        else { clearSessionData(); applyDeepLink(false); }
    });
} else {
    document.addEventListener('DOMContentLoaded', () => applyDeepLink(false));
}

// links like /?view=faq or /?action=add (also used by the app shortcuts in the installed app)
const DEEP_PUBLIC_VIEWS = ['faq', 'privacy', 'terms', 'changelog', 'rates', 'feedback'];
const DEEP_PRIVATE_VIEWS = ['shelf', 'achievements', 'roulette', 'goals', 'ranking', 'yearreview'];
let deepLinkDone = false;
function applyDeepLink(loggedIn) {
    if (deepLinkDone) return;
    let q;
    try { q = new URLSearchParams(location.search); } catch (e) { return; }
    const view = q.get('view'), action = q.get('action');
    if (!view && !action) { deepLinkDone = true; return; }
    if (view && DEEP_PUBLIC_VIEWS.includes(view)) { showView(view); deepLinkDone = true; }
    else if (loggedIn) {
        if (view && DEEP_PRIVATE_VIEWS.includes(view)) showView(view);
        else if (action === 'add') {
            showView('home');
            toggleAddForm(true);
            setTimeout(() => { const n = $('gameName'); if (n) { n.scrollIntoView({ block: 'center' }); n.focus({ preventScroll: true }); } }, 150);
        }
        deepLinkDone = true;
    } else if (action || view) { deepLinkDone = true; }   // needs a login: show the normal landing page
    if (deepLinkDone) { try { history.replaceState(null, '', location.pathname + location.hash); } catch (e) {} }
}

function toggleNavGroup(key, forceState) {
    const group = $('navGroup-' + key);
    const chevron = $('navGroupChevron-' + key);
    const btn = chevron ? chevron.closest('.nav-section-toggle') : null;
    if (!group) return;
    const expanded = (forceState !== undefined) ? forceState : group.classList.contains('collapsed');
    group.classList.toggle('collapsed', !expanded);
    if (btn) btn.setAttribute('aria-expanded', String(expanded));
    localStorage.setItem('navGroupExpanded_' + key, expanded ? '1' : '0');
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
        const expanded = saved === null ? true : saved === '1'; // expanded by default on the first visit
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
    if (editingIndex === -1 && findDuplicateIndex(nameVal, -1) > -1) {
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
        id: newGameId()
    };

    if (editingIndex > -1) {
        gameData.id = games[editingIndex].id || gameData.id;
        games[editingIndex] = gameData;
        cancelEdit();
    } else {
        games.push(gameData);
        flashNewGames([gameData]);
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

    editingIndex = index;
    $('submitBtn').querySelector('span').textContent = t('saveBtn');
    $('submitBtn').style.backgroundColor = '#e6a32e';
    $('submitBtn').style.color = '#000';
    $('cancelEditBtn').style.display = 'inline-flex';
    const formCard = $('addFormBody').closest('.card') || $('addFormBody');
    formCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    $('gameName').focus({ preventScroll: true });
}

function cancelEdit() {
    editingIndex = -1;
    form.reset();
    $('submitBtn').querySelector('span').textContent = t('addBtn');
    $('submitBtn').style.backgroundColor = '';
    $('submitBtn').style.color = '';
    $('cancelEditBtn').style.display = 'none';
}

// Deleting is instant, but for a few seconds it can be undone from the toast.
let pendingUndo = null;
let undoToastTimer = null;

function showUndoToast(message, undoFn, onExpire) {
    const el = $('undoToast');
    if (!el) return;
    $('undoToastText').textContent = message;
    el.classList.add('show');
    clearTimeout(undoToastTimer);
    pendingUndo = undoFn;
    undoToastTimer = setTimeout(() => {
        el.classList.remove('show');
        pendingUndo = null;
        if (onExpire) onExpire();
    }, 10000);
}

function runPendingUndo() {
    if (pendingUndo) pendingUndo();
    const el = $('undoToast');
    if (el) el.classList.remove('show');
    clearTimeout(undoToastTimer);
    pendingUndo = null;
}

// Deleting works on a stack: several deletions in a row can be undone together while the toast shows
let deleteUndoStack = [];

function deleteGames(indexes) {
    const sorted = [...new Set(indexes)].filter(i => games[i]).sort((x, y) => x - y);
    if (!sorted.length) return;
    deleteUndoStack.push(sorted.map(i => ({ game: games[i], index: i })));
    [...sorted].reverse().forEach(i => games.splice(i, 1));
    if (sorted.includes(editingIndex)) cancelEdit();
    else if (editingIndex > -1) editingIndex -= sorted.filter(i => i < editingIndex).length;
    selectedGames.clear();
    renderTable();
    persistData();

    const n = deleteUndoStack.reduce((sum, b) => sum + b.length, 0);
    showUndoToast(n === 1 ? t('itemDeleted') : t('itemsDeleted').replace('{n}', n), () => {
        for (let b = deleteUndoStack.length - 1; b >= 0; b--) {
            deleteUndoStack[b].forEach(({ game, index }) => games.splice(Math.min(index, games.length), 0, game));
        }
        deleteUndoStack = [];
        renderTable();
        persistData();
    }, () => { deleteUndoStack = []; });
}

function deleteGame(index) { deleteGames([index]); }
function deleteSelectedGames() { deleteGames([...selectedGames]); }

// One click on the status button in a row: not set -> completed -> not completed -> in progress -> not set.
// Endless / won't play (set in the edit form) jump to "completed" on the first click.
const STATUS_CYCLE = ['', 'completed', 'not_completed', 'in_progress'];
const STATUS_BUTTON = {
    '':            { icon: 'fa-regular fa-circle',       cls: 'st-none',      key: 'statusNone' },
    completed:     { icon: 'fa-solid fa-check',          cls: 'st-completed', key: 'statusCompleted' },
    not_completed: { icon: 'fa-solid fa-xmark',          cls: 'st-not',       key: 'statusNotCompleted' },
    in_progress:   { icon: 'fa-solid fa-hourglass-half', cls: 'st-progress',  key: 'statusInProgress' },
    endless:       { icon: 'fa-solid fa-infinity',       cls: 'st-endless',   key: 'statusEndless' },
    wont_play:     { icon: 'fa-solid fa-ban',            cls: 'st-wont',      key: 'statusWontPlay' }
};
function statusButtonInfo(status) {
    const s = STATUS_BUTTON[status || ''] || STATUS_BUTTON[''];
    return { icon: s.icon, cls: s.cls, label: t(s.key) };
}
function cycleStatus(index) {
    const g = games[index];
    if (!g) return;
    const pos = STATUS_CYCLE.indexOf(g.status || '');
    const next = pos === -1 ? 'completed' : STATUS_CYCLE[(pos + 1) % STATUS_CYCLE.length];
    g.status = next || null;
    renderTable();
    persistData();
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
    const newStatus = $('bulkStatusSelect') ? $('bulkStatusSelect').value : '';
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
    if (show && force === undefined) setTimeout(() => $('gameName') && $('gameName').focus({ preventScroll: true }), 60);
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

// Smart import: paste raw text (a purchase history, an order e-mail, anything) and try to detect
// dates/prices/titles. Steam has no official purchase-history export, so this is best-effort
// with a preview to correct before adding - nothing is ever added without the user reviewing it.

const SMART_MONTHS = {
    jan:0, feb:1, mar:2, apr:3, may:4, jun:5, jul:6, aug:7, sep:8, oct:9, nov:10, dec:11
};
function smartPad(n) { return String(n).padStart(2, '0'); }

// For validation and the list in Smart import we use the real, full list from the single-game
// add form, so both parts of the app always agree on which currencies are supported.
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
// 1-4 digits, then optional thousands groups (exactly 3 digits), always ending in a comma/dot
// and two digits. Deliberately strict - a looser pattern can "jump" over the space of a
// neighbouring date and glue together a phantom price from its tail and the start of the real one.
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
    const todayStr = todayLocal();
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

        const newGame = { name, price, currency, source: 'Steam', date, ownership: 'digital', priceChf: price * (rates[currency] || 1), id: newGameId() };
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
    const todayStr = todayLocal();
    let added = 0, skipped = 0, duplicates = 0;
    const newlyAdded = [];
    const existingNames = new Set(games.map(g => (g.name || '').trim().toLowerCase()));

    lines.forEach(line => {
        try {
            const parts = line.split(';').map(p => p.trim());
            const name = parts[0];
            const price = parseFloat((parts[1] || '').replace(',', '.'));
            if (!name || isNaN(price) || price < 0) { skipped++; return; }
            if (isSuspiciousGameName(name)) { skipped++; return; }
            const nameKey = name.trim().toLowerCase();
            if (existingNames.has(nameKey)) { duplicates++; return; }

            let currency = (parts[2] || 'PLN').trim().toUpperCase();
            if (!TOP_CURRENCIES.includes(currency)) currency = 'PLN';
            if (isPriceTooHigh(price, currency)) { skipped++; return; }

            let source = (parts[3] || 'Steam').trim();
            const knownPlatform = Object.keys(PLATFORM_META).find(p => p.toLowerCase() === source.toLowerCase());
            source = knownPlatform || (source ? 'Kluczykarnia' : 'Steam');

            let date = (parts[4] || '').trim();
            if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) date = todayStr;

            const newGame = { name, price, currency, source, date, ownership: 'digital', priceChf: price * (rates[currency] || 1), id: newGameId() };
            games.push(newGame);
            existingNames.add(nameKey);
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

function getDisplayCurrency() {
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

function computeBacklogHealth() {
    if (games.length === 0) return { state: 'empty' };
    const completed = games.filter(g => g.status === 'completed').length;
    const notCompleted = games.filter(g => g.status === 'not_completed').length;
    const inProgress = games.filter(g => g.status === 'in_progress').length;
    const tracked = completed + notCompleted + inProgress;
    if (tracked === 0) return { state: 'untracked' };
    // Previously, marking 4 of 369 games as completed gave 100% (4/4) and an artificially high score,
    // even though 365 games in the library still had no status at all.
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
    const fill = $('healthFill'), numEl = $('healthScoreNum'), gradeEl = $('healthGrade'), msgEl = $('healthMessage');
    if (!fill) return;
    const result = computeBacklogHealth();

    if (result.state === 'empty') {
        fill.style.width = '0%';
        numEl.textContent = '-';
        gradeEl.textContent = t('healthLabel');
        msgEl.textContent = t('healthEmptyMsg');
        return;
    }
    if (result.state === 'untracked') {
        fill.style.width = '50%';
        fill.style.background = 'var(--text-dim)';
        numEl.textContent = '?';
        gradeEl.textContent = t('healthGradeUnknown');
        msgEl.textContent = t('healthNoStatusMsg');
        return;
    }
    const { score, grade } = result;
    const colors = { Exemplary: 'var(--ok)', Good: 'var(--steam-blue)', Average: 'var(--steam-blue)', Growing: 'var(--warn)', Overwhelmed: 'var(--err)' };
    fill.style.width = score + '%';
    fill.style.background = colors[grade] || 'var(--steam-blue)';
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
    updateAriaSort();
}

function updateAriaSort() {
    document.querySelectorAll('th[data-sort]').forEach(th => {
        th.setAttribute('aria-sort', th.dataset.sort === sortKey ? (sortDir === 1 ? 'ascending' : 'descending') : 'none');
    });
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
                    ${reached ? `<i class="fa-solid fa-check"></i> ${t('goalReached')}` : `${t('goalRemaining')}: ${remaining.toFixed(2)} ${goal.currency} (${pct}%)`}
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
                <span class="goal-card-amounts"><i class="fa-solid ${unlocked ? 'fa-check' : 'fa-lock'}" style="color:${unlocked ? 'var(--ok)' : 'var(--text-dim)'};"></i></span>
            </div>
            <p style="font-size:13px; color:var(--text-dim); margin:4px 0 8px;">${escapeHtml(descText)}</p>
            ${def.kind === 'tier' ? `<div class="goal-progress-track"><div class="goal-progress-fill ${progressPct >= 100 ? 'reached' : ''}" style="width:${progressPct}%;"></div></div>` : ''}
            <div class="goal-card-footer">
                <span style="font-size:12px; color:${unlocked ? '#5cb85c' : 'var(--text-dim)'};">${statusText}${levelText ? ' · ' + levelText : ''}</span>
            </div>`;
        list.appendChild(card);
    });
}

let rouletteSpinTimer = null;
let rouletteLastPickIdx = -1;

function getBacklogPool() {
    const platform = $('roulettePlatformFilter') ? $('roulettePlatformFilter').value : 'all';
    return games
        .map((g, i) => ({ g, i }))
        .filter(({ g }) => g.status === 'not_completed')
        .filter(({ g }) => platform === 'all' || (g.source || 'Steam') === platform);
}

function rollBacklogRoulette() {
    clearInterval(rouletteSpinTimer);
    const result = $('rouletteResult');
    if (!result) return;

    if (games.length === 0) {
        result.innerHTML = `<div class="empty-state">${t('rouletteEmptyLib')}</div>`;
        return;
    }

    const pool = getBacklogPool();
    if (pool.length === 0) {
        result.innerHTML = `<div class="empty-state">${t('rouletteAllDone')}</div>`;
        return;
    }

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
            <div style="font-size:32px; margin-bottom:6px; color:var(--steam-blue);"><i class="fa-solid fa-dice"></i></div>
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

const CANVAS_SANS = '"Source Sans 3", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif';
const CANVAS_MONO = '"IBM Plex Mono", ui-monospace, Menlo, Consolas, monospace';

let canvasFontsReady = false;
function ensureCanvasFonts() {
    if (canvasFontsReady || !document.fonts || !document.fonts.load) return Promise.resolve();
    return Promise.all([
        document.fonts.load('400 14px "Source Sans 3"'),
        document.fonts.load('600 14px "Source Sans 3"'),
        document.fonts.load('700 40px "Source Sans 3"'),
        document.fonts.load('500 26px "IBM Plex Mono"'),
        document.fonts.load('700 64px "IBM Plex Mono"')
    ]).then(() => { canvasFontsReady = true; }, () => {});
}

// Saves a canvas as a PNG. Everything up to the share/download call is synchronous, because iOS
// Safari ignores downloads and the share sheet once the tap is no longer "fresh". Phones get the
// share sheet (Save Image), desktops a normal download, and the image opens in a tab as a last resort.
function canvasToPngBlob(canvas) {
    const bin = atob(canvas.toDataURL('image/png').split(',')[1]);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return new Blob([bytes], { type: 'image/png' });
}
function savePng(canvas, filename) {
    const blob = canvasToPngBlob(canvas);
    const coarse = window.matchMedia && matchMedia('(pointer: coarse)').matches;
    let file = null;
    try { file = new File([blob], filename, { type: 'image/png' }); } catch (e) {}
    const url = URL.createObjectURL(blob);
    const fallback = () => {
        const link = document.createElement('a');
        link.href = url; link.download = filename;
        document.body.appendChild(link); link.click(); link.remove();
        if (coarse) setTimeout(() => { if (!document.hidden) window.open(url, '_blank'); }, 600);
        setTimeout(() => URL.revokeObjectURL(url), 60000);
    };
    if (coarse && file && navigator.canShare && navigator.canShare({ files: [file] })) {
        navigator.share({ files: [file] }).then(() => URL.revokeObjectURL(url), err => {
            if (err && err.name === 'AbortError') URL.revokeObjectURL(url); else fallback();
        });
    } else fallback();
}

let _shelfMeasureCanvas = null;
function measureShelfTextWidth(text, fontPx) {
    if (!_shelfMeasureCanvas) _shelfMeasureCanvas = document.createElement('canvas');
    const ctx = _shelfMeasureCanvas.getContext('2d');
    ctx.font = `600 ${fontPx}px ${CANVAS_SANS}`;
    return ctx.measureText(text).width;
}

// Instead of truncating long titles with an ellipsis, we shrink the font so the whole title fits
function fitShelfTitles() {
    document.querySelectorAll('#shelfWrap .game-box-title').forEach(titleEl => {
        const wrapEl = titleEl.parentElement;
        const available = wrapEl.clientHeight - 8;
        if (available <= 0) return; // view not visible yet - we'll fit it on the next render
        const text = titleEl.textContent;
        const refSize = 12;
        const measured = measureShelfTextWidth(text, refSize) || 1;
        let fontSize = Math.min(11.5, (refSize * available) / measured);
        fontSize = Math.max(fontSize, 5.5); // minimum readable size instead of cutting with "…"
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
        const displaySrc = shelfDisplaySource(srcRaw);
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
// (form, filters, bulk edit, stats) - swapping in "Steam" ONLY affects
// the look of the virtual shelf (box cover), it does not change the real game data.
function shelfDisplaySource(source) {
    return (source === 'Kluczykarnia') ? 'Steam' : (source || 'Steam');
}

// "On this day" - looks for a game bought on today's month/day in a past year.
// Dismissal is remembered for the current day (localStorage); the banner's
// content changes daily, so it can show again on a later date.
function renderOnThisDay() {
    const banner = $('onThisDayBanner');
    if (!banner) return;

    const todayKey = todayLocal();
    let dismissed = null;
    try { dismissed = localStorage.getItem('onThisDayDismissed'); } catch (e) {}
    if (dismissed === todayKey) {
        banner.style.display = 'none';
        return;
    }

    const now = new Date();
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    const todayMonthDay = `${mm}-${dd}`;
    const thisYear = now.getFullYear();

    const matches = games.filter(g => {
        if (!g.date || g.date.length < 10) return false;
        const gy = parseInt(g.date.slice(0, 4), 10);
        return g.date.slice(5, 10) === todayMonthDay && gy < thisYear;
    });

    if (!matches.length) {
        banner.style.display = 'none';
        return;
    }

    // the oldest purchase is usually the most interesting one to bring up
    matches.sort((a, b) => parseInt(a.date.slice(0, 4), 10) - parseInt(b.date.slice(0, 4), 10));
    const g = matches[0];
    const yearsAgo = thisYear - parseInt(g.date.slice(0, 4), 10);
    const extra = matches.length > 1 ? t('onThisDayExtra').replace('{n}', matches.length - 1) : '';

    $('onThisDayText').innerHTML = t('onThisDayText')
        .replace('{years}', yearsAgo)
        .replace('{name}', `<strong>${escapeHtml(g.name)}</strong>`) + extra;
    banner.style.display = 'flex';
}

function dismissOnThisDay() {
    const banner = $('onThisDayBanner');
    if (banner) banner.style.display = 'none';
    try { localStorage.setItem('onThisDayDismissed', todayLocal()); } catch (e) {}
}

function renderTable() {
    const tbody = document.querySelector('#gamesTable tbody');
    tbody.innerHTML = '';
    globalTotalChf = 0;
    renderBacklogHealth();
    renderOnThisDay();

    ['name','source','ownership','date','price','priceChf'].forEach(k => {
        const el = $('si-' + k);
        if (el) el.textContent = (sortKey === k) ? (sortDir === 1 ? '▲' : '▼') : '';
    });

    const q = ($('searchInput').value || '').toLowerCase();
    const srcFilter = $('sourceFilter') ? $('sourceFilter').value : 'all';
    const ownFilter = $('ownershipFilter') ? $('ownershipFilter').value : 'all';
    const priceMinF = $('priceMinFilter') ? parseFloat($('priceMinFilter').value) : NaN;
    const priceMaxF = $('priceMaxFilter') ? parseFloat($('priceMaxFilter').value) : NaN;
    const dateFromF = $('dateFromFilter') ? $('dateFromFilter').value : '';
    const dateToF = $('dateToFilter') ? $('dateToFilter').value : '';
    const filterCur = getDisplayCurrency();
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
        tbody.innerHTML = `<tr><td colspan="9"><div class="empty-state">${t('emptyLib')}</div></td></tr>`;
    } else if (visible.length === 0) {
        tbody.innerHTML = `<tr><td colspan="9"><div class="empty-state">${t('noResults')}</div></td></tr>`;
    } else {
        visible.forEach(({ g, i }, rowNum) => {
            const srcRaw = g.source || "Steam";
            const meta = platformMeta(srcRaw);
            const srcClass = meta.cls;
            const srcDisplay = meta.label();
            const own = g.ownership || 'digital';
            const ownIcon = own === 'physical' ? 'fa-solid fa-compact-disc' : 'fa-solid fa-cloud';
            const ownLabel = own === 'physical' ? t('ownPhysical') : t('ownDigital');
            const st = statusButtonInfo(g.status);
            const tr = document.createElement('tr');
            if (g.__flash) tr.className = 'row-new';
            tr.innerHTML = `
                <td style="text-align:left;"><input type="checkbox" class="row-select-cb" aria-label="Select ${escapeHtml(g.name)}" data-idx="${i}" onchange="toggleSelectGame(${i}, this.checked)" ${selectedGames.has(i) ? 'checked' : ''}></td>
                <td style="color:var(--text-dim);">${rowNum + 1}</td>
                <td class="name-cell" style="color:var(--text-white);" title="${escapeHtml(g.name)}"><span class="name-text">${escapeHtml(g.name)}</span>${g.status ? `<span class="pill pill-${g.status}">${st.label}</span>` : ''}</td>
                <td data-label="${t('colPlatform')}"><span class="source-txt ${srcClass}">${srcDisplay}</span></td>
                <td data-label="${t('fldOwnership')}"><span class="own-chip" data-own="${own}"><i class="${ownIcon}"></i>${ownLabel}</span></td>
                <td data-label="${t('purchaseDate')}">${g.date}</td>
                <td data-label="${t('colOrigPrice')}">${g.price.toFixed(2)} <span style="font-size:10px; color:var(--text-dim);">${g.currency}</span></td>
                <td data-label="${t('colChfPrice')}" style="color:var(--steam-blue);">${g.priceChf.toFixed(2)} <span style="font-size:10px;">CHF</span></td>
                <td class="action-icons">
                    <button class="st ${st.cls}" onclick="cycleStatus(${i})" title="${st.label} (${t('statusToggleHint')})" aria-label="${escapeHtml(g.name)}: ${st.label} (${t('statusToggleHint')})"><i class="${st.icon}"></i></button>
                    <button class="edit" onclick="editGame(${i})" aria-label="Edit ${escapeHtml(g.name)}"><i class="fa-solid fa-pen"></i></button>
                    <button class="del" onclick="deleteGame(${i})" aria-label="Delete ${escapeHtml(g.name)}"><i class="fa-solid fa-trash"></i></button>
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
    updateFilterCurrencyLabels();
    renderTable();
    updateStats();
}

async function initCurrencyPreference() {
    const manual = localStorage.getItem('totalCurrencyManual');
    $('totalCurrency').value = manual || 'EUR';
    updateTotalDisplay();
}

function renderSideCards() {
    const bars = $('storeBars'), info = $('infoList');
    if (!bars || !info) return;
    if (!games.length) {
        bars.innerHTML = `<p class="side-empty">${t('sideEmpty')}</p>`;
        info.innerHTML = `<p class="side-empty">${t('sideEmpty')}</p>`;
        if ($('costList')) $('costList').innerHTML = `<p class="side-empty">${t('sideEmpty')}</p>`;
        return;
    }
    const cur = ($('totalCurrency') && $('totalCurrency').value) || 'EUR';
    const rate = rates[cur] || 1;
    const fmt = (chf) => (chf / rate).toLocaleString(currentLang, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    const bySrc = {};
    games.forEach(g => { const s = g.source || 'Steam'; bySrc[s] = (bySrc[s] || 0) + (g.priceChf || 0); });
    const rows = Object.entries(bySrc).sort((x, y) => y[1] - x[1]).slice(0, 6);
    const top = rows.length ? (rows[0][1] || 1) : 1;
    bars.innerHTML = rows.map(([s, v]) => `<div class="bar-row"><span class="bar-name">${platformMeta(s).label()}</span><span class="bar-val">${fmt(v)} <small>${cur}</small></span><span class="bar-track"><i style="width:${Math.max(2, Math.round(v / top * 100))}%"></i></span></div>`).join('');

    const dated = games.filter(g => g.date && g.date.length >= 10).map(g => g.date).sort();
    const sumChf = games.reduce((s, g) => s + (g.priceChf || 0), 0);
    const priciest = games.reduce((m, g) => (g.priceChf || 0) > (m.priceChf || 0) ? g : m, games[0]);
    const physical = games.filter(g => (g.ownership || 'digital') === 'physical').length;
    const tracked = games.filter(g => g.status).length;
    const kv = [
        [t('infoFirst'), dated.length ? dated[0] : '-'],
        [t('infoLast'), dated.length ? dated[dated.length - 1] : '-'],
        [t('infoAvg'), `${fmt(sumChf / games.length)} ${cur}`],
        [t('infoMax'), `${fmt(priciest.priceChf || 0)} ${cur}`],
        [t('infoFormats'), `${games.length - physical} / ${physical}`],
        [t('infoTracked'), `${tracked} / ${games.length}`]
    ];
    info.innerHTML = kv.map(([k2, v]) => `<div><dt>${k2}</dt><dd>${escapeHtml(String(v))}</dd></div>`).join('');

    // cost insights: what the library costs per finished game, and how much money sits in games nobody is playing
    const costEl = $('costList');
    if (costEl) {
        const completed = games.filter(g => g.status === 'completed').length;
        const dead = games.filter(g => !g.status || g.status === 'not_completed' || g.status === 'wont_play');
        const deadChf = dead.reduce((s, g) => s + (g.priceChf || 0), 0);
        const nowD = new Date();
        const yNow = String(nowD.getFullYear()), yPrev = String(nowD.getFullYear() - 1);
        const todayMd = `${String(nowD.getMonth() + 1).padStart(2, '0')}-${String(nowD.getDate()).padStart(2, '0')}`;
        const sumWhere = (fn) => games.filter(fn).reduce((s, g) => s + (g.priceChf || 0), 0);
        const thisYearChf = sumWhere(g => (g.date || '').startsWith(yNow));
        const samePeriodChf = sumWhere(g => (g.date || '').startsWith(yPrev) && (g.date || '').slice(5, 10) <= todayMd);
        let change = '-';
        if (samePeriodChf > 0) {
            const pct = Math.round((thisYearChf - samePeriodChf) / samePeriodChf * 100);
            change = `${pct > 0 ? '+' : ''}${pct}%`;
        }
        const rows = [
            [t('costPerCompleted'), completed ? `${fmt(sumChf / completed)} ${cur}` : '-'],
            [t('costDead'), `${fmt(deadChf)} ${cur}`],
            [t('costDeadShare'), sumChf > 0 ? `${Math.round(deadChf / sumChf * 100)}% (${dead.length}/${games.length})` : '-'],
            [t('costThisYear'), `${fmt(thisYearChf)} ${cur}`],
            [t('costSamePeriod'), `${fmt(samePeriodChf)} ${cur}`],
            [t('costChange'), change]
        ];
        costEl.innerHTML = `<dl class="kv">${rows.map(([k2, v]) => `<div><dt>${k2}</dt><dd>${escapeHtml(String(v))}</dd></div>`).join('')}</dl>` +
            (games.some(g => g.status) ? '' : `<p class="side-empty" style="margin-top:10px;">${t('costHint')}</p>`);
    }
}

function updateStats() {
    renderSideCards();
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
    const countThisMonth = games.filter(g => (g.date || '').startsWith(ym)).length;
    const countPrevMonth = games.filter(g => (g.date || '').startsWith(prevYm)).length;
    const trendEl = $('statMonthTrend');
    if (trendEl) {
        if (countPrevMonth > 0) {
            const pct = Math.round(((countThisMonth - countPrevMonth) / countPrevMonth) * 100);
            const up = pct >= 0;
            trendEl.style.color = up ? 'var(--warn, #e6a32e)' : '#5cb85c';
            trendEl.innerHTML = `<i class="fa-solid fa-arrow-${up ? 'up' : 'down'}"></i> ${up ? '+' : ''}${pct}% ${t('vsLastMonth')}`;
        } else {
            trendEl.textContent = '';
        }
    }

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

if (typeof Chart !== 'undefined') {
    Chart.defaults.color = '#677887';
    Chart.defaults.font.family = '"Source Sans 3", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif';
    Chart.defaults.plugins.tooltip.cornerRadius = 4;
}

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
            ctx.font = `600 12px ${CANVAS_MONO}`;
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

function chartTitle(text) {
    return { display: true, text, align: 'start', color: cssVar('--text-light'), font: { size: 13, weight: '600' }, padding: { bottom: 14 } };
}

function updateCharts() {
    if (typeof Chart === 'undefined') return;
    const type = $('chartType').value;
    const gran = $('chartGranularity').value;
    $('chartGranularity').style.display = (type === 'sources' || type === 'ownership' || type === 'yoy') ? 'none' : '';

    if (mainChart) mainChart.destroy();
    try { const sel = $('chartType'); $('mainChart').setAttribute('aria-label', 'Chart: ' + sel.options[sel.selectedIndex].text + (gran && sel.value !== 'sources' ? ' (' + gran + ')' : '')); } catch (e) {}
    const ctx = $('mainChart');
    const gridColor = cssVar('--border');

    if (type === 'yoy') {
        const cur = ($('totalCurrency') && $('totalCurrency').value) || 'EUR';
        const rate = rates[cur] || 1;
        const nowD = new Date();
        const thisY = nowD.getFullYear();
        const yearsShown = [thisY - 2, thisY - 1, thisY].filter(y => y === thisY || games.some(g => (g.date || '').startsWith(String(y))));
        const palette = [cssVar('--text-dim'), cssVar('--coin'), cssVar('--steam-blue')];
        const datasets = yearsShown.map((y, idx) => {
            const perMonth = new Array(12).fill(0);
            games.forEach(g => {
                if (!g.date || !g.date.startsWith(String(y))) return;
                const m = parseInt(g.date.slice(5, 7), 10) - 1;
                if (m >= 0 && m < 12) perMonth[m] += (g.priceChf || 0) / rate;
            });
            let run = 0;
            const data = perMonth.map((v, m) => {
                run += v;
                return (y === thisY && m > nowD.getMonth()) ? null : Math.round(run * 100) / 100;
            });
            const colour = palette[palette.length - yearsShown.length + idx];
            return { label: String(y), data, borderColor: colour, backgroundColor: colour, borderWidth: y === thisY ? 2.5 : 1.5, fill: false, tension: 0, pointRadius: 0, pointHoverRadius: 4, spanGaps: false };
        });
        mainChart = new Chart(ctx, {
            type: 'line',
            data: { labels: Array.from({ length: 12 }, (_, m) => monthLabel(`2000-${String(m + 1).padStart(2, '0')}`)), datasets },
            options: {
                maintainAspectRatio: false,
                interaction: { mode: 'index', intersect: false },
                scales: {
                    y: { beginAtZero: true, grid: { color: gridColor }, border: { display: false } },
                    x: { grid: { display: false }, border: { display: false } }
                },
                plugins: {
                    legend: { display: true, labels: { color: cssVar('--text-main'), boxWidth: 12 } },
                    title: chartTitle(t('chartYoyTitle').replace('{cur}', cur))
                }
            }
        });
        return;
    }

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
                        const colors = { Steam: '#5b8fc9', PlayStation: '#8aa8c8', Xbox: '#6f9f7e', Nintendo: '#c0786a', GOG: '#9a86b5', 'Epic Games': '#9a9a9a', Kluczykarnia: '#c7a252' };
                        return colors[k] || cssVar('--key-purple');
                    }),
                    borderWidth: 1, borderColor: cssVar('--bg-panel')
                }]
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'right', labels: { color: cssVar('--text-main'), boxWidth: 12 } },
                    title: chartTitle(t('chartSources'))
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
                    backgroundColor: [cssVar('--steam-blue'), '#8d99ab'],
                    borderWidth: 1, borderColor: cssVar('--bg-panel')
                }]
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'right', labels: { color: cssVar('--text-main'), boxWidth: 12 } },
                    title: chartTitle(t('chartOptOwnership'))
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
            data: { labels, datasets: [{ data: labels.map(l => counts[l]), backgroundColor: cssVar('--steam-blue'), hoverBackgroundColor: cssVar('--btn-green-hover'), borderRadius: 0, maxBarThickness: 28 }] },
            options: {
                maintainAspectRatio: false,
                scales: {
                    y: { beginAtZero: true, ticks: { stepSize: niceStepSize(maxCount), precision: 0 }, grid: { color: gridColor }, border: { display: false } },
                    x: { grid: { display: false }, border: { display: false } }
                },
                plugins: { legend: { display: false }, title: chartTitle(`${t('chartPurchases')} / ${t('gran' + gran.charAt(0).toUpperCase() + gran.slice(1))}`) }
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
                    borderWidth: 2,
                    fill: false,
                    tension: 0,
                    pointBackgroundColor: cssVar('--steam-blue'),
                    pointRadius: 0,
                    pointHoverRadius: 4
                }]
            },
            options: {
                maintainAspectRatio: false,
                scales: {
                    y: { beginAtZero: true, ticks: { stepSize: niceStepSize(maxTotal), precision: 0 }, grid: { color: gridColor }, border: { display: false } },
                    x: { grid: { display: false }, border: { display: false } }
                },
                plugins: { legend: { display: false }, title: chartTitle(t('chartCumulative')) }
            }
        });
    }
}

// Chart -> PNG on the panel colour (the raw canvas is transparent), with a small credit line
function exportChartPng(chart, filename) {
    if (!chart || !chart.canvas) { showToastText('Chart is not ready yet.'); return; }
    const src = chart.canvas;
    const extra = Math.round(28 * (window.devicePixelRatio || 1));
    const c = document.createElement('canvas');
    c.width = src.width; c.height = src.height + extra;
    const ctx = c.getContext('2d');
    ctx.fillStyle = cssVar('--bg-panel') || '#181c23';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.drawImage(src, 0, 0);
    ctx.fillStyle = cssVar('--text-dim') || '#78829a';
    ctx.font = `${Math.round(11 * (window.devicePixelRatio || 1))}px ${CANVAS_MONO}`;
    ctx.textAlign = 'right';
    ctx.fillText('backlogwallet.com', c.width - 12, c.height - Math.round(9 * (window.devicePixelRatio || 1)));
    savePng(c, filename);
}
function exportMainChart() {
    exportChartPng(mainChart, `backlog-wallet-${$('chartType').value}.png`);
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
    $('cookieAcceptBtn').textContent = t('cookieAcceptBtn');
}
function clearLocalData() {
    if (!confirm(t('clearLocalConfirm'))) return;
    try { localStorage.clear(); sessionStorage.clear(); } catch (e) {}
    location.reload();
}

function dismissStorageNotice() {
    try { localStorage.setItem('storageNoticeSeen', '1'); } catch (e) {}
    $('cookieConsent').style.display = 'none';
}
function initCookieConsent() {
    updateCookieConsentTexts();
    let seen = false;
    try { seen = !!(localStorage.getItem('storageNoticeSeen') || localStorage.getItem('cookieConsent')); } catch (e) {}
    if (!seen) {
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
    if (typeof syncAcctUI === 'function') syncAcctUI();
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
// "/" jumps to the search box, like on most sites
document.addEventListener('keydown', (e) => {
    if (e.key !== '/' || e.ctrlKey || e.metaKey || e.altKey) return;
    const tag = (document.activeElement && document.activeElement.tagName) || '';
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(tag) || (document.activeElement && document.activeElement.isContentEditable)) return;
    const box = document.getElementById('searchInput');
    if (!box || box.offsetParent === null) return;
    e.preventDefault();
    box.focus();
});

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

function updateAccountMetaUI() {
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
        wishGoals: wishGoals,
        settings: { rankingOptIn: rankingOptIn, publicShare: publicShareEnabled },
        records: {
            registeredAt: userMeta.registeredAt || null,
            termsAcceptedAt: userMeta.termsAcceptedAt || null,
            termsVersion: userMeta.termsVersion || null,
            nicknameRecord: (userProfile && userProfile.nickname) ? { nickname: userProfile.nickname, linkedEmail: currentUser ? currentUser.email : null } : null
        },
        note: 'Public ranking entry (nickname, total value in EUR, number of games) is derived from the data above and exists only while rankingOptIn is true.'
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'backlog-wallet-backup.json';
    a.click();
    URL.revokeObjectURL(a.href);
}

async function handleImportFile(event) {
    const file = event.target.files && event.target.files[0];
    event.target.value = ''; // allow picking the same file again later
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
            const validStatuses = ['completed', 'not_completed', 'in_progress', 'endless', 'wont_play'];
            const status = validStatuses.includes(g.status) ? g.status : null;
            const date = (typeof g.date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(g.date)) ? g.date : todayLocal();
            const priceChf = price * (rates[currency] || 1);

            games.push({ name, price, currency, source, date, ownership, status, priceChf, id: newGameId() });
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
    // Firebase only lets a recently signed-in user delete the account; check before touching any data
    const lastSignIn = currentUser.metadata && currentUser.metadata.lastSignInTime ? Date.parse(currentUser.metadata.lastSignInTime) : 0;
    if (lastSignIn && (Date.now() - lastSignIn) > 4 * 60 * 1000) { alert(t('deleteNeedsRecentLogin')); return; }
    try { exportMyData(); } catch (e) {}
    try {
        if (db) {
            const uid = currentUser.uid;
            const nickKey = ((userProfile && userProfile.nickname) || currentUser.displayName || '').trim().toLowerCase();
            try { await db.collection('leaderboard').doc(uid).delete(); } catch (e) {}
            if (nickKey) {
                try {
                    const nd = await db.collection('nicknames').doc(nickKey).get();
                    if (nd.exists && nd.data().uid === uid) await db.collection('nicknames').doc(nickKey).delete();
                } catch (e) {}
            }
            await db.collection('users').doc(uid).delete();
        }
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
    if (!rankingOptIn) {
        // not opted in: make sure no entry exists (once per session is enough)
        if (!rankingCleaned) {
            rankingCleaned = true;
            try { await db.collection('leaderboard').doc(currentUser.uid).delete(); } catch (e) {}
        }
        return;
    }
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
    sel.innerHTML = years.map(y => `<option value="${y}">${y}</option>`).join('') + `<option value="all">${t('yrAllTime')}</option>`;
    if (years.includes(prevMain) || prevMain === 'all') sel.value = prevMain;

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

// so the card and the comparison can never drift apart
function yearStats(year) {
    const yGames = year === 'all' ? games.slice() : games.filter(g => (g.date || '').startsWith(year));
    const totalChf = yGames.reduce((s, g) => s + (g.priceChf || 0), 0);

    const platformCounts = {};
    yGames.forEach(g => { const p = g.source || 'Steam'; platformCounts[p] = (platformCounts[p] || 0) + 1; });
    const topPlatform = Object.entries(platformCounts).sort((a, b) => b[1] - a[1])[0] || null;

    const monthCounts = {};
    yGames.forEach(g => { const m = (g.date || '').slice(0, 7); if (m) monthCounts[m] = (monthCounts[m] || 0) + 1; });
    const topMonth = Object.entries(monthCounts).sort((a, b) => b[1] - a[1])[0] || null;

    const priciest = yGames.slice().sort((a, b) => (b.priceChf || 0) - (a.priceChf || 0))[0] || null;
    const completed = yGames.filter(g => g.status === 'completed').length;

    return {
        year, games: yGames, count: yGames.length, totalChf,
        avgChf: yGames.length ? totalChf / yGames.length : 0,
        topPlatform, topMonth, priciest, completed,
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
    const isAll = year === 'all';
    $('yrYear').textContent = isAll ? t('yrAllTime') : year;
    const cmpGroup = $('yearCompareSelect') && $('yearCompareSelect').closest('.input-group');
    if (cmpGroup) cmpGroup.style.display = isAll ? 'none' : '';
    $('yrTotalLabel').textContent = t(isAll ? 'yrTotalSpentAll' : 'yrTotalSpent');
    if ($('yrHeatmapWrap')) $('yrHeatmapWrap').style.display = isAll ? 'none' : '';

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
    if (!isAll) renderPurchaseHeatmap(A.year, A.games);
}

// Siatka jak kontrybucje na GitHubie - jedna kolumna na tydzien, jeden
// kwadracik na dzien, intensywnosc koloru wg liczby zakupow tego dnia.
function todayLocal() { return localDayKey(new Date()); }

// local calendar day as YYYY-MM-DD (toISOString() would shift the day back in time zones east of UTC)
function localDayKey(d) {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function renderPurchaseHeatmap(year, yearGames) {
    const el = $('yrHeatmap');
    if (!el) return;

    const counts = {};
    yearGames.forEach(g => { if (g.date) counts[g.date] = (counts[g.date] || 0) + 1; });
    const maxCount = Math.max(1, ...Object.values(counts));

    const start = new Date(`${year}-01-01T00:00:00`);
    const end = new Date(`${year}-12-31T00:00:00`);
    // start the grid on the Sunday before 1 January so the week columns line up (like on GitHub)
    const gridStart = new Date(start);
    gridStart.setDate(gridStart.getDate() - gridStart.getDay());

    const weeks = [];
    let cur = new Date(gridStart);
    while (cur <= end) {
        const week = [];
        for (let d = 0; d < 7; d++) {
            const inYear = cur.getFullYear() === parseInt(year, 10);
            const key = localDayKey(cur);
            week.push({ date: key, count: inYear ? (counts[key] || 0) : null });
            cur.setDate(cur.getDate() + 1);
        }
        weeks.push(week);
    }

    const alphaFor = (count) => {
        if (!count) return 'var(--bg-input)';
        const ratio = count / maxCount;
        if (ratio > 0.75) return 'var(--steam-blue)';
        if (ratio > 0.5) return 'rgba(95,180,238,0.75)';
        if (ratio > 0.25) return 'rgba(95,180,238,0.5)';
        return 'rgba(95,180,238,0.25)';
    };

    const monthLabels = [];
    let lastMonth = -1;
    weeks.forEach((week, wi) => {
        const firstValid = week.find(d => d.count !== null);
        if (firstValid) {
            const m = parseInt(firstValid.date.slice(5, 7), 10) - 1;
            if (m !== lastMonth) { monthLabels.push({ wi, m }); lastMonth = m; }
        }
    });

    const colStep = 15; // 12px column + 3px gap (must match the CSS of .heatmap-grid)
    const monthRow = `<div class="heatmap-months" style="width:${weeks.length * colStep}px;">` +
        monthLabels.map(({ wi, m }) =>
            `<span style="left:${wi * colStep}px;">${escapeHtml(monthLabel(`${year}-${String(m + 1).padStart(2, '0')}`))}</span>`
        ).join('') +
        `</div>`;

    const grid = `<div class="heatmap-grid">` +
        weeks.map(week => `<div class="heatmap-col">` +
            week.map(d => d.count === null
                ? `<i class="heatmap-cell heatmap-cell-empty"></i>`
                : `<button type="button" class="heatmap-cell${d.count > 0 ? ' heatmap-cell-active' : ''}" style="background:${alphaFor(d.count)}" title="${d.date}: ${d.count}" onclick="showHeatmapDay('${d.date}', ${d.count})" onmouseenter="showHeatmapDay('${d.date}', ${d.count})"></button>`
            ).join('') +
            `</div>`
        ).join('') +
        `</div>`;

    el.innerHTML = monthRow + grid;
    const detail = $('yrHeatmapDetail');
    if (detail) detail.innerHTML = '';
}

function showHeatmapDay(date, count) {
    const detail = $('yrHeatmapDetail');
    if (!detail) return;
    detail.innerHTML = count > 0
        ? t('yrHeatmapDayCount').replace('{date}', `<strong>${escapeHtml(date)}</strong>`).replace('{count}', count)
        : t('yrHeatmapDayNone').replace('{date}', `<strong>${escapeHtml(date)}</strong>`);
}

function renderYearComparison(A) {
    const wrap = $('yrCompareWrap');
    if (!wrap) return;
    const cmpSel = $('yearCompareSelect');
    const otherYear = cmpSel ? cmpSel.value : '';

    if (!otherYear || otherYear === A.year || A.year === 'all') { wrap.style.display = 'none'; return; }
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
    const accent = css.getPropertyValue('--steam-blue').trim() || '#6aa8e8';
    const dim = css.getPropertyValue('--text-dim').trim() || '#78829a';
    const border = css.getPropertyValue('--border').trim() || '#232a38';

    if (yearsChartInstance) yearsChartInstance.destroy();
    const ctx = $('yearsChart').getContext('2d');
    yearsChartInstance = new Chart(ctx, {
        data: {
            labels: years,
            datasets: [
                { type: 'bar', label: t('yrTotalSpent') + ' (CHF)', data: totals, backgroundColor: coin, borderRadius: 0, yAxisID: 'y' },
                { type: 'line', label: t('yrGamesLabel'), data: counts, borderColor: accent, backgroundColor: accent, borderWidth: 2, pointRadius: 2, tension: 0, yAxisID: 'y1' }
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

// "Wrapped" - podsumowanie roku jako seria pelnoekranowych slajdow,
// zbudowanych na tych samych danych co karta Year in Review (yearStats()).
let wrappedSlides = [];
let wrappedIndex = 0;

function buildWrappedSlides(year) {
    const A = yearStats(year);
    const isAll = year === 'all';
    const yl = isAll ? t('yrAllTime') : year;
    const firstGame = A.games.slice().sort((a, b) => (a.date || '').localeCompare(b.date || ''))[0] || null;

    const slides = [];
    slides.push({ kind: 'intro', year: yl, all: isAll });
    if (A.count > 0) {
        slides.push({ kind: 'stat', icon: 'fa-coins', label: t(isAll ? 'yrTotalSpentAll' : 'yrTotalSpent'), value: `${A.totalChf.toFixed(2)}`, unit: 'CHF', numeric: true });
        slides.push({ kind: 'stat', icon: 'fa-layer-group', label: t('yrGamesLabel'), value: String(A.count), unit: '', numeric: true });
        if (A.topPlatform) slides.push({ kind: 'stat', icon: 'fa-gamepad', label: t('yrPlatformLabel'), value: platformMeta(A.topPlatform[0]).label(), unit: '', sub: `${A.topPlatform[1]} ${t('yrGamesLabel').toLowerCase()}` });
        if (A.priciest) slides.push({ kind: 'stat', icon: 'fa-crown', label: t('yrMostExpensive'), value: A.priciest.name, unit: '', sub: `${(A.priciest.priceChf || 0).toFixed(2)} CHF` });
        if (firstGame) slides.push({ kind: 'stat', icon: 'fa-flag-checkered', label: t('yrFirstGame'), value: firstGame.name, unit: '', sub: firstGame.date });
        if (A.topMonth) slides.push({ kind: 'stat', icon: 'fa-calendar-days', label: t('yrMonthLabel'), value: monthLabel(A.topMonth[0]), unit: '', sub: `${A.topMonth[1]} ${t('yrGamesLabel').toLowerCase()}` });
        slides.push({ kind: 'stat', icon: 'fa-check-double', label: t('yrCompletedLabel'), value: String(A.completed), unit: `/ ${A.count}`, numeric: true });
    }
    slides.push({ kind: 'outro', year: yl, all: isAll });
    return slides;
}

function openWrapped() {
    const year = $('yearReviewSelect').value || String(new Date().getFullYear());
    wrappedSlides = buildWrappedSlides(year);
    wrappedIndex = 0;
    $('wrappedOverlay').style.display = 'flex';
    renderWrappedSlide();
}

function closeWrapped() {
    $('wrappedOverlay').style.display = 'none';
}

function wrappedNext() {
    if (wrappedIndex < wrappedSlides.length - 1) { wrappedIndex++; renderWrappedSlide(); }
}
function wrappedPrev() {
    if (wrappedIndex > 0) { wrappedIndex--; renderWrappedSlide(); }
}

function renderWrappedSlide() {
    const s = wrappedSlides[wrappedIndex];
    const el = $('wrappedSlideContent');

    if (s.kind === 'intro') {
        el.innerHTML = `
            <div class="wrapped-badge">Backlog Wallet</div>
            <div class="wrapped-year">${escapeHtml(s.year)}</div>
            <div class="wrapped-intro-sub">${escapeHtml(t(s.all ? 'yrWrappedIntroAll' : 'yrWrappedIntro'))}</div>`;
    } else if (s.kind === 'outro') {
        el.innerHTML = `
            <div class="wrapped-badge">Backlog Wallet</div>
            <div class="wrapped-outro-text">${escapeHtml(t(s.all ? 'yrWrappedOutroAll' : 'yrWrappedOutro').replace('{year}', s.year))}</div>
            <div class="wrapped-outro-url">backlogwallet.com</div>`;
    } else {
        el.innerHTML = `
            <i class="fa-solid ${s.icon} wrapped-icon"></i>
            <div class="wrapped-label">${escapeHtml(s.label)}</div>
            <div class="wrapped-value${s.numeric ? ' num' : ''}">${escapeHtml(s.value)}${s.unit ? ` <small>${escapeHtml(s.unit)}</small>` : ''}</div>
            ${s.sub ? `<div class="wrapped-sub">${escapeHtml(s.sub)}</div>` : ''}`;
    }

    $('wrappedDots').innerHTML = wrappedSlides.map((_, i) =>
        `<i class="${i === wrappedIndex ? 'active' : ''}"></i>`).join('');

    const overlay = $('wrappedOverlay');
    overlay.querySelector('.wrapped-nav-prev').style.visibility = wrappedIndex === 0 ? 'hidden' : 'visible';
    overlay.querySelector('.wrapped-nav-next').style.visibility = wrappedIndex === wrappedSlides.length - 1 ? 'hidden' : 'visible';
}

async function downloadWrappedSlide() {
    if (!canvasFontsReady) await ensureCanvasFonts();
    const s = wrappedSlides[wrappedIndex];
    const w = 800, h = 1000;
    const canvas = document.createElement('canvas');
    canvas.width = w; canvas.height = h;
    const ctx = canvas.getContext('2d');

    const grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, '#111826');
    grad.addColorStop(1, '#0a0c11');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    ctx.textAlign = 'center';
    ctx.strokeStyle = '#6aa8e8';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(w / 2 - 90, 60, 180, 36);
    ctx.fillStyle = '#6aa8e8';
    ctx.font = `600 14px ${CANVAS_SANS}`;
    ctx.fillText('BACKLOG WALLET', w / 2, 83);

    if (s.kind === 'intro') {
        ctx.fillStyle = '#f2f5fa';
        ctx.font = `700 80px ${CANVAS_MONO}`;
        ctx.fillText(s.year, w / 2, h / 2);
        ctx.fillStyle = '#a8b2c4';
        ctx.font = `400 20px ${CANVAS_SANS}`;
        ctx.fillText(t(s.all ? 'yrWrappedIntroAll' : 'yrWrappedIntro'), w / 2, h / 2 + 60);
    } else if (s.kind === 'outro') {
        ctx.fillStyle = '#f2f5fa';
        ctx.font = `600 34px ${CANVAS_SANS}`;
        wrapCanvasText(ctx, t(s.all ? 'yrWrappedOutroAll' : 'yrWrappedOutro').replace('{year}', s.year), w / 2, h / 2, w - 160, 44);
        ctx.fillStyle = '#78829a';
        ctx.font = `400 14px ${CANVAS_MONO}`;
        ctx.fillText('backlogwallet.com', w / 2, h - 60);
    } else {
        ctx.fillStyle = '#78829a';
        ctx.font = `600 13px ${CANVAS_SANS}`;
        ctx.fillText(s.label.toUpperCase(), w / 2, h / 2 - 60);
        ctx.fillStyle = '#f0b429';
        const valueFace = s.numeric ? CANVAS_MONO : CANVAS_SANS;
        ctx.font = s.value.length > 16 ? `600 40px ${valueFace}` : `700 64px ${valueFace}`;
        wrapCanvasText(ctx, s.value, w / 2, h / 2, w - 140, 56);
        if (s.unit) {
            ctx.fillStyle = '#a8b2c4';
            ctx.font = `400 22px ${CANVAS_SANS}`;
            ctx.fillText(s.unit, w / 2, h / 2 + 70);
        }
        if (s.sub) {
            ctx.fillStyle = '#78829a';
            ctx.font = `400 15px ${CANVAS_SANS}`;
            ctx.fillText(s.sub, w / 2, h / 2 + (s.unit ? 110 : 80));
        }
    }

    savePng(canvas, `backlog-wallet-wrapped-${String(wrappedSlides[0].year).toLowerCase().replace(/\s+/g, '-')}-${wrappedIndex + 1}.png`);
}

async function downloadYearReviewImage() {
    if (!canvasFontsReady) await ensureCanvasFonts();
    const year = $('yrYear').textContent;
    const isAll = $('yearReviewSelect').value === 'all';
    const w = 800, h = 1000;
    const canvas = document.createElement('canvas');
    canvas.width = w; canvas.height = h;
    const ctx = canvas.getContext('2d');

    const grad = ctx.createLinearGradient(0, 0, w * 0.3, h);
    grad.addColorStop(0, '#1b2029');
    grad.addColorStop(0.7, '#0e1116');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    ctx.textAlign = 'center';
    ctx.strokeStyle = '#5fb4ee';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);
    ctx.strokeRect(60, 60, 160, 36);
    ctx.setLineDash([]);
    ctx.fillStyle = '#5fb4ee';
    ctx.font = `600 14px ${CANVAS_SANS}`;
    ctx.fillText('BACKLOG WALLET', 140, 83);

    ctx.fillStyle = '#8a96a3';
    ctx.font = `500 26px ${CANVAS_MONO}`;
    ctx.fillText(year, w / 2, 170);

    ctx.fillStyle = '#8a96a3';
    ctx.font = `600 11px ${CANVAS_SANS}`;
    ctx.fillText(t(isAll ? 'yrTotalSpentAll' : 'yrTotalSpent').toUpperCase(), w / 2, 220);

    ctx.fillStyle = '#f0a33c';
    ctx.font = `600 72px ${CANVAS_MONO}`;
    ctx.fillText($('yrTotal').textContent.replace('CHF', '').trim(), w / 2, 310);
    ctx.fillStyle = '#8a96a3';
    ctx.font = `400 20px ${CANVAS_SANS}`;
    ctx.fillText('CHF', w / 2, 345);

    const stats = [
        [$('yrGames').textContent, t('yrGamesLabel')],
        [$('yrTopPlatform').textContent, t('yrPlatformLabel')],
        [$('yrTopMonth').textContent, t('yrMonthLabel')]
    ];
    const colW = w / 3;
    stats.forEach((s, i) => {
        const cx = colW * i + colW / 2;
        ctx.fillStyle = '#5fb4ee';
        ctx.font = `600 24px ${CANVAS_MONO}`;
        ctx.fillText(s[0], cx, 430);
        ctx.fillStyle = '#8a96a3';
        ctx.font = `600 10px ${CANVAS_SANS}`;
        ctx.fillText(String(s[1]).toUpperCase(), cx, 452);
    });

    ctx.strokeStyle = 'rgba(255,255,255,0.15)';
    ctx.setLineDash([3, 5]);
    ctx.beginPath(); ctx.moveTo(80, 500); ctx.lineTo(w - 80, 500); ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = '#dce3e9';
    ctx.font = `400 14px ${CANVAS_SANS}`;
    const highlightText = $('yrExpensive').textContent || '';
    wrapCanvasText(ctx, highlightText, w / 2, 540, w - 160, 20);

    ctx.fillStyle = '#6e7982';
    ctx.font = `400 11px ${CANVAS_MONO}`;
    ctx.fillText('backlogwallet.com', w / 2, h - 40);

    savePng(canvas, `backlog-wallet-${isAll ? 'all-time' : year}.png`);
}


// ---- feedback form: delivered by email through Web3Forms (key is public by design) ----
const FEEDBACK_ACCESS_KEY = '57e77a17-973a-4bea-b128-b23d7d90d2a4';
const FEEDBACK_COOLDOWN_MS = 60000;

function setFeedbackMsg(key, ok) {
    const el = $('feedbackMsg');
    el.textContent = key ? t(key) : '';
    el.className = 'auth-msg' + (key ? (' show ' + (ok ? 'ok' : 'error')) : '');
}

$('feedbackForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    if ($('feedbackBot').checked) return;
    const subject = $('feedbackSubject').value.trim();
    const message = $('feedbackMessage').value.trim();
    if (!subject || !message) return;

    let last = 0;
    try { last = parseInt(localStorage.getItem('feedbackLastSent') || '0', 10) || 0; } catch (err) {}
    if (Date.now() - last < FEEDBACK_COOLDOWN_MS) { setFeedbackMsg('feedbackWait', false); return; }

    const btn = $('feedbackSubmit');
    btn.disabled = true;
    setFeedbackMsg('feedbackSending', true);
    try {
        const res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({
                access_key: FEEDBACK_ACCESS_KEY,
                subject: '[Backlog Wallet] ' + subject,
                from_name: 'Backlog Wallet feedback',
                message: message
            })
        });
        const data = await res.json();
        if (!res.ok || !data.success) throw new Error('send failed');
        try { localStorage.setItem('feedbackLastSent', String(Date.now())); } catch (err) {}
        $('feedbackForm').reset();
        setFeedbackMsg('feedbackOk', true);
    } catch (err) {
        setFeedbackMsg('feedbackFail', false);
    } finally {
        btn.disabled = false;
    }
});

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
let rankingOptIn = false;
let userMeta = {};
let rankingCleaned = false;

function updateRankingUI() {
    if ($('rankingToggle')) $('rankingToggle').checked = rankingOptIn;
    renderStoredSummary();
}

function renderStoredSummary() {
    const el = $('storedSummary');
    if (!el || !currentUser) return;
    const fmt = (iso) => { const d = iso ? new Date(iso) : null; return (d && !isNaN(d)) ? d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) : '-'; };
    const registered = userMeta.registeredAt || (currentUser.metadata && currentUser.metadata.creationTime) || null;
    const rows = [
        ['stEmail', currentUser.email || '-'],
        ['stNick', (userProfile && userProfile.nickname) || '-'],
        ['stRegistered', fmt(registered)],
        ['stGames', String((games || []).length)],
        ['stGoals', String((wishGoals || []).length)],
        ['stRanking', rankingOptIn ? t('stOn') : t('stOff')],
        ['stShare', publicShareEnabled ? t('stOn') : t('stOff')],
        ['stTerms', userMeta.termsAcceptedAt ? fmt(userMeta.termsAcceptedAt) : t('stEarlier')]
    ];
    el.innerHTML = rows.map(r => '<tr><th>' + escapeHtml(t(r[0])) + '</th><td>' + escapeHtml(r[1]) + '</td></tr>').join('');
}

async function toggleRanking(enabled) {
    if (!db || !currentUser) return;
    try {
        await db.collection('users').doc(currentUser.uid).set({ rankingOptIn: enabled }, { merge: true });
        rankingOptIn = enabled;
        rankingCleaned = false;
        await updateLeaderboardEntry();
        showToastText(enabled ? t('rankOnMsg') : t('rankOffMsg'));
    } catch (e) {
        showToastText('Could not change the ranking setting.');
        updateRankingUI();
    }
}

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
        showToastText('Could not change the sharing setting.');
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
    if (!db) { $('publicShareBody').innerHTML = '<div class="empty-state">Could not connect to the database.</div>'; return true; }
    try {
        const doc = await db.collection('users').doc(uid).get();
        if (!doc.exists || doc.data().publicShare !== true) {
            $('publicShareBody').innerHTML = '<div class="empty-state">This link is invalid or the library is no longer shared.</div>';
            return true;
        }
        const d = doc.data();
        const nick = (d.profile && d.profile.nickname) || 'Player';
        const pubGames = Array.isArray(d.games) ? d.games : [];
        const totalChf = pubGames.reduce((s, g) => s + (g.priceChf || 0), 0);
        $('publicShareTitle').textContent = `Library: ${nick}`;
        const rows = pubGames.slice().sort((a, b) => (b.date || '').localeCompare(a.date || ''))
            .map(g => {
                const meta = platformMeta(g.source || 'Steam');
                const sharedStatus = { completed: ['status-completed', 'fa-check'], not_completed: ['status-not-completed', 'fa-xmark'], in_progress: ['status-in-progress', 'fa-hourglass-half'] }[g.status];
                const statusIcon = sharedStatus ? ` <span class="status-badge ${sharedStatus[0]}"><i class="fa-solid ${sharedStatus[1]}"></i></span>` : '';
                return `<tr><td>${escapeHtml(g.name)}${statusIcon}</td><td><span class="source-txt ${meta.cls}">${meta.label()}</span></td><td>${g.date || '-'}</td><td style="text-align:right; font-weight:600;">${(g.price || 0).toFixed(2)} ${escapeHtml(g.currency || '')}</td></tr>`;
            }).join('');
        $('publicShareBody').innerHTML = `
            <div class="stats-row" style="margin-bottom:20px;">
                <div class="stat-tile"><div class="stat-label"><i class="fa-solid fa-gamepad"></i> Games</div><div class="stat-value">${pubGames.length}</div></div>
                <div class="stat-tile stat-hero"><div class="stat-label"><i class="fa-solid fa-coins"></i> Library value</div><div class="stat-value">${totalChf.toFixed(2)} <small>CHF</small></div></div>
            </div>
            <div class="table-container" style="max-height:500px; padding:0;">
                <table><thead><tr><th>Title</th><th>Platform</th><th>Date</th><th style="text-align:right;">Price</th></tr></thead><tbody>${rows || '<tr><td colspan="4" style="text-align:center; color:var(--text-dim);">No games.</td></tr>'}</tbody></table>
            </div>
        `;
    } catch (e) {
        $('publicShareBody').innerHTML = '<div class="empty-state">Could not load the library.</div>';
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
            const banned = d.banned === true;
            const registeredAt = d.registeredAt ? new Date(d.registeredAt) : null;
            const registeredLabel = registeredAt && !isNaN(registeredAt) ? registeredAt.toLocaleDateString('pl-PL') : '-';

            adminUsersCache[doc.id] = d;
            rows.push({ uid: doc.id, nick, uGamesLen: uGames.length, userChf, banned, registeredLabel });
        });

        rows.sort((a, b) => b.userChf - a.userChf);

        rows.forEach(r => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${escapeHtml(r.nick)}</td><td style="white-space:nowrap;">${r.registeredLabel}</td><td>${r.uGamesLen}</td><td>${r.userChf.toFixed(2)}</td><td>${r.banned ? 'Banned' : 'Active'}</td>
                <td style="display:flex; gap:6px; flex-wrap:wrap; justify-content:flex-end;">
                    <button type="button" class="btn-tool" style="width:auto; padding:4px 10px;" onclick="showAdminUserDetail('${r.uid}')"><i class="fa-solid fa-eye"></i></button>
                    <button type="button" class="btn-tool" style="width:auto; padding:4px 10px;" onclick="${r.banned ? `unbanUser('${r.uid}')` : `openBanModal('${r.uid}')`}">${r.banned ? 'Unban' : 'Ban'}</button>
                    <button type="button" class="btn-danger-ghost" style="width:auto; padding:4px 10px;" onclick="deleteUserRecords('${r.uid}')"><i class="fa-solid fa-trash"></i></button>
                </td>`;
            usersTbody.appendChild(tr);
        });

        $('adminStatTotalGames').textContent = totalGames;
        $('adminStatUsers').textContent = usersSnap.size;
        $('adminStatAvgPrice').textContent = priceCount ? (priceSumEur / priceCount).toFixed(2) : '-';
        const totalSourced = steamCount + keyCount;
        $('adminStatSourceSplit').textContent = totalSourced
            ? `Steam ${Math.round(steamCount / totalSourced * 100)}% / Key Store ${Math.round(keyCount / totalSourced * 100)}%`
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
        showToastText('Failed to load the admin panel (check the Firestore rules).');
    }
}

function showAdminUserDetail(uid) {
    const d = adminUsersCache[uid];
    if (!d) return;
    const nick = (d.profile && d.profile.nickname) || '(no nickname)';
    const banned = d.banned === true;
    const theme = (d.profile && d.profile.theme) || '-';
    const uGames = Array.isArray(d.games) ? d.games : [];
    const totalChf = uGames.reduce((s, g) => s + (g.priceChf || 0), 0);
    const registeredAt = d.registeredAt ? new Date(d.registeredAt) : null;
    const registeredLabel = registeredAt && !isNaN(registeredAt) ? registeredAt.toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' }) : '-';

    const platformCounts = {};
    uGames.forEach(g => {
        const src = g.source || 'Steam';
        platformCounts[src] = (platformCounts[src] || 0) + 1;
    });
    const platformChips = Object.entries(platformCounts).sort((a, b) => b[1] - a[1])
        .map(([src, count]) => `<span class="source-txt ${platformMeta(src).cls}" style="margin-right:8px; display:inline-block; margin-bottom:6px;">${escapeHtml(src)}: ${count}</span>`)
        .join('') || '<span style="color:var(--text-dim);">No games</span>';

    let banInfoHtml = '';
    if (banned) {
        const until = d.banUntil ? new Date(d.banUntil) : null;
        const untilLabel = until ? until.toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' }) : 'Permanent';
        banInfoHtml = `<div style="margin-bottom:16px; padding:12px 14px; background:var(--bg-input); border:1px solid var(--err); border-radius:8px;">
            <strong style="color:var(--err);"><i class="fa-solid fa-ban"></i> Account banned</strong><br>
            <span style="font-size:13px;">Reason: ${escapeHtml(d.banReason || '(no reason given)')}</span><br>
            <span style="font-size:13px; color:var(--text-dim);">Until: ${untilLabel}</span>
        </div>`;
    }

    let rows = uGames.slice().sort((a, b) => (b.date || '').localeCompare(a.date || ''))
        .map(g => `<tr><td>${escapeHtml(g.name)}</td><td>${escapeHtml(g.source || 'Steam')}</td><td>${g.date || '-'}</td><td>${(g.price || 0).toFixed(2)} ${escapeHtml(g.currency || '')}</td></tr>`)
        .join('');
    if (!rows) rows = `<tr><td colspan="4" style="text-align:center; color:var(--text-dim);">No games on this account.</td></tr>`;

    $('adminModalTitle').textContent = 'Account details: ' + nick;
    $('adminModalBody').innerHTML = `
        ${banInfoHtml}
        <div class="stats-row" style="margin-bottom:16px;">
            <div class="stat-tile"><div class="stat-label">UID</div><div class="stat-value" style="font-size:12px; word-break:break-all;">${escapeHtml(uid)}</div></div>
            <div class="stat-tile"><div class="stat-label">Registered</div><div class="stat-value" style="font-size:14px;">${registeredLabel}</div></div>
            <div class="stat-tile"><div class="stat-label">Theme</div><div class="stat-value" style="font-size:16px;">${escapeHtml(String(theme))}</div></div>
            <div class="stat-tile"><div class="stat-label">Status</div><div class="stat-value" style="font-size:16px;">${banned ? 'Banned' : 'Active'}</div></div>
            <div class="stat-tile stat-hero"><div class="stat-label">Library value</div><div class="stat-value">${totalChf.toFixed(2)} <small>CHF</small></div></div>
        </div>
        <h4 class="acc-h">Platforms</h4>
        <div style="margin-bottom:18px;">${platformChips}</div>
        <h4 class="acc-h">Games on this account (${uGames.length})</h4>
        <div class="table-container" style="max-height:300px;">
            <table><thead><tr><th>Title</th><th>Platform</th><th>Date</th><th>Price</th></tr></thead><tbody>${rows}</tbody></table>
        </div>
        <div style="margin-top:18px; display:flex; gap:10px; flex-wrap:wrap;">
            ${banned
                ? `<button type="button" class="btn-tool" onclick="unbanUser('${uid}'); closeAdminUserModal();">Unban account</button>`
                : `<button type="button" class="btn-danger-ghost" onclick="closeAdminUserModal(); openBanModal('${uid}');">Ban account</button>`}
            <button type="button" class="btn-danger-ghost" onclick="deleteUserRecords('${uid}')"><i class="fa-solid fa-trash"></i> Delete all account data</button>
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
    if (!confirm(`Really delete ALL data of the account "${nick}"?\n\nThis removes the game library, profile, leaderboard entry and nickname record from the database. The sign-in account (e-mail/password) stays active in Firebase Authentication - it has to be deleted separately from the Firebase console.\n\nThis cannot be undone.`)) return;
    try {
        const nickKey = (d.profile && d.profile.nickname) ? d.profile.nickname.toLowerCase() : null;
        await db.collection('users').doc(uid).delete();
        try { await db.collection('leaderboard').doc(uid).delete(); } catch (e) {}
        if (nickKey) { try { await db.collection('nicknames').doc(nickKey).delete(); } catch (e) {} }
        closeAdminUserModal();
        showToastText('Account data has been deleted.');
        loadAdminPanel();
    } catch (e) {
        showToastText('Could not delete the account data (check the Firestore rules).');
    }
}

let banTargetUid = null;

function openBanModal(uid) {
    if (!isAdmin()) return;
    banTargetUid = uid;
    const d = adminUsersCache[uid] || {};
    const nick = (d.profile && d.profile.nickname) || uid.slice(0, 8) + '…';
    $('banModalTitle').textContent = 'Ban user: ' + nick;
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
    if (!reason) { showToastText('Enter a ban reason - the user will see it.'); return; }
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
        try { await db.collection('leaderboard').doc(uid).delete(); } catch (e) {} // remove from the leaderboard
        closeBanModal();
        closeAdminUserModal();
        showToastText('User banned.');
        loadAdminPanel();
    } catch (e) {
        showToastText('Could not ban the user (check the Firestore rules).');
    }
}

async function unbanUser(uid) {
    if (!db || !isAdmin()) return;
    if (!confirm('Unban this user?')) return;
    try {
        await db.collection('users').doc(uid).set({
            banned: false,
            banReason: firebase.firestore.FieldValue.delete(),
            banUntil: firebase.firestore.FieldValue.delete()
        }, { merge: true });
        closeAdminUserModal();
        showToastText('User unbanned.');
        loadAdminPanel();
    } catch (e) {
        showToastText('Could not unban the user (check the Firestore rules).');
    }
}

async function forceSyncLeaderboard() {
    if (!db || !isAdmin()) return;
    try {
        const usersSnap = await db.collection('users').get();
        let done = 0, failed = 0;
        for (const doc of usersSnap.docs) {
            const d = doc.data();
            if (d.banned === true || d.rankingOptIn !== true) continue;
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
        showToastText(`Leaderboard synced: ${done} accounts${failed ? ', errors: ' + failed : ''}.`);
        renderRanking();
    } catch (e) {
        console.error(e);
        showToastText('Could not sync the leaderboard.');
    }
}

initPublicShareIfNeeded().then(isPublicShare => {
    if (isPublicShare) return;
    initTheme();
    changeLanguage(currentLang);
    if (!firebaseReady) { clearSessionData(); updateUserChip(); }
    fetchExchangeRates();
    initCurrencyPreference();
    recordVisit();
    initCookieConsent();
});

function updateFooterDateTime(){
 const el=document.getElementById('footerDateTime');
 if(!el) return;
 const lang='en';
 el.textContent=new Date().toLocaleString(lang,{dateStyle:'medium',timeStyle:'short'});
}
document.addEventListener('DOMContentLoaded',updateFooterDateTime);
setInterval(updateFooterDateTime,30000);


// ---------------------------------------------------------------------------
// Accessibility layer: keyboard use and screen readers
// ---------------------------------------------------------------------------
(function () {
    // sortable column headers work with the keyboard too
    document.addEventListener('keydown', (e) => {
        const th = e.target && e.target.closest && e.target.closest('th[data-sort]');
        if (th && e.target === th && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); th.click(); }
    });

    // dialogs: focus moves in when they open, Tab stays inside, Escape closes, focus returns where it was
    const dialogs = [
        { id: 'adminUserModal', close: () => typeof closeAdminUserModal === 'function' && closeAdminUserModal() },
        { id: 'banModal', close: () => typeof closeBanModal === 'function' && closeBanModal() },
        { id: 'wrappedOverlay', inner: '.wrapped-modal', close: () => typeof closeWrapped === 'function' && closeWrapped() }
    ];
    const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const open = [];   // stack of {el, root, close, returnTo}
    const isShown = (el) => el.style.display && el.style.display !== 'none';
    const focusables = (root) => Array.from(root.querySelectorAll(FOCUSABLE)).filter(n => n.offsetParent !== null || n === document.activeElement);

    function onShow(d) {
        if (open.some(o => o.el === d.el)) return;
        const root = d.inner ? d.el.querySelector(d.inner) : d.el;
        open.push({ el: d.el, root, close: d.close, returnTo: document.activeElement });
        setTimeout(() => {
            const f = focusables(root);
            (f[0] || root).focus && (f[0] || root).focus();
        }, 30);
    }
    function onHide(d) {
        const i = open.findIndex(o => o.el === d.el);
        if (i < 0) return;
        const entry = open.splice(i, 1)[0];
        if (entry.returnTo && document.body.contains(entry.returnTo) && entry.returnTo.focus) entry.returnTo.focus();
    }
    dialogs.forEach(d => {
        d.el = document.getElementById(d.id);
        if (!d.el) return;
        if (d.inner) { const r = d.el.querySelector(d.inner); if (r && !r.hasAttribute('tabindex')) r.setAttribute('tabindex', '-1'); }
        else if (!d.el.hasAttribute('tabindex')) d.el.setAttribute('tabindex', '-1');
        new MutationObserver(() => { isShown(d.el) ? onShow(d) : onHide(d); })
            .observe(d.el, { attributes: true, attributeFilter: ['style'] });
    });
    document.addEventListener('keydown', (e) => {
        const top = open[open.length - 1];
        if (!top) return;
        if (e.key === 'Escape') { e.preventDefault(); top.close(); return; }
        if (e.key !== 'Tab') return;
        const f = focusables(top.root);
        if (!f.length) { e.preventDefault(); top.root.focus(); return; }
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && (document.activeElement === first || !top.root.contains(document.activeElement))) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && (document.activeElement === last || !top.root.contains(document.activeElement))) { e.preventDefault(); first.focus(); }
    });

    // moving to another view: screen readers start at the new view's heading
    const origShowView = showView;
    showView = function (view) {
        origShowView(view);
        const heading = document.querySelector('#view-' + view + ' h2, #view-' + view + ' .card-head');
        if (heading && !heading.hasAttribute('tabindex')) heading.setAttribute('tabindex', '-1');
        if (heading) heading.focus({ preventScroll: true });
    };
    updateAriaSort();
})();
