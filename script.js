/* NxllSec site script. To use your own bot, change CLIENT_ID below. */
(function () {
  "use strict";

  document.documentElement.classList.add("js");

  var CLIENT_ID = "1558056855236907048";
  var INVITE = "https://discord.com/oauth2/authorize?client_id=" + CLIENT_ID +
    "&permissions=8&scope=bot+applications.commands";
  document.querySelectorAll("[data-invite]").forEach(function (a) { a.href = INVITE; });

  /* ---------- command data (generated from the bot's own code) ---------- */
  var CATS = [{"name":"Anti-Nuke","cmds":[{"n":"antinuke","a":["an"],"u":"antinuke [on|off]","d":"View the dashboard or toggle it","s":[]},{"n":"antinukemode","a":["anm"],"u":"antinukemode <\"reactive\"|\"preventive\">","d":"Preventive (fast ban or kick on the first action, default) or reactive (after 3 actions)","s":[]},{"n":"punishment","a":["pun"],"u":"punishment ban|kick|strip|timeout","d":"Fast punishment for nukers: ban, kick, strip or timeout","s":[]},{"n":"setup","a":["su"],"u":"setup","d":"Auto-config everything (anti-nuke, automod, logs)","s":[]},{"n":"antinukemodule","a":[],"u":"antinukemodule <module> [on|off]","d":"Toggle one module","s":[]},{"n":"wl","a":["whitelist","w"],"u":"wl add|remove|list|clear","d":"Whitelist manager","s":["add","clear","remove","list"]},{"n":"extraowner","a":["eo"],"u":"extraowner add|remove|list|clear","d":"Extra owners","s":["list","remove","clear","add"]},{"n":"antibot","a":["abot"],"u":"antibot [on|off]","d":"Remove bots that join the server and punish the user who added them","s":[]},{"n":"antiban","a":["ab"],"u":"antiban [on|off]","d":"Punish users who try to ban members","s":[]},{"n":"antikick","a":["ak"],"u":"antikick [on|off]","d":"Punish users who try to kick members","s":[]},{"n":"antimemberupdate","a":["amu"],"u":"antimemberupdate [on|off]","d":"Punish users who give dangerous roles to members","s":[]},{"n":"antiguildupdate","a":["agu"],"u":"antiguildupdate [on|off]","d":"Punish users who try to update the server","s":[]},{"n":"antichannelcreate","a":["acc"],"u":"antichannelcreate [on|off]","d":"Punish users who try to create a channel","s":[]},{"n":"antichanneldelete","a":["acd"],"u":"antichanneldelete [on|off]","d":"Punish users who try to delete a channel","s":[]},{"n":"antichannelupdate","a":["acu"],"u":"antichannelupdate [on|off]","d":"Punish users who try to update a channel","s":[]},{"n":"antirolecreate","a":["arc"],"u":"antirolecreate [on|off]","d":"Punish users who try to create a role","s":[]},{"n":"antiroledelete","a":["ard"],"u":"antiroledelete [on|off]","d":"Punish users who try to delete a role","s":[]},{"n":"antiroleupdate","a":["aru"],"u":"antiroleupdate [on|off]","d":"Punish users who try to update a role","s":[]},{"n":"antiwebhook","a":["awh"],"u":"antiwebhook [on|off]","d":"Remove webhooks that get created and punish the user","s":[]}]},{"name":"Automod","cmds":[{"n":"automod","a":["am"],"u":"automod [on|off]","d":"Automod dashboard / master switch","s":[]},{"n":"antilink","a":["al"],"u":"antilink [on|off]","d":"Delete links & invites from members","s":[]},{"n":"antispam","a":["asp"],"u":"antispam [on|off|<messages> <seconds>]","d":"Deletes spam and times the member out for 10 minutes. Off until you set it up, e.g. antispam 4 5","s":[]},{"n":"antimention","a":["amn"],"u":"antimention [on|off|<limit>]","d":"Mention filter","s":[]},{"n":"antinsfw","a":["ans"],"u":"antinsfw [on|off|add <word>|remove <word>|list]","d":"Blocked-word filter","s":[]},{"n":"automodsync","a":[],"u":"automodsync","d":"Create or refresh Discord's built-in AutoMod rules","s":[]}]},{"name":"Moderation","cmds":[{"n":"ban","a":["bm"],"u":"ban @user [reason]","d":"Ban a member","s":[]},{"n":"hardban","a":["hb"],"u":"hardban @user [reason]","d":"Ban and delete the last 7 days of messages","s":[]},{"n":"softban","a":["sb"],"u":"softban @user [reason]","d":"Ban + instantly unban to wipe their messages","s":[]},{"n":"unban","a":["ub"],"u":"unban <user id>","d":"Unban a user by ID or name#tag","s":[]},{"n":"kick","a":["kc"],"u":"kick @user [reason]","d":"Kick a member","s":[]},{"n":"timeout","a":["tmo"],"u":"timeout @user 10m [reason]","d":"Timeout a member (s/m/h/d/w)","s":[]},{"n":"untimeout","a":["utm"],"u":"untimeout @user","d":"Remove a timeout","s":[]},{"n":"jail","a":["jx"],"u":"jail @user [reason]","d":"Jail a member (removes their roles)","s":[]},{"n":"unjail","a":["uj"],"u":"unjail @user","d":"Release a jailed member","s":[]},{"n":"jlist","a":["jl"],"u":"jlist","d":"List jailed members","s":[]},{"n":"purge","a":["pg"],"u":"purge <amount>","d":"Delete messages","s":[]},{"n":"purgeuser","a":["pu"],"u":"purgeuser @user [scan=50]","d":"Delete a user's recent messages","s":[]},{"n":"lock","a":["lk"],"u":"lock [#channel]","d":"Lock a channel","s":[]},{"n":"unlock","a":["ulk"],"u":"unlock [#channel]","d":"Unlock a channel","s":[]},{"n":"slowmode","a":["sm"],"u":"slowmode <seconds>","d":"Set slowmode (0 = off)","s":[]},{"n":"role","a":["rl"],"u":"role @role @user1 [@user2 ...]","d":"Toggle a role on up to 5 members","s":[]},{"n":"stealemoji","a":["stl"],"u":"stealemoji <emoji> [name]","d":"Copy a custom emoji","s":[]},{"n":"setprefix","a":["sp"],"u":"setprefix <prefix>","d":"Change the prefix","s":[]}]},{"name":"Logs","cmds":[{"n":"autosetuplogs","a":["asl"],"u":"autosetuplogs","d":"Auto-create a Logs category with all log channels","s":[]},{"n":"setchannellog","a":["scl"],"u":"setchannellog #channel","d":"Channel & role log","s":[]},{"n":"setguildlog","a":["sgl"],"u":"setguildlog #channel","d":"Guild/member log","s":[]},{"n":"setmsglog","a":["smsg"],"u":"setmsglog #channel","d":"Message log","s":[]},{"n":"setvclog","a":["svc"],"u":"setvclog #channel","d":"Voice log","s":[]},{"n":"setmodlog","a":["smod"],"u":"setmodlog #channel","d":"Moderation log","s":[]}]},{"name":"Tickets","cmds":[{"n":"ticket","a":["tickets","tk"],"u":"ticket <subcommand>","d":"Ticket system, every subcommand is listed in help","s":["panelmsg","add","transcript","config","role","rename","panel","close","claim","limit","category","remove","setup","logs"]}]},{"name":"Join to create","cmds":[{"n":"j2c","a":["vm"],"u":"j2c setup|creator|category|panel|config|disable","d":"Temp voice rooms","s":["creator","panel","disable","category","setup","config"]}]},{"name":"Welcome & verification","cmds":[{"n":"verification","a":["vf"],"u":"verification #channel @role","d":"Button verification","s":["setimage","disable","setthumbnail","status","reset","setcolor"]},{"n":"greet","a":["gr"],"u":"greet setup|channel|edit|embed|test|config|autodelete|reset","d":"Welcome messages","s":["edit","config","test","reset","channel","embed","setup","autodelete"]},{"n":"farewell","a":["fw"],"u":"farewell setup|channel|edit|embed|test|config|autodelete|reset","d":"Farewell messages","s":["reset","test","channel","autodelete","embed","setup","config","edit"]}]},{"name":"Copy server","cmds":[{"n":"copyserver","a":[],"u":"copyserver [name]","d":"Copy roles, channels and settings into a code sent to your DMs (owner only)","s":[]},{"n":"pasteserver","a":[],"u":"pasteserver <code>","d":"Paste a copied server here: add to it, or clear and paste (owner only)","s":[]},{"n":"copylist","a":[],"u":"copylist","d":"Show the copies made from this server, sent to your DMs","s":[]},{"n":"copydelete","a":[],"u":"copydelete <code>","d":"Delete a copy so its code stops working","s":[]}]},{"name":"Leveling","cmds":[{"n":"rank","a":["rk"],"u":"rank [@user]","d":"Show your rank card","s":[]},{"n":"leaderboard","a":["lb"],"u":"leaderboard","d":"Top 10 XP & level leaderboard","s":[]},{"n":"levelrole","a":["lr"],"u":"levelrole add <level> @role|remove <level>|list","d":"Level rewards","s":["list","remove","add"]},{"n":"setlevellog","a":["sll"],"u":"setlevellog #channel","d":"Level-up channel or setlevellog reset","s":[]},{"n":"setlevel","a":["slv"],"u":"setlevel @user <level>","d":"Set a member's level","s":[]},{"n":"messagelevel","a":[],"u":"messagelevel [on|off]","d":"Count members' messages and give role rewards (off by default)","s":[]},{"n":"msgrole","a":[],"u":"msgrole add <messages> @role|remove <messages>|list","d":"Give a role at 500, 1000, 5000 messages and so on","s":["add","remove","list"]},{"n":"msgrank","a":[],"u":"msgrank [@user]","d":"Show message count, rank and the next reward","s":[]},{"n":"msgtop","a":[],"u":"msgtop","d":"Top 10 members by messages","s":[]},{"n":"setmsglevellog","a":[],"u":"setmsglevellog #channel","d":"Channel for message milestones, or setmsglevellog reset","s":[]}]},{"name":"Utility","cmds":[{"n":"help","a":["h"],"u":"help [command]","d":"Browse every command or look one up","s":[]},{"n":"autorole","a":["arole"],"u":"autorole set @role|remove|status","d":"Join role for new members","s":["status","set","remove"]},{"n":"purgebots","a":["pb"],"u":"purgebots [#channel] [amount]","d":"Bulk delete bot messages","s":[]},{"n":"afk","a":["af"],"u":"afk [reason]","d":"Set yourself AFK","s":[]},{"n":"avatar","a":["av"],"u":"avatar [@user]","d":"Show an avatar","s":[]},{"n":"banner","a":["bn"],"u":"banner [@user]","d":"Show a profile banner","s":[]},{"n":"userinfo","a":["ui"],"u":"userinfo [@user]","d":"Info about a user","s":[]},{"n":"serverinfo","a":["si"],"u":"serverinfo","d":"Info about this server","s":[]},{"n":"serveravatar","a":["sav"],"u":"serveravatar","d":"Show the server icon","s":[]},{"n":"serverbanner","a":["sbn"],"u":"serverbanner","d":"Show the server banner","s":[]},{"n":"membercount","a":["mc"],"u":"membercount","d":"Member count","s":[]},{"n":"roles","a":["rls"],"u":"roles","d":"List server roles","s":[]},{"n":"inrole","a":["ir"],"u":"inrole @role","d":"Members with a role","s":[]},{"n":"snipe","a":["sn"],"u":"snipe","d":"Show the last deleted message","s":[]},{"n":"clearsnipe","a":["cs"],"u":"clearsnipe","d":"Clear the sniped message","s":[]},{"n":"editsnipe","a":["es"],"u":"editsnipe","d":"Show the last edited message","s":[]},{"n":"prefixless","a":["pl"],"u":"prefixless give|remove|list @user","d":"Run commands without the prefix (server owner / bot owner only, this server only)","s":["remove","give","list"]},{"n":"botperms","a":["bp"],"u":"botperms","d":"Show what permissions I actually have here (for troubleshooting)","s":[]},{"n":"stats","a":["st"],"u":"stats","d":"Bot statistics","s":[]},{"n":"ping","a":["pi"],"u":"ping","d":"Bot latency","s":[]},{"n":"botinvite","a":["bi"],"u":"botinvite","d":"Get the link to add me to a server","s":[]},{"n":"autoresponder","a":["ar"],"u":"ar add <trigger> | <reply>","d":"Auto replies, ar remove <trigger>, ar list","s":["list","remove","add"]},{"n":"autoreact","a":["areact"],"u":"autoreact add <word> <emoji>","d":"Auto emoji reactions, remove <word>, list","s":["remove","add","list"]}]},{"name":"Voice","cmds":[{"n":"vcjoin","a":["vj"],"u":"vcjoin [#voice-channel]","d":"Make me join a voice channel and deafen myself (no channel = the one you are in)","s":[]},{"n":"vcleave","a":["vl"],"u":"vcleave","d":"Make me leave the voice channel","s":[]}]}];
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function h(tag, attrs) {
    var el = document.createElement(tag);
    for (var k in (attrs || {})) {
      if (k === "class") el.className = attrs[k]; else el.setAttribute(k, attrs[k]);
    }
    for (var i = 2; i < arguments.length; i++) {
      var c = arguments[i];
      if (c == null) continue;
      el.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    }
    return el;
  }



  /* ---------- protection: no select, no drag, leave the page when dev tools open ---------- */
  var LOCK = true;                    /* set to false while you are editing the site */
  var LEAVE_TO = "about:blank";       /* where visitors are sent when dev tools are detected */
  if (LOCK) {
    function inField(t) { return t && t.closest && t.closest("input, textarea"); }
    ["selectstart", "dragstart", "contextmenu", "copy", "cut"].forEach(function (ev) {
      document.addEventListener(ev, function (e) { if (!inField(e.target)) e.preventDefault(); });
    });
    document.querySelectorAll("img, a").forEach(function (n) { n.setAttribute("draggable", "false"); });
    document.addEventListener("keydown", function (e) {
      var k = (e.key || "").toLowerCase(), c = e.ctrlKey || e.metaKey;
      var devKey = e.key === "F12" || (c && e.shiftKey && ["i", "j", "c", "k"].indexOf(k) > -1) || (c && k === "u") ||
        (e.metaKey && e.altKey && ["i", "j", "c", "u"].indexOf(k) > -1);
      var selAll = c && k === "a" && !inField(e.target);
      if (devKey || selAll || (c && k === "s")) { e.preventDefault(); if (devKey) leave(); }
    });
    var left = false;
    function leave() { if (left) return; left = true; location.replace(LEAVE_TO); }
    /* docked dev tools change the gap between the window and the page */
    function sizeCheck() {
      var w = window.outerWidth - window.innerWidth > 170, h = window.outerHeight - window.innerHeight > 170;
      if (w || h) leave();
    }
    /* undocked dev tools: a debugger statement stalls the page only while they are open */
    function pauseCheck() {
      var t = performance.now();
      (function () {}).constructor("debugger")();
      if (performance.now() - t > 120) leave();
    }
    setInterval(function () { sizeCheck(); pauseCheck(); }, 1000);
    window.addEventListener("resize", sizeCheck);
  }

  /* ---------- background: random words drifting on black ---------- */
  (function () {
    var box = document.getElementById("floaters");
    if (!box) return;
    var WORDS = [];
    CATS.forEach(function (c) {
      c.cmds.forEach(function (m) {
        WORDS.push("," + m.n);
        m.a.forEach(function (al) { WORDS.push("," + al); });
      });
    });
    function rnd(a, b) { return a + Math.random() * (b - a); }
    var small = window.innerWidth < 700;
    var count = small ? 22 : 42;
    for (var i = 0; i < count; i++) {
      var el = document.createElement("span");
      el.className = "fw";
      el.textContent = WORDS[Math.floor(Math.random() * WORDS.length)];
      var size = rnd(9, 12);
      el.style.left = rnd(-2, 96).toFixed(1) + "%";
      el.style.top = rnd(-2, 96).toFixed(1) + "%";
      el.style.fontSize = size.toFixed(1) + "px";
      el.style.setProperty("--o", rnd(.08, .24).toFixed(2));
      el.style.setProperty("--dx", rnd(-70, 70).toFixed(0) + "px");
      el.style.setProperty("--dy", rnd(-90, 90).toFixed(0) + "px");
      el.style.animationDuration = rnd(14, 34).toFixed(1) + "s, " + rnd(6, 12).toFixed(1) + "s";
      el.style.animationDelay = (-rnd(0, 30)).toFixed(1) + "s, " + (-rnd(0, 10)).toFixed(1) + "s";
      box.appendChild(el);
    }
  })();

  if (document.getElementById("log")) {
  /* ---------- simulated audit feed ---------- */
  var logEl = document.getElementById("log");
  var sumEl = document.getElementById("sum");
  var runBtn = document.getElementById("run");
  var sim = { mode: "preventive", attack: "ban" };
  var timer = null;

  function plan(attack, mode) {
    var L = [], t = 0;
    function add(dt, tag, cls, text, dim) { t += dt; L.push({ t: t, tag: tag, cls: cls, text: text, dim: !!dim }); }
    var summary = "";

    if (attack === "trusted") {
      ["spamlord#0001", "ghost#2210"].forEach(function (m, i) {
        add(i ? 0.8 : 0, "AUDIT", "audit", "member_ban: head-admin → " + m);
        add(0.02, "GUARD", "skip", "head-admin is whitelisted. Ignored.", true);
      });
      summary = "<strong>No action taken.</strong> Whitelisted users are never punished and nothing is reverted.";
      return { lines: L, summary: summary };
    }

    var targets, module_, action, undo, limit, instant;
    if (attack === "ban") {
      targets = ["vexil#4410", "juno#0392", "pike#7781", "orla#1203", "tam#5550"];
      module_ = "antiban"; action = "member_ban"; undo = function (m) { return "unban " + m; };
      instant = false;
    } else {
      targets = ["#general", "#announcements", "#staff", "#rules"];
      module_ = "antichanneldelete"; action = "channel_delete"; undo = function (m) { return "clone " + m; };
      instant = true;
    }
    limit = (instant || mode === "preventive") ? 1 : 3;
    var hits = 0, punished = false, reverted = 0, banAt = 0;

    if (instant && mode === "reactive") {
      add(0, "GUARD", "guard", "antichanneldelete is an instant guard, so reactive mode still punishes on the first action.", true);
    }
    targets.forEach(function (m, i) {
      add(i ? 0.35 : 0.05, "AUDIT", "audit", action + ": rogue-admin → " + m);
      if (punished) {
        add(0.02, "GUARD", "guard", "rogue-admin was just punished. Reverting only.", true);
        add(0.01, "REVERT", "revert", undo(m)); reverted++;
        return;
      }
      hits++;
      add(0.02, "GUARD", "guard", module_ + " hit " + hits + "/" + limit, true);
      if (hits >= limit) {
        punished = true; banAt = i + 1;
        add(0.01, "BAN", "ban", "rogue-admin banned (anti-nuke: " + module_ + ")");
      }
      add(0.0, "REVERT", "revert", undo(m)); reverted++;
    });
    summary = "<strong>rogue-admin banned on action " + banAt + " of " + targets.length + ".</strong> " +
      reverted + " of " + targets.length + " changes reverted.";
    return { lines: L, summary: summary };
  }

  function lineEl(l, isNew) {
    return h("li", { class: isNew ? "new" : "" },
      h("span", { class: "t" }, "+" + l.t.toFixed(2)),
      h("span", { class: "tag " + l.cls }, l.tag),
      h("span", { class: "msg" + (l.dim ? " dim" : "") }, l.text));
  }

  function renderFull() {
    clearTimeout(timer);
    var p = plan(sim.attack, sim.mode);
    logEl.textContent = "";
    p.lines.forEach(function (l) { logEl.appendChild(lineEl(l, false)); });
    sumEl.innerHTML = p.summary;
    runBtn.disabled = false;
  }

  function renderAnimated() {
    clearTimeout(timer);
    var p = plan(sim.attack, sim.mode);
    if (reduceMotion) return renderFull();
    logEl.textContent = ""; sumEl.textContent = "Watching the audit log…";
    runBtn.disabled = true;
    var i = 0;
    (function next() {
      if (i >= p.lines.length) { sumEl.innerHTML = p.summary; runBtn.disabled = false; return; }
      logEl.appendChild(lineEl(p.lines[i], true)); i++;
      timer = setTimeout(next, 260);
    
    })();
  }

  function bindSeg(id, key, attr) {
    var box = document.getElementById(id);
    box.addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      sim[key] = b.getAttribute(attr);
      box.querySelectorAll("button").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
      renderAnimated();
    });
  }
  bindSeg("seg-mode", "mode", "data-mode");
  bindSeg("seg-attack", "attack", "data-attack");
  runBtn.addEventListener("click", renderAnimated);
  renderFull();

  }

  /* ---------- intro: plays on every load/refresh and cannot be skipped; the page is locked until it ends ---------- */
  var intro = document.getElementById("intro");
  var root = document.documentElement;
  var lockEls = [document.querySelector(".site-header"), document.getElementById("views")];
  function setLocked(on) {
    lockEls.forEach(function (el) {
      if (!el) return;
      if (on) el.setAttribute("inert", ""); else el.removeAttribute("inert");
    });
  }
  function introDone() {
    setLocked(false);
    root.classList.add("ready");
    if (intro && intro.parentNode) intro.parentNode.removeChild(intro);
  }
  if (!intro || root.classList.contains("seen") || reduceMotion) {
    introDone();
  } else {
    setLocked(true);
    intro.addEventListener("animationend", function (e) { if (e.animationName === "introOut") introDone(); });
    setTimeout(introDone, 5000);  /* safety net only: the animation itself ends at about 4s */
  }

  /* ---------- mobile menu ---------- */
  var hdr = document.querySelector(".site-header");
  var menuBtn = document.getElementById("menu-btn");
  if (hdr && menuBtn) {
    menuBtn.addEventListener("click", function () {
      var open = hdr.classList.toggle("nav-open");
      menuBtn.setAttribute("aria-expanded", String(open));
    });
  }

  /* ---------- views: one page at a time inside index.html, switched by the #address ---------- */
  var VIEWS = ["home", "antinuke", "features", "commands", "setup", "status"];
  var navLinks = [].slice.call(document.querySelectorAll(".nav a.nl"));
  function route() {
    var id = (location.hash || "").replace("#", "");
    if (VIEWS.indexOf(id) === -1) id = "home";
    VIEWS.forEach(function (v) {
      var el = document.getElementById("v-" + v);
      if (el) el.hidden = v !== id;
    });
    navLinks.forEach(function (a) {
      var on = a.getAttribute("href") === "#" + id;
      a.classList.toggle("on", on);
      if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    var cur = document.getElementById("v-" + id);
    if (cur && cur.getAttribute("data-title")) document.title = cur.getAttribute("data-title");
    if (hdr) { hdr.classList.remove("nav-open"); if (menuBtn) menuBtn.setAttribute("aria-expanded", "false"); }
    window.scrollTo(0, 0);
  }
  /* every fresh load or refresh starts on Home: drop any #page from the address first */
  if (location.hash) {
    try { history.replaceState(null, "", location.pathname + location.search); } catch (e) { location.hash = ""; }
  }
  window.addEventListener("hashchange", route);
  route();


  if (document.getElementById("cats")) {
  /* ---------- command browser ---------- */
  var state = { cat: CATS.length ? CATS[0].name : "", q: "", prefix: "," };
  var catsEl = document.getElementById("cats");
  var listEl = document.getElementById("list");
  var countEl = document.getElementById("count");
  var qEl = document.getElementById("q");
  var prefixEl = document.getElementById("prefix");

  function total() { return CATS.reduce(function (n, c) { return n + c.cmds.length; }, 0); }

  function renderCats() {
    catsEl.textContent = "";
    var items = [{ name: "All", n: total() }].concat(CATS.map(function (c) { return { name: c.name, n: c.cmds.length }; }));
    items.forEach(function (it) {
      var b = h("button", { type: "button", "aria-pressed": String(it.name === state.cat), "data-cat": it.name },
        h("span", null, it.name), h("span", { class: "n" }, String(it.n)));
      catsEl.appendChild(b);
    });
  }

  function hay(c) { return (c.n + " " + c.a.join(" ") + " " + c.d + " " + c.u + " " + c.s.join(" ")).toLowerCase(); }

  function renderList() {
    var q = state.q.trim().toLowerCase();
    var rows = [];
    CATS.forEach(function (cat) {
      if (!q && state.cat !== "All" && cat.name !== state.cat) return;
      cat.cmds.forEach(function (c) { if (!q || hay(c).indexOf(q) !== -1) rows.push({ cat: cat.name, c: c }); });
    });
    listEl.textContent = "";
    var scope = q ? "all categories" : state.cat;
    countEl.textContent = rows.length + (rows.length === 1 ? " command" : " commands") + " · " + scope;
    if (!rows.length) { listEl.appendChild(h("p", { class: "empty" }, "Nothing matches “" + state.q + "”. Try a shorter word.")); return; }
    var showCat = q || state.cat === "All";
    rows.forEach(function (r) {
      var c = r.c;
      var name = h("div", { class: "cmd-name" }, h("b", null, state.prefix + c.n));
      c.a.forEach(function (a) { name.appendChild(h("span", { class: "alias" }, state.prefix + a)); });
      if (showCat) name.appendChild(h("span", { class: "cat-tag" }, r.cat));
      var main = h("div", { class: "cmd-main" }, name, h("p", { class: "cmd-desc" }, c.d),
        h("code", { class: "cmd-use" }, state.prefix + c.u));
      if (c.s.length) main.appendChild(h("p", { class: "cmd-subs" }, "subcommands: " + c.s.join(" · ")));
      var copy = h("button", { type: "button", class: "copy", "data-copy": c.u, "aria-label": "Copy usage of " + c.n }, "Copy");
      listEl.appendChild(h("article", { class: "cmd" }, main, copy));
    });
  }

  catsEl.addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (!b) return;
    state.cat = b.getAttribute("data-cat"); state.q = ""; qEl.value = "";
    renderCats(); renderList();
  });
  qEl.addEventListener("input", function () { state.q = qEl.value; renderList(); });
  prefixEl.addEventListener("input", function () { state.prefix = prefixEl.value || ","; renderList(); });

  listEl.addEventListener("click", function (e) {
    var b = e.target.closest(".copy"); if (!b) return;
    var text = state.prefix + b.getAttribute("data-copy");
    function ok() { b.textContent = "Copied"; b.classList.add("done"); setTimeout(function () { b.textContent = "Copy"; b.classList.remove("done"); }, 1200); }
    function fallback() {
      var code = b.closest(".cmd").querySelector(".cmd-use");
      var r = document.createRange(); r.selectNodeContents(code);
      var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
    }
    try { navigator.clipboard.writeText(text).then(ok, fallback); } catch (err) { fallback(); }
  });

  renderCats(); renderList();
  }

  /* ---------- bot status ----------
     Point STATUS_API at the /status endpoint your bot exposes (see status_endpoint.py).
     It must return JSON like:
       { "servers": 812, "users": 195022, "ping": 264, "uptime": 45080,
         "services": { "gateway": "operational", "commands": "operational",
                       "antinuke": "operational", "database": "operational" } }
     Each service is "operational", "degraded" or "down". uptime is in seconds.
     Add ?demo to the status page URL to preview the layout with sample numbers. */
  var STATUS_API = "https://gist.githubusercontent.com/0x63X/9da60bc0fd468e08f49343bd467ec3cd/raw/status.json";
  var POLL_MS = 60000;
  var STALE_SEC = 420;  /* the bot pushes about every 2 minutes; older than this means it is offline */

  var SVC = ["gateway", "commands", "antinuke", "database"];
  var LABEL = { ok: "Operational", warn: "Degraded", bad: "Down", unk: "Unknown" };
  var navLink = document.querySelector(".nav a[data-status]");
  var svcList = document.getElementById("svcs");
  var demo = /[?&]demo(=|&|$)/.test(location.search);
  var lastCheck = null;

  function norm(v) {
    v = String(v || "").toLowerCase();
    if (v === "operational" || v === "ok" || v === "up") return "ok";
    if (v === "degraded" || v === "warn" || v === "partial") return "warn";
    if (v === "down" || v === "bad" || v === "offline") return "bad";
    return "unk";
  }
  function fmtNum(n) { return typeof n === "number" && isFinite(n) ? n.toLocaleString("en-US") : "—"; }
  function fmtUp(sec) {
    if (typeof sec !== "number" || !isFinite(sec) || sec < 0) return "—";
    var d = Math.floor(sec / 86400), hr = Math.floor(sec % 86400 / 3600), m = Math.floor(sec % 3600 / 60);
    return d ? d + "d " + hr + "h" : hr ? hr + "h " + m + "m" : m + "m";
  }

  /* turn whatever we know into one view model */
  function model(kind, data) {
    var svc = { gateway: "unk", commands: "unk", antinuke: "unk", database: "unk", website: "ok" };
    var m = { state: "unk", text: "Status unavailable", note: "", svc: svc, servers: null, users: null, ping: null, uptime: null };
    if (kind === "none") {
      m.note = "Live bot data isn't connected yet.";
      return m;
    }
    if (kind === "fail") {
      m.state = "bad"; m.text = "Can't reach the bot";
      m.note = "The status check failed. The bot may be offline.";
      return m;
    }
    var s = (data && data.services) || {};
    SVC.forEach(function (k) { svc[k] = norm(s[k]); });
    m.servers = data.servers; m.users = data.users; m.ping = data.ping; m.uptime = data.uptime;
    var vals = SVC.map(function (k) { return svc[k]; });
    var bad = vals.filter(function (v) { return v === "bad"; }).length;
    var warn = vals.filter(function (v) { return v === "warn"; }).length;
    var unk = vals.filter(function (v) { return v === "unk"; }).length;
    if (bad === vals.length) { m.state = "bad"; m.text = "Major Outage"; }
    else if (bad) { m.state = "bad"; m.text = "Partial Outage"; }
    else if (warn || unk) { m.state = "warn"; m.text = "Degraded Performance"; }
    else { m.state = "ok"; m.text = "All Systems Operational"; }
    if (kind === "demo") m.note = "Sample data for previewing the page. This is not the live bot.";
    return m;
  }

  function paint(m) {
    if (navLink) navLink.setAttribute("data-state", m.state);
    if (!svcList) return;
    var sys = document.getElementById("sys");
    sys.setAttribute("data-state", m.state);
    document.getElementById("sys-text").textContent = m.text;
    var note = document.getElementById("sys-note");
    note.textContent = m.note; note.hidden = !m.note;
    document.getElementById("st-servers").textContent = fmtNum(m.servers);
    document.getElementById("st-users").textContent = fmtNum(m.users);
    document.getElementById("st-ping").textContent = typeof m.ping === "number" ? Math.round(m.ping) + "ms" : "—";
    document.getElementById("st-uptime").textContent = fmtUp(m.uptime);
    svcList.querySelectorAll("[data-svc]").forEach(function (row) {
      var st = m.svc[row.getAttribute("data-svc")] || "unk";
      row.setAttribute("data-state", st);
      row.querySelector(".pill span").textContent = LABEL[st];
    });
  }

  function ago() {
    var el = document.getElementById("ago");
    if (!el) return;
    if (lastCheck == null) { el.textContent = "…"; return; }
    var s = Math.max(0, Math.round((Date.now() - lastCheck) / 1000));
    el.textContent = (s < 60 ? s + "s" : Math.floor(s / 60) + "m") + " ago";
  }

  function check() {
    if (demo) {
      lastCheck = Date.now();
      paint(model("demo", { servers: 812, users: 195022, ping: 240 + Math.round(Math.random() * 40), uptime: 45080,
        services: { gateway: "operational", commands: "operational", antinuke: "operational", database: "operational" } }));
      return;
    }
    if (!STATUS_API) {
      lastCheck = Date.now();
      console.warn("NxllSec: set STATUS_API in script.js to show live bot status.");
      paint(model("none"));
      return;
    }
    var ctl = window.AbortController ? new AbortController() : null;
    var to = setTimeout(function () { if (ctl) ctl.abort(); }, 6000);
    fetch(STATUS_API + "?t=" + Date.now(), { cache: "no-store", signal: ctl ? ctl.signal : undefined })
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function (d) {
        clearTimeout(to); lastCheck = Date.now();
        var age = d && d.updated ? Date.now() / 1000 - d.updated : Infinity;
        paint(model(age > STALE_SEC ? "fail" : "live", d));
      })
      .catch(function () { clearTimeout(to); lastCheck = Date.now(); paint(model("fail")); });
  }

  if (navLink || svcList) {
    check();
    if (svcList) { setInterval(check, POLL_MS); setInterval(ago, 1000); ago(); }
  }
})();
