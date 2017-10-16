var _w=window;// Shorthand notation for window reference
var _jsmd_default={
    version: "money.277.1-0-0.20170627",
    release: "0",
    dictionary: {
        init: {
            /* ADBP Standards */
            			"business.name":					"mny",					//prop30,eVar30
			"business.lob":						"news",					//hier1
			"business.brand":					"cnn",					//hier1
			"page.clean_url":					"raw:gADBPURL|",		//prop26
			"page.content_type":				"raw:gADBPContentType|adbp:none",	//prop33,eVar33
			"page.domain":						"raw:gADBPURL|domain",	//server,eVar29
			//"page.franchise":					"",						//prop31,eVar31 - not using
			//"page.friendly_name":				"",						//prop3,eVar3
			//"page.name":						"",						//pageName,eVar26
			"page.section[0]":					"gADBPURL|path,1",		//channel,eVar27 - remove all yyyy/mm/dd format from url; for gallery, remove /galleries/yyyy/
			"page.section[1]":					"gADBPURL|path,2",		//prop28,eVar28 - for gallery, no section[1]
			"page.site_section[0]":				"raw:gADBPURL|path,1",	//prop41,eVar44 - first directory
			"page.site_section[1]":				"raw:gADBPURL|path,2",	//prop42,eVar45 - second directory
			"page.transaction_id":				(_w.cnnad_transactionID?_w.cnnad_transactionID+"":""),	//prop46,eVar46 - Transaction ID
			"page.gu_id":						"raw:gCNNgetCookie|ug",		//prop47,eVar47 - GU ID
			//"page.template_type":				"",						//prop32,eVar32
			"promo.internal.id":				"gCNNgetPageAttribution|iid",	//eVar43
			"promo.external.id":				"gQuery|xid,sr",			//campaign
			"search.internal.keyword":			"gQuery|query",			//prop39,eVar39
			"search.internal.number_results":	null,					//prop27
			//"time.hour":						"raw:gADBPTimePart|h",	//prop40,eVar40
			//"time.dow":						"gADBPTimePart|d",		//prop40,eVar40
			//"time.weekpart":					"gADBPTimePart|w",		//prop40,eVar40
			"user.authenticated":				"raw:gCNNAuth|",		//prop34,eVar34
			//"user.segment.age":				"",						//prop36,eVar36
			//"user.segment.zip":				"",						//prop36,eVar36
			//"user.segment.gender":			"",						//prop36,eVar36
			"video.id":							"",						//eVar42
			"video.title":						"",						//prop29,eVar41
			"video.players":					[],						//video callback array object
			"video.csplayers":					[],						//comscore video player array object
			nielsen: {
				"video-census": {
					clientid: "us-100120",
					vcid: "c02",
					prod: "vc",
					sfcode: "us"
				}
			}

            ,
            /* ADBP Recommended Standards */
            			"business.friendly_name":			"cnnmoney",				//hier1
			"page.article.publish_date":		_w.cnnPublishDate,		//prop6,eVar6
			"page.article.author":				_w.cnnAuthor,			//prop7,eVar7
			"page.full_url":					_w.location.href		//prop15,eVar15


            ,
            /* Business-Specific Standards */
            			
			//"business.mny.gallery_name":		"",							//prop4,eVar4
			"business.mny.section":				"raw:gCNNSection|",
			//"business.mny.section[0]":		"",							//prop1,eVar1
			//"business.mny.section[1]":		"",							//prop2,eVar2
			"business.mny.source":				"raw:gCNNSource|CNNMONEY",	//prop5,eVar5 - default to "CNNMONEY"
			"business.mny.special_features":	"raw:gMONBrandingValue|",	//prop8,eVar8
			"business.mny.video.player":		"",							//prop16,eVar16
			"business.mny.video.series":		"",							//prop11,eVar11
			"business.mny.template_type":		(typeof(getPageType)=="function"?getPageType():"unknown"),
			"business.mny.video.content_length":		"",							//eVar20
			"business.mny.vendor_widget":				_w.vendor_widget,			//prop25,eVar25
			"business.mny.page.platform":				"gCNNPlatform|", 			//eVar37
			"business.mny.video.publish_date":			"",							//eVar51
			"business.mny.page.navigator":				navigator.userAgent,		//eVar55
			"business.mny.page.orientation":			"gMONOrientation|", 		//eVar56
			"business.mny.video_opportunity":			(_w.cnnOmniture_videoopps?_w.cnnOmniture_videoopps+"":"zero"),	//eVar52
			"business.mny.video.video_collection":		"",							//prop60,eVar60
			"business.mny.page.magazineIssueDate":		_w.cnnMagIssueDate,			//prop61,eVar61
			"business.mny.page.magazineTemplateType":	_w.cnnMagTemplateType,		//prop62,eVar62
			"business.mny.page.optimizely": 			"", //prop63,eVar63
			"business.mny.subscription_zip":			(_w.cnnOmniture_subzip?_w.cnnOmniture_subzip+"":""),		//prop68,eVar68 - only on fortune paywall "thank you" page
			"business.mny.page.see_all":				      "",		        //prop69,eVar69
			"business.mny.page.clickType":					  "", //prop69,evar69
			"business.money.video_type":                    "", //prop70,eVar70
			"business.mny.edition":						"raw:gCNNgetCookie|SelectedEdition",	//prop23,eVar23 - domestic or international
			"business.mny.referrals_page":				"", //prop67,eVar67
			"business.mny.clicktale": 					"gMNYClickTaleID|" //prop17,eVar17

            ,
            /* Pre-Metadata Collection Routines */
            preinit: function() {
                				var hn=_w.location.hostname.replace("turner.com","cnn.com");
				var patterns={ // Money-specific template type match patterns - Maintained by CNN Money DMT / Technical Team
						err:[1,(/^error page - /i),(/404 page not found/i)], // Uses document.title
						"o:search results":[1,(/^search results for/i),(/^Search results - CNNMoney.com/i)], // Uses document.title
						b:[2,(/\.blogs(\..+)?\.cnn\.com$/),(/tech\.fortune\.cnn\.com$/),(/management\.fortune\.cnn\.com$/),(/finance\.fortune\.cnn\.com$/),(/cnnmoneytech\.tumblr\.com$/),(/economy\.money\.cnn\.com$/),(/buzz\.money\.cnn\.com$/)], // Yuno?
						c:[0,(/cnn\.com\/magazines\/\D+\/\w+\/\d{4}\/\d{2}\/\d{2}\/\d+\//),
						(/\/news\/newsfeeds/),(/\/lesson/),
						(/\/news\/newsfeeds\/articles(.+).htm$/),
						(/\w+\.cnn.com\/\d{4}\/\d{2}\/\d{2}\//),
						(/cnn\.com\/retirement\/[^\/]+\/[^\/]+\/index\d*.htm/i),
						(/cnn\.com\/101\/[^\/]+\/[^\/]+\/index.htm/i)],		// 101 evergreen series - ex:/101/college-101/real-cost-college.moneymag/index.htm
						v:[0,(/cnn.com\/video\/[\w+\/]+\d{4}\/\d{2}\/\d{2}/)], // Good
						s:[0,(/cnn.com\/profile\//)], // Good
						"o:gallery":[0,(/\/gallery\/[\w-\/]+\/\d{4}\/\d{2}\/\d{2}/),(/\/galleries\/\d{4}\//),(/\/popups\/\d{4}/)],
						"o:mkdata":[0,(/\/data\//),(/\/quote\//),(/\/.element\/ssi\/data\//),(/portfolio\.money\.cnn\.com/)],
						"o:quiz":[0,(/\/quiz/),(/\/cgiquiz/)],
						"o:tools":[0,(/\/tools\//)],
						"o:calculator":[0,(/\/calculator\//)],
						"o:infographic":[0,(/\/infographic\//)],
						"o:interactive":[0,(/\/interactive\//)],
						"o:services":[0,(/\/services\//)],
						"o:poll":[0,(/\/pollserver\//i),(/\/poll\//i)],
						"o:other":[0,(/\/storysupplement\//i),(/\/interactive\//i),(/\/infographic\//i)],
						"o:other":[0,(/\/news\/corrections\//i)],
						"o:undefined":[0,(/jobsearch\.money/)],
						"o:list":[0,(/cnn\.com\/magazines\/\D+\/[\w-]+\/\d{4}\/\D\w+\//),(/cnn\.com\/magazines\/.+_list/),(/cnn\.com\/\w+\/.+_list/),(/\/snapshots\//)],
						"in":[0,(/money\.cnn\.com[\/]*(index.htm[l]?)?$/)],
						sf:[0,(/\.cnn\.com\/(\D+[\/]?)+(index.htm[l]?)?/),
						(/\.cnn\.com\/101\/([\w-]+[\/])+(index.htm[l]?)?/),
						(/fortune.cnn.com\/?/)] // Good - may be a bit permissive
					},
				match=[hn+_w.location.pathname,
					document.title,
					_w.location.hostname
					];

				var docTitle = document.title,delimiter = ":",tmpPageFriendlyName="";
				//http://jcmsprod.cnn.com:86/galleries/2009/real_estate/0910/gallery.Detroit_lessons/
				//missing title on this page (- Michael Rubinger  (1) - CNNMoney.com), add space in front.
				if (docTitle.match(/^-\s\w+/)) docTitle = " " + docTitle;
				//page.friendly_name : prop3,eVar3
				tmpPageFriendlyName=this.plugin.tTrim(docTitle,[
					(/\s\-\s[^\-]*CNNMoney.com$/),
					(/\s\-\s[^\-]*CNNMoney$/),
					(/\s\-\sFORTUNE[^\-]*$/)]);
				var path1 = this.plugin.gADBPURL("path",1);
				if (path1 == "quizzes") {
					var parseLoc1 = docTitle.lastIndexOf("?");
					if (parseLoc1 >= 0) {tmpPageFriendlyName=docTitle.substring(0,parseLoc1);}
				}

				//business.mny.gallery_name : prop4,eVar4
				//Made in USA - For now - Mrs. Grossman's (2) - Small Business
				var parseLoc2,galleryNumber,galleryName,reg1=/\s*\(\s*(\d+)\s*\)\s*/;
				var gName_regex = /^(.+ - )*(.+)( - | - More - )(CNNMoney|Fortune|Money Magazine)$/i; 
				var gName_array;
				if ((path1 == "galleries")||(path1 == "gallery")) {
					docTitle_array = docTitle.split(" - ");
					if (docTitle_array[1] && docTitle_array[1].match(/\s*\(\s*(\d+)\s*\)\s*/)) {
						parseLoc2 = docTitle_array[1].lastIndexOf("(");
						galleryNumber = docTitle_array[1].substring(parseLoc2);
						galleryName = docTitle_array[0] + delimiter + docTitle_array[1].replace(galleryNumber,"");
						galleryNumber = reg1.exec(galleryNumber);
						if (galleryNumber) this.set("business.mny.gallery_name",this.plugin.tTrim(galleryName) + delimiter + galleryNumber[1]);
						tmpPageFriendlyName=docTitle_array[0];
					} else if (docTitle_array[2] && docTitle_array[2].match(/\s*\(\s*(\d+)\s*\)\s*/)) { //if title contains dash
						parseLoc2 = docTitle_array[2].lastIndexOf("(");
						galleryNumber = docTitle_array[2].substring(parseLoc2);
						galleryName = docTitle_array[0] + " " + docTitle_array[1] + " " + docTitle_array[2].replace(galleryNumber,"");
						galleryNumber = reg1.exec(galleryNumber);
						if (galleryNumber) this.set("business.mny.gallery_name",this.plugin.tTrim(galleryName) + delimiter + galleryNumber[1]);
						tmpPageFriendlyName=docTitle_array[0] + " " + docTitle_array[1];
					} else if (docTitle_array.length > 0) { //redesigned gallery title: [slide name] - [gallery name] - CNNMoney
						galleryNumber = _w.cnnOmniture_slidenum ? _w.cnnOmniture_slidenum : "";
						gName_array = gName_regex.exec(docTitle);
						if (gName_array) {
							galleryName = gName_array[2];
						}
						else {
							galleryName = this.plugin.tTrim(docTitle_array[1]);
						}
						this.set("business.mny.gallery_name",galleryName + delimiter + " " + this.plugin.tTrim(docTitle_array[0]) + delimiter + " " + galleryNumber);
						tmpPageFriendlyName = galleryName;
					}
				}
				this.set("raw:page.friendly_name",this.plugin.tTrim(tmpPageFriendlyName,[[(/\W+/g),' ']]));

				//page.template_type : prop32,eVar32
				var adbpTemplateObj=(this.mdata.adbpTemplateObj=this.plugin.gADBPTemplateType('unknown',patterns,match));
				this.set("page.template_type",adbpTemplateObj["full"]);
				// Need to set prop32 ,eVar32 for extra large Gallery, _w.cnnOmniture_template is populated for extra large gallery o:gallery
				
				if(_w.cnnOmniture_template && ((path1 == "galleries")||(path1 == "gallery"))){
				this.set("page.template_type","other:"+_w.cnnOmniture_template);
				}

            },
            /* Post-Metadata Translation Routines */
            postinit: function() {
                				var delimiter = ":",adbpTemplateObj=this.mdata.adbpTemplateObj,pathname = this.plugin.gADBPURL("path"),path_array=this.get("mb:section"),adbp_path=this.get("page.section"),hostname=this.get("page.domain");
				var s1=adbp_path[0],s2=adbp_path[1],b1=path_array[0],b2=path_array[1];
				b1=(!b1?"":b1.toLowerCase()); b2=(!b2?"":b2.toLowerCase());

				
				if (path_array[0] == 'home'||path_array[0] == 'Home'){
					this.set("page.section[0]","home");
				}
				
				try{
					var sf = _w.location.href;
					if(sf.indexOf("mostly-human") != -1){ 
						this.set("page.section[0]","technology");
					}
				}catch (err){}
				
				try{
					var u = _w.location.href;
					if((u.indexOf("utm_source") != -1) || (u.indexOf("utm_campaign") != -1) || (u.indexOf("utm_medium") != -1) || (u.indexOf("utm_term") != -1) || (u.indexOf("utm_content") != -1)){
						 //"utm_source","utm_campaign","utm_medium","utm_medium"
						 var cam = this.plugin.gCNNCampaignParameter();
						 this.set("m:promo.external.id",cam);
					}
				} catch (err){}

				
				if (pathname.indexOf("/a/all-jobs/list/") >= 0) {
					var jobsearch_term = "jobs:" + pathname.replace("/a/all-jobs/list/","");
					var hostname = this.plugin.gADBPURL("domain");
					pathname = hostname + "/a/all-jobs/list";
					//page.clean_url : prop26
					this.set("page.clean_url",pathname);
					//search.internal.keyword : prop39,eVar39
					this.set("search.internal.keyword",jobsearch_term);
					//page.friendly_name : prop3,eVar3
					this.set("page.friendly_name","Job Search Results");
				}

				var pf_url = this.get("page.full_url");
				if(pf_url.match(/([^\/]+)(?=\.\w+$)/) == null && pf_url[pf_url.length-1] != "/"){
					pf_url += "/";
					this.set("page.full_url",pf_url); //prop15,eVar15
				}
				
				var pc_url = this.get("page.clean_url");
				if(pc_url.match(/([^\/]+)(?=\.\w+$)/) == null && pc_url[pc_url.length-1] != "/"){
					pc_url += "/";
					this.set("page.clean_url",pc_url); //prop26,eVar26
				}
				
				adbpPathname = this.plugin.gADBPURL("path");
				if(adbpPathname[adbpPathname.length -1] !== "/"){
					adbpPathname += "/";
				}
				
				this.set("page.name",this.plugin.gADBPPageName(adbpPathname.toLowerCase(), delimiter));
				if ((hostname.indexOf("jobsearch\.money\.cnn\.com") >= 0) || (hostname.indexOf("realestate\.money\.cnn\.com") >= 0))
				{
					this.set("page.name",this.plugin.gADBPPageName('search-result'));
				}					

				
				this.plugin.gCNNOverides.call(this);

				
				if (s1 == parseFloat(s1)) {
					this.set("page.section",[b1,b2]);
				} 
				if (isNaN(s1)) {
					this.set("page.section[1]",this.plugin.gMONSection(s1,s2));
				} else {
					this.set("page.section[1]",this.plugin.gMONSection(b1,b2));
				}
				if (pathname.match(/^\/(\w+\/){1}\w+\.htm[l]/)) {
					
					var reg3 = /\/(\w+)\//;
					var pathname2 = reg3.exec(pathname);
					this.set("page.section",[pathname2[1],""]);
				} 
				
				var fullURL = this.get("page.full_url");
				fullURL = fullURL.toLowerCase();
				this.set("page.full_url",fullURL);

				
				if (_w.location.pathname.match(/^\/quote\/quote\.htm[l]/)) {
					var tickerSearchPattern =  _w.location.href.split("?");
					try {
						for(var i = 0; i <= tickerSearchPattern.length -1; i++ ) {
							if (tickerSearchPattern[i] && tickerSearchPattern[i].indexOf("symb") > -1) {						
								var tPattern = tickerSearchPattern[i].split("=");
								if(tPattern[1] && tPattern[1] != null) {
									this.set("search.internal.keyword",tPattern[1]);
								}
								this.push("page.events","search.results");
							}
						}
					} catch(err){ }
				}

				
				var pageFriendlyName = "", hrefVal = _w.location.href; 
				var pattern1 = {
					"Stock Quote Result":			[(/\/quote\/quote\.html/)],
					"Stock Quote Company Profile":	[(/\/quote\/profile\/profile\.html/)],
					"Stock Quote News":				[(/\/quote\/news\/news\.html/)],
					"Stock Quote Charts":			[(/\/quote\/chart\/chart\.html/)],
					"Stock Quote Forecast":			[(/\/quote\/forecast\/forecast\.html/)],
					"Stock Quote Financials":		[(/\/quote\/financials\/financials\.html/)],
					"Stock Quote Shareholders":		[(/\/quote\/shareholders\/shareholders\.html/)],
					"Stock Quote Competitors":		[(/\/quote\/competitors\/competitors\.html/)],
					"ETF Quote Result":				[(/\/quote\/etf\/etf\.html/)],
					"ETF Quote News":				[(/\/quote\/etf\/news\/news\.html/)],
					"ETF Quote Charts":				[(/\/quote\/etf\/chart\/chart\.html/)],
					"ETF Quote Competitors":		[(/\/quote\/etf\/competitors\/competitors\.html/)],
					"Mutual Funds Quote Result":	[(/\/quote\/mutualfund\/mutualfund\.html/)],
					"Search Results":				[(/\/search\/index\.html/)],
					"Glassdoor Results":	        [(/jobsearch\.money\.cnn\.com/)],
					"Trulia Search Results":		[(/realestate\.money\.cnn\.com/)],
					"BankRate Results":				[(/www\.bankrate\.com/)],
					"Portfolio Overview":			[(/portfolio#\/overview/),(/com\/portfolio$/)],
					"Portfolio Charts":				[(/portfolio#\/charts/)],
					"Portfolio Holdings":			[(/portfolio#\/holdings/)],
					"Portfolio Advice":				[(/portfolio#\/advice/)],
					"Portfolio Add Account":		[(/account\/settings\/portfolios\/add/)],
					"Portfolio Security":			[(/cnn\.com\/security/)],
					"Portfolio Terms":				[(/cnn\.com\/terms/)],
					"Portfolio Landing Page":		[(/portfolio\.money\.cnn\.com\/$/)],
					"Business News and Financial News": [(/\/news\/companies\/5-stunning-stats/)]
				};
				pageFriendlyName = this.plugin.gCNNMatchVal(pattern1, hrefVal);
				if (!pageFriendlyName) { pageFriendlyName = this.get("page.friendly_name"); }
				this.set("raw:page.friendly_name",pageFriendlyName);
				var href  = _w.location.href;
				if (href.indexOf('/portfolio#') > -1) {
					var split_array = href.split("#/");
					this.set("page.site_section[1]", split_array[1]); //Portfolio subsection
				}
				
				if (_w.location.href.match(/portfolio\.money\.cnn\.com\/$/)) {
					this.set("page.section[0]", "portfolio"); //Portfolio channel for landing page
				}
				//Removing prop4/eVar4 on page next to last slide
				var tt = this.get("page.template_type");
				if(_w.location.pathname.indexOf("jump.htm") != -1 && tt.indexOf("gallery") != -1){
					this.set("page.template_type","adbp:content");
					this.set("page.content_type","adbp:none");
					this.set("business.mny.gallery_name",""); 
				}
				//This will be handled by gallerySlideClick dynamic action
				
				if(tt == "adbp:blog"){
					this.set("m:page.article.author", "");
					this.set("m:page.article.publish_date", "");
				}
				
				
				var refPageName = document.referrer; // fetch previous page url
				var page_name = this.get("page.name");
				if(refPageName!= null && refPageName.indexOf("www.cnn.com") > -1 && page_name != null) {
					this.set("business.mny.referrals_page","www.cnn.com"+"|"+page_name);
				}
				
				
				if(typeof _w.cnnOmniture_videoopps == 'undefined'){
					this.set("business.mny.video_opportunity","");
				} else if(_w.cnnOmniture_videoopps == 0){
					this.set("business.mny.video_opportunity","zero"); 
				}

            }
        }
    },
    map: {
        		"cnnmoney_main": {
			vendors: [
				{
					name:			"Adobe SiteCatalyst H-code",
					account:		"main",
					settings:		["main"],
					variablemap:	["main"],
					eventmap:		["main"],
					dynamic_actions: {
						"video": {
							variablemap:	["money-video"],
							eventmap:		["money-video"]
						}
					},
					prevendor:		function() { },
					postvendor:		function() { }
				},
				{ 
					name: 			"Nielsen Hybrid Light Code",
					account:		"standard_nielsen",
					dynamic_actions: {
						"see_all-click":{ ignore: true },
						"seeAll-click": { ignore: true },
						"video":		{ ignore: true },
						"social-click":	{ ignore: true }
					}
				}				
			],
			
			standard_nielsen: {
					account: function() {
						return ("us-204044h");
					}
				},
			main: {
				filters: {
					"see_all-click":		   { include: ["business.mny.page.see_all","see_all.click","m:promo.external.id"] },
					"social-click":			{ include: ["m:page.domain","mb:section[0]","mb:section[1]","m:page.friendly_name","mb:source","mb:special_features","m:page.full_url","mb:edition","m:business.mny.page.clickType","m:page.name","m:page.template_type","m:page.content_type","m:page.site_section[0]","m:page.site_section[1]","page.section[0]","m:page.section[1]","m:business.friendly_name","m:page.article.publish_date","m:page.article.author","m:promo.external.id","m:promo.internal.id"] }
				},
				account: function() {
					var acc = "aolturnercnnmoney-2010";					
					if(window.cnnOmniture_prodenv == false){acc = "aolturnercnnmoney-2010-dev";}					
					try { if (window.twitter_card && window.twitter_card == 1) { acc = "aolturnercnnmoneyoffsite"; } } catch(e) {}
					_w.rsid = acc;
					return acc;
				},
				settings: {
					"trackDownloadLinks":		true,
					"trackExternalLinks":		true,
					"trackInlineStats":			true,
					"linkDownloadFileTypes":	"exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls",
					"linkInternalFilters":		"javascript:,cnn.com,money.com,money.cnn.com,fortune.cnn.com,facebook.com,twitter.com,linkedin.com",
					"linkLeaveQueryString":		false,
					"trackingServer":			"metrics.cnn.com",
					"trackingServerSecure":		"smetrics.cnn.com",
					"visitorNamespace":			"cnn",
					"charSet":					"ISO8859-1",
					"currencyCode":				"USD"
				},
				variablemap: {
					
					"mb:section[0]":					["prop1","eVar1"],
					"mb:section[1]":					["prop2","eVar2"],
					"m:page.friendly_name":				["prop3","eVar3"],
					"mb:gallery_name":					["prop4","eVar4"],
					"mb:source":						["prop5","eVar5"],
					"m:page.article.publish_date":		["prop6","eVar6"],
					"m:page.article.author":			["prop7","eVar7"],
					"mb:special_features":				["prop8","eVar8"],
					"mb:video.series":					["prop11","eVar11"],
					"m:page.full_url":					["prop15","eVar15"],
					"mb:video.player":					["prop16","eVar16"],
					//VISTA								["prop17","eVar17"],	//Non-Search: Traffic Types
					// "mb:status":						["prop22","eVar22"],
					"mb:edition":						["prop23","eVar23"],		
					"business.mny.vendor_widget":		["prop25","eVar25"],
					
					"m:page.name":						["pageName","eVar26"],
					"m:page.section[0]":				["channel","eVar27"],
					"m:page.domain":					["server","eVar29"],
					"m:page.clean_url":					["prop26"],
					"m:search.internal.number_results":	["prop27"],
					"m:page.section[1]":				["prop28","eVar28"],
					"m:video.title":					["prop29","eVar41"],
					"m:business.friendly_name":			["prop30","eVar30"],
					"m:page.franchise":					["prop31","eVar31"],
					"m:page.template_type":				["prop32","eVar32"],
					"m:page.content_type":				["prop33","eVar33"],
					"m:user.segment":					["prop36","eVar36"],
					"business.mny.page.platform":		["eVar37"],
					"m:search.internal.keyword":		["prop39","eVar39"],
					"m:time":							["prop40","eVar40"],
					"m:page.site_section[0]":			["prop41","eVar44"],
					"m:page.site_section[1]":			["prop42","eVar45"],
					"m:video.id":						["eVar42"],
				    "m:promo.internal.id":				["prop43","eVar43"],
					"m:page.transaction_id":			["prop46","eVar46"],
					"m:page.gu_id":						["prop47","eVar47"],
					"m:promo.external.id":				["campaign"],			//Marketing/External Campaigns
					"business.mny.page.navigator":		["eVar55"],
					"business.mny.page.orientation":	["eVar56"],
					"m:business.mny.video.video_collection":	["prop60","eVar60"],
					"m:business.mny.page.magazineIssueDate":	["prop61","eVar61"],
					"m:business.mny.page.magazineTemplateType":	["prop62","eVar62"],
					"business.mny.page.optimizely": 			["prop63","eVar63"],
					"business.mny.subscription_zip":	["prop68","eVar68"],
					"business.mny.page.see_all":	["prop69","eVar69"],
					"m:business.mny.page.clickType":	["prop69","eVar69"],
                    "business.money.video_type":        ["prop70","eVar70"],
					"m:code.version":					["prop35"],
					"business.mny.referrals_page":		["prop67","eVar67"],
					"business.mny.clicktale": 			["prop17","eVar17"],
					//m:business.name|m:page.template_type|js:gADBPURL('domain',3)|js:gADBPURL('path')
					"m:business.lob|m:business.brand|m:business.friendly_name|m:page.domain|m:page.section[0]|m:page.section[1]":	["hier1"],
					//s.pageType (404:<page url>)
					delimiter: "|"
				},
				eventmap: {
					
					//"Customized MarketTracker":	["event2"],
					"slide.click":				["event5"],
					"m:page.name":				["event26"],
					"page.view":				["event26"],		//done automatically in vendor-specific bindings
					"search.results":			["event27"],		//done
					"registration.start":		["event28"],
					"m:promo.internal.id":		["event31"],		//content.featured
					"video.start":				["event32"],
					"video.complete":			["event33"],
					"video.autostart":			["event34"],
					"video.preroll":			["event35"],
					//"Time Spent on Video":		["event36"],
					"user.login":				["event37"],
					"article.read":				["event39"],		//done
					"see_all.click":			["event69"],
					"click.interaction": 		["event69"]
				},
				premap: function() { },
				postmap: function() {					
					
					if (this.config.map.isDynamic) {
						var da = this.config.map.isDynamic;
						if (da.indexOf("video-preroll") != -1) {
							this.v.eVar16 = this.v.prop16; this.v.prop16 = "";
							this.v.eVar41 = this.v.prop29; this.v.prop29 = "";
							this.v.eVar1 ="";this.v.eVar2 ="";this.v.eVar3 ="";this.v.eVar5 ="";
							this.v.eVar8 ="";this.v.eVar15 ="";this.v.eVar28 ="";
							this.v.eVar30 ="";this.v.eVar32 ="";this.v.eVar33 ="";this.v.eVar34 ="";
							this.v.eVar26 ="";this.v.eVar27 ="";
							this.v.prop44 =""; this.v.eVar44 ="";
							this.v.prop45 =""; this.v.eVar45 ="";
							this.v.eVar60 = this.v.prop60; this.v.prop60 = "";
							this.v.eVar67 = this.v.prop67;this.v.prop67 = "";
							this.v.eVar6 = this.v.eVar7 = "";

						} else if (da.indexOf("video-start") != -1) {
							this.v.eVar26 = "";		//pageName
							this.v.eVar3 =""; this.v.prop3 = "";
							this.v.eVar27 = this.v.channel; this.v.channel = "";
							this.v.eVar34 = "D=c34";
							this.v.prop48 =""; this.v.eVar48 ="";this.v.eVar6 = "";
							this.v.eVar14 ="";this.v.eVar19 ="";this.v.eVar22 ="";	 
							this.v.eVar44 ="";this.v.eVar45 ="";
							this.v.eVar7 = "";

						} else if (da.indexOf("video-fifty_percent") != -1) {
							if(this.v.channel == "" && this.v.eVar27 == "D=ch" ){
							this.v.eVar27 = this.get("page.section[0]");
							}
							this.v.eVar3 = this.v.eVar26 = "";
							this.v.eVar16 = this.v.prop16; this.v.prop16="";
							this.v.prop28 = this.v.eVar28 = "";
							this.v.eVar33 = this.v.prop33; this.v.prop33="";
							this.v.prop34 = this.v.eVar34 = "";
							this.v.eVar32 = this.v.prop32; this.v.prop32="";
							this.v.eVar15 = "";
							this.v.eVar30 = this.v.eVar41 = this.v.eVar63 = "";
							this.v.eVar67 = this.v.prop67;this.v.prop67 = "";
							this.v.eVar70 = "";

						} else if (da.indexOf("video-complete") != -1) {
							this.v.eVar3 = this.v.eVar26 = "";
							this.v.prop28 = this.v.eVar28 = "";
							this.v.prop34 = this.v.eVar34 = "";
							this.v.eVar67 = this.v.prop67;this.v.prop67 = "";
							this.v.eVar70 = "";
							
						} else if (da.indexOf("seeAll-click") != -1) {
							this.v.events = "event69";
						} else if (da.indexOf("social-click") != -1) {
							this.v.events = "event69";
							this.v.eVar4 = this.v.prop4 = "";
							this.v.hier1 = "";
							this.v.eVar16 = this.v.eVar44 = this.v.eVar45 = "";
							this.v.eVar34 = this.v.prop34 = "";
							this.v.eVar19 = this.v.eVar48 = this.v.eVar63 = "";
						}
					}

					if(this.v.channel == "gallery"){
						this.v.prop7 = this.v.eVar7 = "";
					}
					
					if(_w.cnnMagTemplateType && _w.cnnMagTemplateType =="teaser"){
						this.v.prop60 = this.v.prop3;
						this.v.eVar60 = "D=c60";
					}					

					if (_w.location.href.indexOf("portfolio.money.cnn.com") != -1){
							this.v.prop1 ="Portfolio";
							this.v.prop2 ="Portfolio";
							this.v.eVar2 ="D=c2";
							this.v.prop5 ="SigFig";						
					}
					
					this.v.prop35 = _jsmd_default.version + ":" + _jsmd_default.release;
					this.v.eVar35 = "D=c35";

					
					if (_w.cnnad_transactionID) {
						this.v.prop46 = _w.cnnad_transactionID;
						this.v.eVar46 = "D=c46";
					}

					
					var guid = _jsmd.plugin.gCookie("ug");
					if (guid) {
						this.v.prop47 = guid;
						this.v.eVar47 = "D=c47";
					}

					if (this.config.map.isDynamic) {
						var da = this.config.map.isDynamic;
						if (da.indexOf("start") != -1) {
							this.v.eVar35="D=c35";
						}
						if(this.v.channel == "gallery" && this.v.events !== "event69"){
							var srchevt = this.v.events;
							if (srchevt.indexOf("event5") == -1){
								this.v.events += ",event5";
							}
						}
					}
					if(document.title.indexOf("404 Page Not Found") > -1) {
						this.v.pageType = "errorPage";
					}
					// Optimizely Adobe Analytics SiteCatalyst Integration
					window.optimizely = window.optimizely || [];
					window.optimizely.push(["activateSiteCatalyst", {
						"sVariable": this.v
					}]);

				}
			},
			"money-video": {
				filters: {
					"video-preroll":				{ include: ["business.mny.referrals_page","video.player","edition","video.title","video.id","code.version","video.preroll","business.mny.video.video_collection","business.mny.page.platform","business.mny.page.orientation","business.mny.page.navigator","m:promo.external.id"] },
					"video-fifty_percent":			{ include: ["business.mny.referrals_page","business.mny.prev_page","code.version","edition","video.duration_watched","video.fifty_percent","business.mny.section","business.mny.video.video_collection","mb:source","mb:special_features","mb:video.series","business.mny.page.platform","business.mny.page.orientation","business.mny.page.navigator","m:promo.external.id"] },
					"video-complete":				{ include: ["business.mny.referrals_page","business.mny.prev_page","code.version","edition","video.duration_watched","video.complete","business.mny.section","business.mny.video.video_collection","mb:source","mb:special_features","mb:video.series","business.mny.page.platform","business.mny.page.orientation","business.mny.page.navigator","m:promo.external.id"] }
				},
				variablemap: {
					"business.mny.section[0]":		["prop1","eVar1"],
					"business.mny.section[1]":		["prop2","eVar2"],
					"mb:source":					["prop5","eVar5"],
					"mb:special_features":			["prop8","eVar8"],
					"mb:video.series":				["prop11","eVar11"],
					"m:page.full_url":				["prop15","eVar15"],
					"mb:video.player":				["prop16","eVar16"],
					"mb:video.content_length":		["eVar20"],
					"mb:edition":					["prop23","eVar23"],
					"m:page.domain":				["server","eVar29"],
					"m:video.title":				["prop29","eVar41"],
					"m:business.friendly_name":		["prop30","eVar30"],
					"m:page.template_type":			["prop32","eVar32"],
					"m:page.content_type":			["prop33","eVar33"],
					"m:user.authenticated":			["prop34","eVar34"],
					"m:video.id":					["eVar42"],
					"m:code.version":				["prop35"],
					"business.mny.page.platform":	["eVar37"],
					"business.mny.page.navigator":	["eVar55"],
					"business.mny.page.orientation":["eVar56"],
					"m:page.section[0]":			["channel","eVar27"],
					"m:page.section[1]":			["prop28","eVar28"],
					"business.mny.referrals_page":	["prop67","eVar67"],
					"m:business.mny.video.video_collection":	["prop60","eVar60"],
					"business.money.video_type":    ["prop70","eVar70"],
					"mb:video.publish_date":		["eVar51"],
					"m:promo.external.id":				["campaign"],			//Marketing/External Campaigns
					"delimiter":					"|"
				},
				eventmap: {
					"video.fifty_percent":			["event29"],
					"video.start":					["event32"],
					"video.complete":				["event33"],
					"video.autostart":				["event34"],
					"video.preroll":				["event35"],
					"video.duration_watched":		["event36"]
				},
				premap: function() { },
				postmap: function() { }
			}
		}

    },
    plugins: {  
        		gMONBrandingValue: function(){
			return window.cnnBrandingValue;
		},
		gCNNOverides: function() {
			var domain=this.get("page.domain"),f=false,sec,src;
			//override for partners
			if (domain==="bankrate.com") {
				f=true; sec=["Personal Finance",""];src="BankRate";
			} else if (domain==="realestate.money.cnn.com" || domain==="cnnmoney.trulia.com") {
				f=true; sec=["Personal Finance","Real Estate"];src="Trulia";
			} else if (domain === "jobsearch.money.cnn.com") {
				f=true; sec=["Personal Finance","Jobs"];src="Glassdoor";
			} else if (domain === "markets.money.cnn.com") {
				f=true; sec=["Markets","Markets"];src="CNNMONEY";
			} else if (domain === "marketsentiment.money.cnn.com") {
				f=true; sec=["Markets","Markets"];src="Sentigo";
			}
			if(f) {this.set("raw:business.mny.section",sec);this.set("raw:business.mny.source",src);}
		},
		gCNNCampaignParameter:function(){
				try{
				var rval = "";
				if (this.gQuery("utm_source")) { utm_source = this.gQuery("utm_source"); rval += utm_source + ":";}
				if (this.gQuery("utm_campaign")) { utm_campaign = this.gQuery("utm_campaign"); rval += utm_campaign + ":";}
				if (this.gQuery("utm_medium")) { utm_medium = this.gQuery("utm_medium"); rval += utm_medium + ":";}
				if (this.gQuery("utm_term")) { utm_term =  this.gQuery("utm_term"); rval += utm_term + ":";}
				if (this.gQuery("utm_content")) { utm_term =  this.gQuery("utm_content"); rval += utm_term;}
				//rval = utm_source + ":" + utm_campaign + ":" + utm_medium + ":" + utm_term;
				return rval;
			}catch(err) {}
		},
		gCNNSource: function(defval) {
			var src=_w.cnnSource,rval=defval,pathname = _jsmd.plugin.gADBPURL("path");
			//business.mny.source : prop5,eVar5
			if (src) {
				rval = src.toUpperCase();
				if (rval === "SMB" || rval=== "CNN") {
					rval="CNNMONEY";
				} else if (rval==="MONEYMAG") {
					rval="MONEY";
				} else if (rval === "FORTUNE") {
					rval="FORT";
				}
			}
			if (pathname.match(/[\/\.]+fortune[\/\.](htm[l]?)?/)) {	//match /fortune/ or /fortune.htm or .fortune
				rval="FORT";
			} else if (pathname.match(/[\/\.]+moneymag[\/\.](htm[l]?)?/)) {	//match /moneymag/ or /moneymag.htm or .moneymag
				rval="MONEY";
			} else if (pathname.match(/[\/\.]+fsb[\/\.](htm[l]?)?/)) {	//match .fsb/ or /fsb.htm
				rval="FSB";
			} else if (pathname.match(/\/business2\//) || pathname.match(/[\/\.]biz2[\/\.](htm[l]?)?/)) {	//match /business2/ or .biz2/ or /biz2.htm
				rval="BIZ2";
			}
			return rval;
		},
		gCNNEdition: function(defval) {
			var edition=_w.cnnEdition,rval=defval;
			if (edition) {
				rval = edition;
			}
			return rval;
		},
		gCNNAuth:function(){
			var authId1 = _jsmd.plugin.gCookie("CNNid");
			var authId2 = _jsmd.plugin.gCookie("authid");
			if (authId1 && authId1 != "" && authId2 && authId1 != "") {
				return "reg:logged in";
			} else {
				return "anonymous";
			}
		},
		gCNNgetPageAttribution:function() {
			
			var cnnPA = _jsmd.plugin.gMonQuery("iid");
			if (document.referrer.indexOf("cnn.com") == -1) { cnnPA = ""; }
			return cnnPA;
		},
		gMonQuery:function(f_id,url) {
			
			var rval = "";
			try{
				if (!url) {
					url = window.location.href;
				}
				f_id = f_id.replace(/[\[\]]/g, "\\$&");
				var regex = new RegExp("[?&]" + f_id + "(=([^&#]*)|&|#|$)"),
					results = regex.exec(url);
				if (!results) return "";
				if (!results[2]) return '';
				rval  = decodeURIComponent(results[2].replace(/\+/g, " "));
			}catch(err){
				return rval;
			}
			return rval;
		},
		gMONSection:function(sec1,sec2){
			var r = "";
			if (sec2.toLowerCase() == "cnnmoney" || sec2.toLowerCase() == sec1.toLowerCase()){
				sec2 = "";
			}
			var r = (sec1)?sec1+":":"";
			r = (r!=""&&sec2)?r+sec2:r;
			window.cnnSection = sec1;
			return r;
		},
		gCNNSection:function() {
			var pathname = _jsmd.plugin.gADBPURL("path"),domain=_jsmd.plugin.gADBPURL("domain");
			pathname = pathname.replace(/\/\d{4}\/\d{2}\/\d{2}/g,""); //remove dates
			pathname = pathname.replace(/\/gallery/g,""); //remove /gallery this dir does not include archives
			var path_array = pathname.replace(/\/\d+\//g,"/").substring(1).split("/");	//removes any other dates from URL
			if (pathname.match(/\/galleries\/\w+.htm\w*/)) {							//match /galleries/moneymag.html
				path_array = pathname.replace(/.htm\w*/,"").substring(1).split("/");	//remove .html or .htm
			}
			if ( pathname.match(/\d{4}\/\d{2}\/\d{2}\/leadership\//)|| pathname.match(/\d{4}\/\d{2}\/\d{2}\/leadership-post\//)) {
				pathname = pathname.replace("leadership-post","leadership");
				path_array = pathname.replace(/\/\d{4}\/\d{2}\/\d{2}/g,"").substring(1).split("/");
			}
			else if(pathname.match(/video\/leadership/)){
			path_array = pathname.replace(/\/video/g,"").substring(1).split("/");
			}
			if(pathname.match(/data\/stocks-we-love/)){
			path_array = pathname.replace("/data\/stocks-we-love/","/investing\/stocks-we-love/").substring(1).split("/");
			}
			var mnySection = new Array();
			var mnySectionTemp = new Array();
			//match first pathname
			mnySection = {
				"":					["Home","CNNMoney"],						// /\//
				"news":				["Business News","News"],					// /\/news\//
				"galleries":		["Business News","News"],					// /\/galleries\//
				"data":				["Markets","Markets"],						// /\/data\//
				"markets":			["Investing","Investing"],					// /\/markets\//
				"media":			["Media","Media"],                          //     /\/media\//
				"luxury":			["Luxury","Luxury"],					    // /\/\/luxury\//
				"investing":		["Investing","Investing"],					// /\/investing\//
				"quote":			["Markets","Stock Quotes"],					// /\/quote\//
				"technology":		["Technology","Technology"],				// /\/technology\//
				"pf":				["Personal Finance","Personal Finance"],	// /\/pf\//
				"yourhome":			["Personal Finance","Personal Finance"],	// /\/yourhome\//
				"autos":			["Personal Finance","Autos"],				// /\/autos\//
				"real_estate":		["Personal Finance","Real Estate"],			// /\/real_estate\//
				"lifestyle":		["Personal Finance","Lifestyle"],			// /\/lifestyle\//
				"retirement":		["Personal Finance","Retirement"],			// /\/retirement\//
				"college-101":		["Personal Finance","College"],				// /\/101\/college-101\//
				"smallbusiness":	["Small Business","Small Business"],		// /\/smallbusiness\//
				"leadership":		["Personal Finance","Fortune Management Blog"],	// /\/leadership\//	- added on 8/1/2011
				"termsheet":		["Investing","Fortune Finance Blogs"],		// /\/termsheet\//	- added on 8/1/2011
				"services":			["Services","Services"],					// /\/services\//
				"video":			["Video",""],							// /\/video\//
				"profile":			["Profile",""],							// /\/profile\//
				"interactive":      ["Interactive",""],						// /\/interactive\//
				"tools":			["Tools",""],							// /\/tools\//
				"corrections":      ["Business News",""],             // /\/corrections\//
				"international":    ["International",""]              // /\/international\//              
			} [path_array[0]];
			if (!mnySection) mnySection = ["Other",""];
			//match second pathname
			mnySectionTemp = mnySection;
			if (path_array[1]) {
				mnySection = {
					"international":	["Business News","International"],		// /\/news\/international\//
					"world":			["Business News","International"],		// /\/news\/world\//
					"companies":		["Business News","Companies"],			// /\/news\/companies\//
					"economy":			["Business News","Economy"],			// /\/news\/economy\//
					"assignment_detroit":["Business News","Economy"],			// /\/galleries\/assignment_detroit\//
					"fortune":			["Business News","News"],				// /\/galleries\/fortune\//
					"bing":				["Business News","News"],				// /\/galleries\/bing\//
					"news":				["Business News","News"],				// /\/video\/news\//
					"markets":			["Investing","Investing"],					// /\/video\/markets\//
					"fear-and-greed":	["Investing","Investing"],				// /\/data\/fear-and-greed\//
					"autos":			["Personal Finance","Autos"],			// /\/quizzes\/autos\//
					"college":			["Personal Finance","College"],			// /\/pf\/college\//
					"insurance":		["Personal Finance","Insurance"],		// /\/pf\/insurance\//
					"retirement":		["Personal Finance","Retirement"],		// /\/calculator\/retirement\//
					"taxes":			["Personal Finance","Taxes"],			// /\/pf\/taxes\//
					"jobs":				["Personal Finance","Jobs"],			// /\/pf\/jobs\//
					"funds":			["Personal Finance","Mutual Funds"],	// /\/pf\/funds\//
					"investing":		["Investing","Investing"],				// /\/pf\/investing\//
					"moneymag":			["Personal Finance","Personal Finance"],// /\/galleries\/moneymag\//
					"pf":				["Personal Finance","Personal Finance"],// /\/video\/pf\//
					"luxury":			["Luxury","Luxury"],					// /\/\/luxury\//
					"media":			["Media","Media"],                          //  /\/media\//
					"real_estate":		["Personal Finance","Real Estate"],		// /\/quizzes\/real_estate\//
					"fsb":				["Small Business","Small Business"],	// /\/galleries\/fsb\//
					"smallbusiness":	["Small Business","Small Business"],	// /\/video\/smallbusiness\//
					"smbusiness":		["Small Business","Small Business"],	// /\/quizzes\/smbusiness\//
					"enterprise":		["Technology","Enterprise"],			// /\/technology\/enterprise\//
					"innovation":		["Technology","Innovation"],			// /\/technology\/innovation\//
					"mobile":			["Technology","Mobile"],				// /\/technology\/mobile\//
					"personaltech":		["Technology","Personal Tech"],			// /\/technology\/personaltech\//
					"security":			["Technology","Security"],				// /\/technology\/security\//
					"social":			["Technology","Social"],				// /\/technology\/social\//
					"startups":			["Technology","Startups"],				// /\/technology\/startups\//
					"biz2":				["Technology","Technology"],			// /\/galleries\/biz2\//
					"business2":		["Technology","Technology"],			// /\/magazines\/business2\//
					"technology":		["Technology","Technology"],			// /\/video\/technology\//
					"tech":				["Technology","Technology"],			// /\/quizzes\/tech\//
					"business":			["Technology","Business"],				// /\/technology\/business\//
					"culture":			["Technology","Culture"],				// /\/technology\/culture\//
					"gadgets":			["Technology","Gadgets"],				// /\/technology\/gadgets\//
					"future":			["Technology","Future"]					// /\/technology\/future\//
				} [path_array[1]];
				if (!mnySection) mnySection = mnySectionTemp;
				mnySectionTemp = mnySection;
				if (path_array[0] && path_array[1]!="fear-and-greed") {	//calling this again to reset content in /data to Markets (the rest categorizes as Investing)
					mnySection = {
						"data":			["Markets","Markets"]						// /\/data\/subdir/
					} [path_array[0]];
					if (!mnySection) mnySection = mnySectionTemp;
				}
				mnySectionTemp = mnySection;
				if (pathname.match("^/tools/")){
					mnySection = {
						"homepricedata":			["Personal Finance","Real Estate"],
						"mortgagecalc":				["Personal Finance","Real Estate"],
						"houseafford":				["Personal Finance","Real Estate"],
						"saveyoung":				["Personal Finance","Retirement"],
						"savingscalc":				["Personal Finance","Retirement"],
						"annuities":				["Personal Finance","Retirement"],
						"retireyoung":				["Personal Finance","Retirement"],
						"networth_ageincome":		["Personal Finance","Retirement"],
						"retirementneed":			["Personal Finance","Retirement"],
						"collegecost":				["Personal Finance","College"],
						"studentloan":				["Personal Finance","College"],
						"taxreturncalc":			["Personal Finance","Taxes"],
						"costofliving":				["Personal Finance","Personal Finance"],
						"debtplanner":				["Personal Finance","Personal Finance"],
						"networth":					["Personal Finance","Personal Finance"],
						"prioritize":				["Personal Finance","Personal Finance"],
						"assetallocwizard":			["Personal Finance","Personal Finance"],
						"millionaire":				["Personal Finance","Personal Finance"],
						"moneygrow":				["Personal Finance","Personal Finance"]
					} [path_array[1]];
				}
			}
			if (!mnySection) mnySection = mnySectionTemp;
			//match third pathname
			mnySectionTemp = mnySection;
			if (path_array[2]) {
				mnySection = {
					"bestcompanies":		["Business News","Companies"],		// /\/magazines\/fortune\/bestcompanies\//
					"best-companies":		["Business News","Companies"],		// /\/magazines\/fortune\/best-companies\//
					"fortune500":			["Business News","Companies"],		// /\/magazines\/fortune\/fortune500\//
					"fortunefastestgrowing":["Business News","Companies"],		// /\/magazines\/fortune\/fortunefastestgrowing\//
					"global500":			["Business News","Companies"],		// /\/magazines\/fortune\/global500\//
					"mostadmired":			["Business News","Companies"],		// /\/magazines\/fortune\/mostadmired\//
					"most-admired":			["Business News","Companies"],		// /\/magazines\/fortune\/most-admired\//
					"mostpowerfulwomen":	["Business News","Companies"],		// /\/magazines\/fortune\/mostpowerfulwomen\//
					"steve_jobs":			["Business News","Companies"],		// /\/magazines\/fortune\/steve_jobs\//"
					"assignment_detroit":	["Business News","Economy"],		// /\/news\/specials\/assignment_detroit\//
					"crisiswallstreet":		["Business News","Economy"],		// /\/news\/specials\/crisiswallstreet\//
					"fed":					["Business News","Economy"],		// /\/news\/specials\/fed\//
					"fixing_crisis":		["Business News","Economy"],		// /\/news\/specials\/fixing_crisis\//
					"obama-economy":		["Business News","Economy"],		// /\/news\/specials\/obama\-economy\//
					"money101":				["Personal Finance","Money 101"],	// /\/magazines\/moneymag\/money101\//
					"bplive":				["Personal Finance","Real Estate"],	// /\/magazines\/moneymag\/bplive\//
					"moneymag_realestate":	["Personal Finance","Real Estate"],	// /\/magazines\/moneymag\/moneymag_realestate\//
					"bpretire":				["Personal Finance","Retirement"],	// /\/magazines\/moneymag\/bpretire\//
					"retirement-guide":		["Personal Finance","Retirement"],	// /\/magazines\/moneymag\/retirement-guide\//
					"retirement-need":		["Personal Finance","Retirement"],	// /\/calculator\/retirement\/retirement-need\//
					"fortune_investing":	["Investing","Investing"],			// /\/magazines\/fortune\/fortune_investing\//
					"healthcare":			["Personal Finance","Insurance"],	// /\/news\/specials\/healthcare\//
					"holiday_money":		["Personal Finance","Lifestyle"],	// /\/news\/specials\/holiday_money\//
					"jobs":					["Personal Finance","Jobs"],		// /\/news\/specials\/jobs\// and galleries
					"bestjobs":				["Personal Finance","Jobs"],		// /\/magazines\/moneymag\/bestjobs\//
					"companies":			["Business News","Companies"],		// /\/galleries\/news\/companies\//
					"economy":				["Business News","Economy"],		// /\/galleries\/news\/economy\//
					"international":		["Business News","International"],	// /\/galleries\/news\/international\//
					"world":				["Business News","International"],	// /\/galleries\/news\/world\//
					"college":				["Personal Finance","College"],		// /\/galleries\/pf\/college\//
					"insurance":			["Personal Finance","Insurance"],	// /\/galleries\/pf\/insurance\//
					"taxes":				["Personal Finance","Taxes"],		// /\/galleries\/pf\/taxes\//
					"funds":				["Personal Finance","Mutual Funds"],	// /\/pf\/funds\//
					"investing":			["Investing","Investing"],			// /\/pf\/investing\//
					"enterprise":			["Technology","Enterprise"],		// /\/galleries\/technology\/enterprise\//
					"innovation":			["Technology","Innovation"],		// /\/galleries\/technology\/innovation\//
					"mobile":				["Technology","Mobile"],			// /\/galleries\/technology\/mobile\//
					"personaltech":			["Technology","Personal Tech"],		// /\/galleries\/technology\/personaltech\//
					"security":				["Technology","Security"],			// /\/galleries\/technology\/security\//
					"social":				["Technology","Social"],			// /\/galleries\/technology\/social\//
					"startups":				["Technology","Startups"]			// /\/galleries\/technology\/startups\//
				} [path_array[2]];
			}
			if (!mnySection) mnySection = mnySectionTemp;
			//match domain name
			mnySectionTemp = mnySection;
			mnySection = {
				"tech.fortune.cnn.com":					["Technology","Fortune Tech Blogs"],
				"wallstreet.blogs.fortune.cnn.com":		["Technology","Fortune Tech Blogs"],
				"cnnmoneytech.tumblr.com":				["Technology","Tech_Tumblr"],					//added on 11/29/2010
				"finance.fortune.cnn.com":				["Investing","Fortune Finance Blogs"],
				"stanleybing.blogs.fortune.cnn.com":	["Business News","News"],						//added on 9/21/2010
				"marketsentiment.money.cnn.com":		["Markets","Markets"],							//added on 2/25/2011
				"management.fortune.cnn.com":			["Personal Finance","Fortune Management Blog"],	//added on 10/25/2010
				"moremoney.blogs.money.cnn.com":		["Personal Finance","Personal Finance"],
				"helpdesk.blogs.money.cnn.com":			["Personal Finance","Personal Finance"],
				"thewheeldeal.blogs.fortune.cnn.com":	["Personal Finance","Autos"],
				"smallbusiness.blogs.cnnmoney.cnn.com":	["Small Business","Small Business"],
				"economy.money.cnn.com":				["Business News","Economy"],
				"buzz.money.cnn.com":					["Investing","Investing"]
			} [domain];
			if (!mnySection) mnySection = mnySectionTemp;
			//exceptions
			if (pathname == "/magazines/fortune/") mnySection = ["Home","Fortune"];
			if (pathname == "/magazines/moneymag/") mnySection = ["Home","Money Magazine"];
			if (pathname == "/news/corrections/") mnySection = ["Other",""];
			if ((pathname == "/galleries/")||(pathname == "/gallery/")) mnySection = ["Other",""];
			return mnySection;
		},
		gCNNMatchVal:function(_p, _m){
			var p = _p, match = _m;
			var matchVal = "", tm = false;
			function chkMatch(_ra,_val) {
				var v = false, re, l = _ra.length;
				for(var i = 0; i<l; i++) {
					re = _ra[i];
					if (re.test(match)) { return _val; }
				}
				return null;
			}
			var m = _m;
			for(m in p) {
				tm = chkMatch(p[m],m);
				if(tm) {matchVal = tm; break;}
			}
			return matchVal;
		},
		gMONVideoSequence:function(){ //eVar18 - business.mny.video.sequence
			
			var todaydate = new Date().getTime();
			if (typeof(Storage) !== "undefined") { //check for web storage support
				if (sessionStorage.startdate) { //check for start date
					var daysinceonline = Math.ceil((todaydate - sessionStorage.startdate) / 86400000);
					if (daysinceonline > 1) { //if session is older than 24 hours, start new session
						sessionStorage.startdate = todaydate;	//reset session start date
						sessionStorage.videoseq = 1;			//reset video sequence number
					} else { //return session
						sessionStorage.videoseq = Number(sessionStorage.videoseq) + 1;	//increment visit number
					}
				} else { //new session
					sessionStorage.startdate = todaydate;	//set session variable
					sessionStorage.videoseq = 1;			//reset video sequence number
				}
				return sessionStorage.videoseq;
			} else { //web storage not supported
				return 1;
			}
		},
		gMONOrientation:function() { //eVar56 - page.orientation
			var orientation = window.orientation,
			rval = "no value set";
			if(orientation == 0) {
				rval = "portrait";
			} else if(orientation == 90) {
				rval = "landscape";
			} else if(orientation == -90) {
				rval = "landscape";
			} else if(orientation == 180) {
				rval = "portrait";
			}
		return rval; 
		},
		gCNNPlatform:function() { //eVar37 - business.mny.page.platform
			var rval = "";
			if(navigator.userAgent.match(/iPhone/i)) {
				rval = "smartphone";
			}else if(navigator.userAgent.match(/iPad/i)) {
				rval = "tablet";
			}else if(navigator.userAgent.match(/android/i)) {
				if(navigator.userAgent.match(/mobile/i)) {
					rval = "smartphone";
				}else {
					rval = "tablet";
				}
			} else {
				rval = "no value set";
			}
			return rval ? rval : "no value set";
		},
		gMONVideoCollection:function(){	//video callback plugin
			return {
				get: function (i,p) {
					var vplayer = _jsmd.plugin.md.get("video.players");
					for(var j=vplayer.length-1; j>=0; j--) {
						if (vplayer[j].containerId == i) {
							return vplayer[j][p];
						}
					}
				},
				set: function (i,p,v) {
					var vplayer = _jsmd.plugin.md.get("video.players");
					for(var j=vplayer.length-1; j>=0; j--) {
						if (vplayer[j].containerId == i) {
							vplayer[j][p] = v;
							break;
						}
					}
				},
				toggle: function (i,p) {
					var vplayer = _jsmd.plugin.md.get("video.players");
					for(var j=vplayer.length-1; j>=0; j--) {
						if (vplayer[j].containerId == i) {
							var v = vplayer[j][p];
							vplayer[j][p] = !v;
							break;
						}
					}
				},
				start: function (i,t) {
					var vplayer = _jsmd.plugin.md.get("video.players");
					vplayer.push(new objVplayer(i,t));
					function objVplayer (cid,videoTitle) {
						this.containerId = cid;
						this.videoTitle = videoTitle;
						this.vidStarted = false;
						this.hasScrubbed = false;
						this.isAuto = false;
						this.isPaused = false;
						this.isBuffering = false;
						this.pastHalf = false;
						this.startTime = new Date().getTime();
						this.timeSpent = 0;		//used in pause action to calculate time spent
					}
				},
				pause: function (i) {
					var vplayer = _jsmd.plugin.md.get("video.players");
					for(var j=vplayer.length-1; j>=0; j--) {
						if (vplayer[j].containerId == i) {
							var p = vplayer[j].isPaused;
							var b = vplayer[j].isBuffering;
							if (!b) {	//not buffering
								if (p) {	//pause -> unpause
									vplayer[j].startTime = new Date().getTime();
								} else {	//unpause -> pause
									var playedTime = new Date().getTime() - vplayer[j].startTime + vplayer[j].timeSpent;	//calculate time spent
									vplayer[j].timeSpent = playedTime;
								}
							}
							vplayer[j].isPaused = !p;
							break;
						}
					}
				},
				buffer: function (i) {
					var vplayer = _jsmd.plugin.md.get("video.players");
					for(var j=vplayer.length-1; j>=0; j--) {
						if (vplayer[j].containerId == i) {
							var p = vplayer[j].isPaused;
							var b = vplayer[j].isBuffering;
							if (!p) {	//not paused
								if (b) {	//buffer -> unbuffer
									vplayer[j].startTime = new Date().getTime();
								} else {	//unbuffer -> buffer
									var playedTime = new Date().getTime() - vplayer[j].startTime + vplayer[j].timeSpent;	//calculate time spent
									vplayer[j].timeSpent = playedTime;
								}
							}
							vplayer[j].isBuffering = !b;
							break;
						}
					}
				},
				progress: function (i) {
					var vplayer = _jsmd.plugin.md.get("video.players");
					for(var j=vplayer.length-1; j>=0; j--) {
						if (vplayer[j].containerId == i) {
							if(!(vplayer[j].isBuffering) && !(vplayer[j].isPaused)){
								var playedTime = ( new Date().getTime() - vplayer[j].startTime + vplayer[j].timeSpent ) / 1000;
							}
							else{
								var playedTime = ( vplayer[j].timeSpent ) / 1000;
							}
							vplayer[j].startTime = new Date().getTime();
							vplayer[j].timeSpent = 0;
							return Math.round(playedTime);
						}
					}
				},
				complete: function (i) {
					var vplayer = _jsmd.plugin.md.get("video.players");
					for(var j=vplayer.length-1; j>=0; j--) {
						if (vplayer[j].containerId == i) {
							var playedTime = ( new Date().getTime() - vplayer[j].startTime + vplayer[j].timeSpent ) / 1000;
							return Math.round(playedTime);
						}
					}
				}
			}
		},
		capMONTimeSpent: function(timeSpent, trt) {
			try {	//check video time spent value
				if ((parseFloat(timeSpent) == parseInt(timeSpent)) && !isNaN(timeSpent)) {	//valid time spent value
					if (timeSpent > 3600 || timeSpent < 0) {	//video watched longer than an hour
						if (trt && !isNaN(trt) && (parseFloat(trt) == parseInt(trt))) {	//valid video length
							timeSpent = parseFloat(trt) * 2;
						} else {	//invalid video length
							timeSpent = 0;
						}
					}
				} else {	//invalid time spent value
					timeSpent = 0;
				}
			} catch(e) { timeSpent = 0; }
			return timeSpent;
		},
		gCNNgetCookie:function(name){
			var cookie_value = this.cookie.get(name);
			if (cookie_value == "edition" || cookie_value == "mexico") {
				cookie = "international";
				return cookie;
			}
			else if(cookie_value == "www" || name == "SelectedEdition") {
				cookie = "domestic";
				return cookie;
			} else {
				return cookie_value;
			}
		},
		gMNYClickTaleID:function() {
			var retv;
			if (document.cookie.indexOf("WRUID") > -1 && document.cookie.indexOf("WRIgnore=true") == -1) {
				var ca = document.cookie.split(';');
				var PID = 0, UID = 0;
				for(var i=0;i < ca.length;i++) {
					var c = ca[i];
					while (c.charAt(0)==' ') c = c.substring(1,c.length);
					if (c.indexOf("CT_Data") > -1) PID = c.substring(c.indexOf("apv_")).split("_")[1];
					if (c.indexOf("WRUID") > -1 && c.indexOf("WRUID=") == -1 ) UID = c.split("=")[1];
					retv = (UID + "." + PID);
				}
			}
			return (UID == 0 || PID == 0) ? null : retv; //eVar67 - ClickTale
		}

        ,
        
		gADBPCampaignStacking:function(the_cookie,param_ref,expiration,max_storage) {
			var s=this.vendor.Adobe.plugins();
			var p1,p2,p3,p4,p5,p6,p7;
			p1 = this.get(param_ref);
			p2 = the_cookie;
			p3 = expiration||30;
			p4 = max_storage||5;
			p5 = "|";
			return (s.campstack.call(s,p1,p2,p3,p4,p5));
		},
		
		gADBPTranslateTemplateType: function(templateTypeCode,lookupType) {
			var adbpprefix="adbp:",rval=["o","other"];
			var lookup={
					b:"blog",
					g:"game",
					it:"interactive",
					c:"content",
					"in":"index",
					err:"error",
					e:"ecom",
					s:"signup",
					v:"video",
					sf:"section front",
					o:"other"
				},
				lookupRev={
					"blog":"b",
					"game":"g",
					"interactive":"it",
					"content":"c",
					"index":"in",
					"error":"err",
					"ecom":"e",
					"signup":"s",
					"video":"v",
					"section front":"sf",
					"other":"o"
				};
			if(lookup[templateTypeCode]!=null) {rval=[templateTypeCode,lookup[templateTypeCode]];}
			if(lookupRev[templateTypeCode]!=null){rval=[lookupRev[templateTypeCode],templateTypeCode];}
			rval[1]=adbpprefix+rval[1];
			if(lookupType=="short") {rval=rval[0];}
			if(lookupType=="long") {rval=rval[1];}
			return rval;
		},
		gADBPTemplateType: function(defaultString,patterns,matchStrings,bsRules,bsMatchStringIndex) {
			var apre="adbp:",bpre="other:",i=bsMatchStringIndex,rval,adbptype="o";i=(!i?0:i);
			var mpt=matchStrings[i],md=patterns,bs=bsRules,t,t2,check;
			mpt=(!mpt?"":mpt.toLowerCase());t2=(!bs?null:bs[mpt]);
			if(t2!=null) {
				adbptype=t2[0];
				rval=(adbptype==="o"&&t2.length<2?mpt:t2[1]);
			} else {
				if(md!=null) {
					for(m in md) {
						t=chkMatch(matchStrings[md[m][0]],md[m],m);
						if(t) {adbptype=t; break;}
					}
				}
			}
			function chkMatch(checkStr,reArray,val) {
				var i,rval=false,re;
				for(i=reArray.length-1;i>0;i--) {
					re=reArray[i];
					rval=rval||(re.exec(checkStr)!=null?true:false);
				}
				return (!rval?null:val);
			}
			t2=adbptype.split(":");
			if(t2.length==2) { rval=t2[1]; adbptype=t2[0];}
			var x=this.gADBPTranslateTemplateType(adbptype,"long");
			return {full:(adbptype==="o"&&t2[1]?bpre+rval:x),small:adbptype};
		},
		gADBPURL:function(type,lvl){
			var hostname = _w.location.hostname.toLowerCase();
			var pathname = _w.location.pathname.toLowerCase();
			pathname=pathname.replace(/([^\/]+\.[^\/]+$)/,"");
			
			var rval;
			switch(type) {
				case "domain":
					hostname = hostname.replace("www.","");
					if (lvl == parseFloat(lvl)) {
						var domain_array = hostname.split(".");
						var currentPointer = domain_array.length - lvl;
						var currentDomainLevel = (currentPointer >= 0 ? domain_array[currentPointer] : "");
						rval=currentDomainLevel;
					} else {
						rval=hostname;
					}
					break;
				case "path":
					var pathname2 = pathname.substring(1);
					var path_array = pathname2.split("/");
					if (lvl == parseFloat(lvl) && lvl >= 1) {
						var currentPathname = (path_array.length >= lvl ? path_array[lvl-1] : "");
						rval=currentPathname;
					} else {
						rval=pathname;
					}
					break;
				case "hier":
					
					hostname = hostname.replace("www.","");
					var path_array = pathname.substring(1).split("/");
					var h1 = hostname + "/" + path_array[0];
					var h2 = h1;
					if (path_array[1]) h2 = h2 + "/" + path_array[1];
					rval=[h1,h2];
					break;
				default:
					rval=hostname + pathname;
			}
			return rval;
		},
		
		gADBPContentType:function(defaultVal){
			var tt=this.md.get("page.template_type"),
			ct=this.md.get("page.content_type"),
			l={
				"adbp:blog":	["blog.read","adbp:blog read"],
				"adbp:content":	["article.read","adbp:article read"],
				"adbp:game":	["game.play","adbp:game played"]
			}[tt],
			m={
				"adbp:article read": "article.read"
			}[ct];
			if(m!=null) {
				this.md.push("page.events",m);return ct;
			}
			if(!l) { return defaultVal;}
			this.md.push("page.events",l[0]);return l[1];
		},
		
		gADBPPageName: function(pathname,delimiter) {
			var s_pageName = "";
			if (!delimiter) delimiter = ":";
			var ttbefore = this.md.get("page.template_type");
			if (ttbefore) { //default to "other" if template type is not defined
				ttbefore = ttbefore.replace(/adbp./,"");
				var templateTypeSmall = _jsmd.plugin.gADBPTranslateTemplateType(ttbefore,"short");
			} else {
				var templateTypeSmall = "o";
			}
			var buc_p32 = this.md.get("business.name") + delimiter + templateTypeSmall;
			var thirdLevelDomain = _jsmd.plugin.gADBPURL("domain",3);
			var fullDomain = _jsmd.plugin.gADBPURL("domain");
			var lastTwoDomain = /(\.\w+\.\w+)$/.exec(fullDomain);
			if (lastTwoDomain) thirdLevelDomain = fullDomain.replace(lastTwoDomain[0],"");
			//if (!pathname) pathname = _jsmd.plugin.gADBPURL("path");
			if (!pathname) {
				var p = _w.location.pathname.toLowerCase();
				var a = p.split('/');
				var l = a.length;
				var r = /^index./;
				pathname = (r.test(a[(l-1)])) ? p.replace(/([^\/]+\.[^\/]+$)/,"") : p;
				r = /([^\/]+\.[^\/]+$)/;
				if (!r.test(pathname)){
					l = pathname.length;
					if(pathname.charAt(l-1) !== "/"){pathname = pathname+"/";}
				}
			}
			var pageNameLen,r_len;
			if (thirdLevelDomain == "") {
				pageNameLen = buc_p32.length + 1 + pathname.length;
				if (pageNameLen <= 100) {
					s_pageName = buc_p32 + delimiter + pathname;
				} else {
					r_len = pageNameLen - 100;
					s_pageName = buc_p32 + delimiter + pathname.substring(r_len);
				}
			} else {
				pageNameLen = buc_p32.length + 1 + thirdLevelDomain.length + 1 + pathname.length;
				if (pageNameLen <= 100) {
					s_pageName = buc_p32 + delimiter + thirdLevelDomain + delimiter + pathname;
				} else {
					if (thirdLevelDomain.length <= 5) {
						r_len = pageNameLen - 100;
						s_pageName = buc_p32 + delimiter + thirdLevelDomain + delimiter + pathname.substring(r_len);
					} else {
						thirdLevelDomain = thirdLevelDomain.substring(0,5);
						pageNameLen = buc_p32.length + 1 + thirdLevelDomain.length + 1 + pathname.length;
						if (pageNameLen <= 100) {
							s_pageName = buc_p32 + delimiter + thirdLevelDomain + delimiter + pathname;
						} else {
							r_len = pageNameLen - 100;
							s_pageName = buc_p32 + delimiter + thirdLevelDomain + delimiter + pathname.substring(r_len);
						}
					}
				}
			}
			return s_pageName;
		},
		gADBPRepeatVisitorByPeriod:function(period,domain) {
			var e=new Date(),now=new Date(),cp="rvis"+period,t=parseInt(this.cookie.get(cp),10),vnum=(t!=NaN&&t>0?t+1:1),
			sesonly=this.cookie.get("s"+cp);
			e.setHours(0);e.setMinutes(0);
			if(period==="w") {e.setDate(now.getDate()+7-now.getDay());}
			else if(period==="y") {e.setYear(now.getYear()+1); e.setMonth(0); e.setDate(1);}
			else { // Assume month
				e.setMonth(now.getMonth()+1);e.setDate(1);
			}
			if(sesonly.length==0) {
				this.cookie.set(cp,vnum,e,null,domain);
				sesonly=(vnum>1?"repeat":"new")+":"+vnum;
				this.cookie.set("s"+cp,sesonly,null,null,domain);
			}
			return sesonly;
		},
		gADBPReferralType:function(secDefURLs,refTypeMatchPat,urlTypeMatchPat,href){
			var match_pattern = /http:\/\/([^\/]+)/;
			var matches = match_pattern.exec(refTypeMatchPat);
			var matches2 = match_pattern.exec(urlTypeMatchPat);
			
			href=href||window.location.href;
			if(href.indexOf("m:")==0 || href.indexOf("mb:")==0) {href=this.md.get(href);}
	
			var section_definition;
	
			for (var i = 0; i < secDefURLs.length; i++) {
				var reg_result = secDefURLs[i][1].exec(refTypeMatchPat);
	
				if(reg_result!=null){
					section_definition = secDefURLs[i][0];
					break;
				}
			}
			if (!(matches && matches2 && matches[1] === matches2[1])) {
				return [section_definition,(matches != null?matches[1]:""),href];
			}
			return "";
		},
		gADBPVideoTimeSpent:function(event) {	//calculate video time spent in sec
			if (event && event == "start") {
				_w.video_start_time = new Date().getTime();	//sets video start times
				_w.video_progress = new Date().getTime();	//sets video progress start times
			} else if (event && event == "progress") {
				if (_w.video_progress > 0) {
					var timeSpent = ( new Date().getTime() - _w.video_progress ) / 1000;
					_w.video_progress = new Date().getTime();		//set new start time
					return Math.round(timeSpent);
				}
			} else if (event && event == "pause") {
				if (_w.video_start_time > 0) {
					if (_w.video_pause[0] == 0) {  //paused
						var playedTime = new Date().getTime() - _w.video_start_time + _w.video_pause[1];
						_w.video_pause = [1,playedTime];
					} else {  //restarted
						_w.video_pause[0] = 0;
						_w.video_start_time = new Date().getTime();
					}
				}
			} else if (event && event == "complete") {
				if (_w.video_start_time > 0) {
					var timeSpent = ( new Date().getTime() - _w.video_start_time + _w.video_pause[1] ) / 1000;
					_w.video_start_time = 0;	//reset value
					_w.video_pause = [0,0];		//reset value
					_w.video_progress = 0;		//reset value
					return Math.round(timeSpent);
				}
			} else {
				return false;
			}
		},
		
	
		gADBPVisitorSegments:function(_rParam, _rollday) {
			var rollDay = parseInt(_rollday);	//rolling days (max 30 days)
			
			var tt = new Date().getTime();
			
			var uc = this.cookie.get('tnr:usrvtstg01');		//1303834046328|2|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|2|f|2|3|1303836463058
			
			var sa = (uc)?uc.split('|'):'';
			
			var lt = (uc)?sa[0]:0;
			
			var ltV = (uc)?Math.round((tt-(sa[35]*1))/86400000):null;
			
			var vsDCnt = (uc)?(Math.round((tt-lt)/86400000))+1:1;
			
			var sc = this.cookie.get('tnr:sesctmp01');
			var lts = (sc)?(sc)*1:null;
			
			var is30Min = ((tt - lts)>=1800000)?true:false;
			
			var rnstg = null;
			
			var isThtyD = (vsDCnt>rollDay || sa[32] == 't')?true:false;
			
			var sPath = (window.location)?window.location.pathname:'/';
			
			var crntMnth = new Date().getMonth();
			
			var rParam = _rParam, ks = false;
			var thirtyDSum, lifTimeSum, calMnthSum;
			var isIE7 = false, pagMtch = "";

			if((navigator.appVersion.indexOf("MSIE 7.")!=-1)){
				pagMtch = sPath.match(/([^\/]+\.[^\/]+$)/);
				sPath = sPath.replace(/([^\/]+\.[^\/]+$)/,"");
				isIE7 = true;
			}

			
			thtyDRestChk = function(){
				if (isThtyD){
					var mv = ltV;//((vsDCnt*1) === 30)?0:(vsDCnt - 30);//2
					var ln = 34;
					var c = sa[30]*1;
					if (ltV > rollDay) {
						ks = true;
						sNewCookie();
					} else {
						for (var j = 1; j < ln; j++) {
							if (j < 31 && ltV == 1){
								sa[j] = sa[j+1];
							}else if ((mv+j) < 31 ){
								sa[j] = sa[j+mv];
							}
						}
						for(var e=rollDay; e>(rollDay-ltV); e--) {
							if (e < rollDay){
								sa[e] = 0;
							}
						}
						sa[32] = 't';
					}
					sa[30] = 0;
				}
			}.jsmdBind(this)

			
			sUsrVistCookieVal = function(){
				if (!ks){
				sa[31] = (sa[31]*1) + 1; // set lifetime visits
				sa[33] = (sa[34] != crntMnth)?1:(sa[33]*1)+1; //set the month visit sum
				sa[34] = crntMnth; // set value for current month
				sa[35] = tt; // set value for current month

				var av = (sa[32] === 't' && ltV<30)?30:(vsDCnt<=30)?vsDCnt:((vsDCnt-30) < 30)?((vsDCnt - 30)+1):1;
				av = av + 30 - rollDay;

				sa[av] = (sa[av]*1) + 1;
				var ln = sa.length;
				var ns = '';
				for (var i = 0; i < ln; i++) {
					ns += (i < 35)?sa[i]+'|':sa[i];
				}
				if(!isIE7){
					this.cookie.set('tnr:usrvtstg01', ns, 2000, sPath);
				} else if (sa[36] == pagMtch){
					ns = ns+"|"+pagMtch;
					this.cookie.set('tnr:usrvtstg01', ns, 2000, sPath);
				}

				}
			}.jsmdBind(this)

			
			sRtnObj = function () {
				var r;
				var lng = sa.length;
				thirtyDSum = 0;
				lifTimeSum = sa[31];
				calMnthSum = sa[33];

				for (var x=31-rollDay; x<lng; x++) {
					var cnm = sa[x];
					if (cnm != 0 && x < 31) {
						thirtyDSum += (cnm*1);
					}
				}
				r = gRtArr();
				return r;
			}.jsmdBind(this)

			
			gRtArr = function () {
				var _r;
				if (thirtyDSum == null) thirtyDSum = '1';
				if (lifTimeSum == null) lifTimeSum = '1';
				if (calMnthSum == null) calMnthSum = '1';
				if(rParam === '30day' || rParam === '30Day'){
					_r = [gNoR(thirtyDSum),thirtyDSum+''];
				} else if(rParam === 'liftime'){
					_r = [gNoR(lifTimeSum),lifTimeSum+''];
				} else if(rParam === 'month'){
					_r = [gNoR(calMnthSum),calMnthSum+''];
				} else {
					_r = {
						'$30Day':[gNoR(thirtyDSum),thirtyDSum+''],
						'calendar_month':[gNoR(calMnthSum),calMnthSum+''],
						'liftime':[gNoR(lifTimeSum),lifTimeSum+'']
					};
				}

				return _r;
			}.jsmdBind(this)

			
			gNoR = function (_v) { if (_v <= '1') {return 'new'} else {return 'repeat'} }

			
			sNewCookie = function()  {
				//var vStng = tt +'|0|0|1|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|1|f|1|'+crntMnth+'|'+tt;	//|#31<total visit sum>|#32f/t(not used)|#33<month visit sum>|#34<month value>|#35<current time>
				var vStng = tt + "|";
				for (var i=0; i<30; i++) {
					vStng += (i==30-rollDay) ? 1 : 0;
					vStng += "|";
				}
				vStng = vStng + "1|f|1|" + crntMnth + "|" + tt;
				if(isIE7){ vStng = vStng+"|"+pagMtch}
				this.cookie.set('tnr:usrvtstg01', vStng, 2000, sPath);
				this.cookie.set('tnr:sesctmp01' , tt, null, sPath);
			}.jsmdBind(this)


			if (uc && sc && is30Min && !isIE7){
				thtyDRestChk();
				sUsrVistCookieVal();
			} else if (!uc) {
				sNewCookie();
				rnstg = gRtArr();
				return rnstg;
			} else if(isIE7 && sa[36] == pagMtch){
					thtyDRestChk();
					sUsrVistCookieVal();
			}
			this.cookie.set('tnr:sesctmp01' , tt, null, sPath);
			rnstg = sRtnObj();

			return rnstg;
		}

        ,
        		gCookie:function(param,flag){ var r=this.cookie.get(param); if(flag==='c'||flag===1) this.cookie.set(param,"-",-1000); return unescape(r);},
		gDOM:function(domstring){return eval(domstring);},
		gJObj:function(objectRef,attribute) {
			objectRef=(typeof objectRef=="string"?window[objectRef]:objectRef);
			var rval=(objectRef!=null&&attribute!=null&&attribute.indexOf(".")==-1&&attribute.indexOf("[")==-1?objectRef[attribute]:objectRef);
			if(rval===objectRef) {
				var attribs=attribute.split("."),len=attribs.length,reArray=/([^\[]+)\[(\d+)\]/,t,t2,rval=objectRef;
				for(var i=0;i<len;i++) {
					t=attribs[i];
					if((t2=reArray.exec(t))!=null) {
						rval=rval[t2[1]][parseInt(t2[2])];
					} else rval=rval[t];
				}
			}
			return rval;
		},
		gMeta:function(tag){
			var a=tag,b=this.metatags;if(b==null){var c=document.getElementsByTagName("meta"),i=c.length;b={};while(i--){if(c[i].name.length>0)b[c[i].name]=(c[i].content?c[i].content:"");} this.metatags=b;} return(b[a]==null?"":b[a]);},
		gQueryOnce:function() {
			var i,param="";
			for(i=arguments.length-1;i>=0;i--) { param+=arguments[i]+",";}
			return (!this[param]?this[param]=this.gQuery.call(this,param):null);
		},
		gQuery:function() {
			var s=this.vendor.Adobe.plugins();
			var i,param="";
			for(i=arguments.length-1;i>=0;i--) { param+=arguments[i]+",";}
			var r=(!s.getQueryParam?null:s.getQueryParam.call(s,param));
			return (r!=null&r.length>0?r:null);
		},
		
		gQeurySpecial: function (_v, _d){
			var q = _w.location.href;
			var s = '';
			var d = _d;
			var v = (_v.indexOf('=')!= -1)?_v+'':_v+'=';
			var l = v.length;

			if (q.indexOf(v) != -1) {
				var n = q.indexOf(v);
				s = q.substr(n+l);
				n = s.indexOf(d);
				n = (n != -1)?n:s.indexOf('&');
				s = (n != -1)?s.substr(0,n): s;
				return s;
			}
		},
		gIreportgetMetaCompatible:function(mn){
		  var m = document.getElementsByTagName('meta');
		  for(var i in m){
			if(m[i].content == mn){
				return m[i].content;
			}
		  }
		},
		vendor: {
			Adobe: {
				plugins: function(s) {
					if (!s) {
						s=this.tmp;
						if(!s) { s=s_gi("ignore");}
					} 
					if(!s._jsmd_plugins_done) {
						
						s.getQueryParam=new Function("p","d","u",""
						+"var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.locati"
						+"on);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p"
						+".length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t){t=t.indexOf('#')>-"
						+"1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substring(i="
						+"=p.length?i:i+1)}return v");
						s.p_gpv=new Function("k","u",""
						+"var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v"
						+"=s.pt(q,'&','p_gvf',k)}return v");
						s.p_gvf=new Function("t","k",""
						+"if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"
						+"rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s."
						+"epa(v)}return ''");

						
						s.getTimeParting=new Function("t","z",""
						+"var s=this,cy;dc=new Date('1/1/2000');"
						+"if(dc.getDay()!=6||dc.getMonth()!=0){return'Data Not Available'}"
						+"else{;z=parseFloat(z);var dsts=new Date(s.dstStart);"
						+"var dste=new Date(s.dstEnd);fl=dste;cd=new Date();if(cd>dsts&&cd<fl)"
						+"{z=z+1}else{z=z};utc=cd.getTime()+(cd.getTimezoneOffset()*60000);"
						+"tz=new Date(utc + (3600000*z));thisy=tz.getFullYear();"
						+"var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday',"
						+"'Saturday'];if(thisy!=s.currentYear){return'Data Not Available'}else{;"
						+"thish=tz.getHours();thismin=tz.getMinutes();thisd=tz.getDay();"
						+"var dow=days[thisd];var ap='AM';var dt='Weekday';var mint='00';"
						+"if(thismin>30){mint='30'}if(thish>=12){ap='PM';thish=thish-12};"
						+"if (thish==0){thish=12};if(thisd==6||thisd==0){dt='Weekend'};"
						+"var timestring=thish+':'+mint+ap;if(t=='h'){return timestring}"
						+"if(t=='d'){return dow};if(t=='w'){return dt}}};");

						
						s.campstack=new Function("v","cn","ex","ct","dl","ev","dv",""
						+"var s=this,ce;if(typeof(dv)==='undefined')dv=0;if(s.events&&ev){var"
						+" ay=s.split(ev,',');var ea=s.split(s.events,',');for(var u=0;u<ay.l"
						+"ength;u++){for(var x=0;x<ea.length;x++){if(ay[u]==ea[x]){ce=1;}}}}i"
						+"f(!v||v==''){if(ce){s.c_w(cn,'');return'';}else return'';}v=escape("
						+"v);var arry=new Array(),a=new Array(),c=s.c_r(cn),g=0,h=new Array()"
						+";if(c&&c!='')arry=eval(c);var e=new Date();e.setFullYear(e.getFullY"
						+"ear()+5);if(dv==0&&arry.length>0&&arry[arry.length-1][0]==v)arry[ar"
						+"ry.length-1]=[v,new Date().getTime()];else arry[arry.length]=[v,new"
						+" Date().getTime()];var start=arry.length-ct<0?0:arry.length-ct;var "
						+"td=new Date();for(var x=start;x<arry.length;x++){var diff=Math.roun"
						+"d((td.getTime()-arry[x][1])/86400000);if(diff<ex){h[g]=unescape(arr"
						+"y[x][0]);a[g]=[arry[x][0],arry[x][1]];g++;}}var data=s.join(a,{deli"
						+"m:',',front:'[',back:']',wrap:\"'\"});s.c_w(cn,data,e);var r=s.join"
						+"(h,{delim:dl});if(ce)s.c_w(cn,'');return r;");

						
						s.getPreviousValue=new Function("v","c","el",""
						+"var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
						+"){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i"
						+"){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)"
						+":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?"
						+"s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");
						
						s.split=new Function("l","d",""
						+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
						+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

						
						s.getPercentPageViewed=new Function("",""
						+"var s=this;if(typeof(s.linkType)=='undefined'||s.linkType=='e'){var"
						+" v=s.c_r('s_ppv');s.c_w('s_ppv',0);return v;}");
						s.getPPVCalc=new Function("",""
						+"var s=s_c_il["+s._in+"],dh=Math.max(Math.max(s.d.body.scrollHeight,"
						+"s.d.documentElement.scrollHeight),Math.max(s.d.body.offsetHeight,s."
						+"d.documentElement.offsetHeight),Math.max(s.d.body.clientHeight,s.d."
						+"documentElement.clientHeight)),vph=s.wd.innerHeight||(s.d.documentE"
						+"lement.clientHeight||s.d.body.clientHeight),st=s.wd.pageYOffset||(s"
						+".wd.document.documentElement.scrollTop||s.wd.document.body.scrollTo"
						+"p),vh=st+vph,pv=Math.round(vh/dh*100),cp=s.c_r('s_ppv');if(pv>100){"
						+"s.c_w('s_ppv','');}else if(pv>cp){s.c_w('s_ppv',pv);}");
						s.getPPVSetup=new Function("",""
						+"var s=this;if(s.wd.addEventListener){s.wd.addEventListener('load',s"
						+".getPPVCalc,false);s.wd.addEventListener('scroll',s.getPPVCalc,fals"
						+"e);s.wd.addEventListener('resize',s.getPPVCalc,false);}else if(s.wd"
						+".attachEvent){s.wd.attachEvent('onload',s.getPPVCalc);s.wd.attachEv"
						+"ent('onscroll',s.getPPVCalc);s.wd.attachEvent('onresize',s.getPPVCa"
						+"lc);}");
						
						
						s.linkHandler=new Function("p","t",""
						+"var s=this,h=s.p_gh(),i,l;t=t?t:'o';if(!h||(s.linkType&&(h||s.linkN"
						+"ame)))return '';i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h."
						+"substring(0,i);l=s.pt(p,'|','p_gn',h.toLowerCase());if(l){s.linkNam"
						+"e=l=='[['?'':l;s.linkType=t;return h;}return '';");
						s.p_gn=new Function("t","h",""
						+"var i=t?t.indexOf('~'):-1,n,x;if(t&&h){n=i<0?'':t.substring(0,i);x="
						+"t.substring(i+1);if(h.indexOf(x.toLowerCase())>-1)return n?n:'[[';}"
						+"return 0;");
						
			            s.p_gh=new Function(""
			            +"var s=this;if(!s.eo&&!s.lnk)return '';var o=s.eo?s.eo:s.lnk,y=s.ot("
			            +"o),n=s.oid(o),x=o.s_oidt;if(s.eo&&o==s.eo){while(o&&!n&&y!='BODY'){"
			            +"o=o.parentElement?o.parentElement:o.parentNode;if(!o)return '';y=s."
			            +"ot(o);n=s.oid(o);x=o.s_oidt}}return o.href?o.href:'';");
			            
						s.trackTNT = function(v, p, b)
						{
						var s=this, n="s_tnt", p=(p)?p:n, v=(v)?v:n, r="",pm=false, b=(b)?b:true;
						if(s.getQueryParam)
						pm = s.getQueryParam(p); //grab the parameter
						if(pm)
						r += (pm + ","); // append the parameter
						if(s.wd[v] != undefined)
						r += s.wd[v]; // get the global variable
						if(b)
						s.wd[v] = ""; // Blank out the global variable for ajax requests
						return r;}
						s.getPPVSetup();

						s._jsmd_plugins_done=true;
					}
				return this.tmp=s;
				}
			}
		},
		tCase: function(arg) { 
			var rval=arg,i;
			switch(typeof(arg)) {
				case "string": rval=arg.toLowerCase(); break;
				case "object":
					for(i in arg) {
						if(typeof(arg[i])=="string") arg[i]=arg[i].toLowerCase();
					}
			}
			return rval;		// Case transformation function
		},
		tTrim: function(arg,addlRegexs) {
			if(!(arg!=null&&arg.length>0)||typeof(arg)==="object") {return arg;}
			var a=addlRegexs,rval=arg; 
			if(!addlRegexs) {
				a=[[/\s+/g," "],/^\s+/,/\s+$/];
			}
			var i=a.length,rstr="",r;
			while(i--) {
				rstr="";
				r=a[i];
				if(typeof(r.exec)==="undefined"){
					r=a[i][0];
					rstr=a[i][1];
				}
				rval=rval.replace(r,rstr);
			} 
			return rval;
			},
		tSub: function(arg,delimiter,i) { var r=""; try{r=arg.split(delimiter)[i];}catch(err) {}; return r;
		},
		tAll: "tCase|tTrim",	// The "tAll" transform is a special transform and will be applied to all functions automatically
		// Note, you can only have a single ALL function - multiple "all" functions are not supported.
		
		cookie: {
			
			get: function(k){var c=' '+document.cookie,s=c.indexOf(' '+k+'='),e=s<0?s:c.indexOf(';',s),v=s<0?'':c.substring(s+2+k.length,e<0?c.length:e);return unescape(v);},
			
			set: function(k,v,e,p,d){var exp=(typeof(e)=="object"?e:new Date((new Date().getTime())+(!e?0:e)*86400000));document.cookie=k+"="+escape(v)+(e!=null?"; expires="+exp.toGMTString():"")+"; path="+(!p?"/":p)+"; "+(d!=null?" domain="+d:"");}
		}

    },
    dynamic: {
        		
		actions: {
			"dynamic-link": function(data,map) {
				this.set("action","link");
				this.set("link",{name: data.link_name, type: "o"});
				this.map(map);
				this.send();
			},
			"dynamic-page": function(data,map) { 
				if( typeof(data['page-info']) != undefined && (data['page-info']) == "more results"){
					this.push("page.events");
				}else{
					this.push("page.events","slide.click");
				}
				this.send();
			},
			"flash-link": "alias:dynamic-link",
			"flash-page": "alias:dynamic-page",
			"video-link": "alias:dynamic-link",
			"video-page": "alias:dynamic-page",
			"video-common": function(data, map) {
				var v = data.video||{};
				var nvc = "no video collection";
				var video_collection = nvc;
				try {
					if (typeof v.video_collection != 'undefined' && v.video_collection != "") {
						video_collection = v.video_collection;
					}
					if (_w.CNN && typeof _w.CNN.omniture != 'undefined' && typeof _w.CNN.omniture.video_collection != 'undefined' && _w.CNN.omniture.video_collection != "") {
						if (video_collection == nvc) {
							video_collection = _w.CNN.omniture.video_collection;
						}
					}
					if (_w.location.pathname.match(/video\/collection\/./)) {
						var collection = /video\/collection\/(.+)/.exec(_w.location.pathname)[1].split("/")[1];
						if (video_collection == nvc && collection) {
							video_collection = collection;
						}
					}					
				} catch(e) {}
				this.set("business.mny.video.video_collection", video_collection);	//prop60,eVar60
			},
			"video-preroll": function(data, map) {
				var v = data.video||{};
				if (_w.cnnOmniture_prop24) {
					this.set("raw:business.mny.video.player",_w.cnnOmniture_prop24);	//prop16,eVar16
				} else if (_w.cnnOmniture_playername) {
					this.set("raw:business.mny.video.player",_w.cnnOmniture_playername);//prop16,eVar16
				} else if (v.cnnOmniture_prop24) {
					this.set("raw:business.mny.video.player",v.cnnOmniture_prop24);		//prop16,eVar16
				}
				this.set("raw:video.title",v.headline);		//prop29,eVar41
				this.set("raw:video.id",v.id);				//eVar42
				this.push("page.events","video.preroll");	//event35
				this.set("action","link");
				this.set("link",{name: "video-preroll: "+ v.headline, type: "o"});
				this.send();	//omniture
				sendComscoreVideoMetrixBeacon(v.id,2);		//comscore
			},
			"video-midroll": "alias:video-preroll",
			"video-postroll": "alias:video-preroll",
			"video-adcomplete": function(data, map) {
				var v = data.video || {};
			},
			"video-start": function(data, map) {
				var ct = _jsmd.plugin.gADBPContentType();
				var tt = this.get("page.template_type");
				if (!ct) { ct = "";} // if ct is undefined
				var v = data.video||{};
				var cid = data.instance||"";
				var vc = new _jsmd.plugin.gMONVideoCollection();
				var video_prop2 = this.get("raw:business.mny.section[0]");	//assign page prop1/eVar1 to temporary variable
				this.set("raw:business.mny.section[0]","Video");			//prop1,eVar1
				this.set("raw:business.mny.section[1]",video_prop2);		//prop2,eVar2
				if (_w.cnnOmniture_prop14) {
					this.set("raw:business.mny.source",_w.cnnOmniture_prop14);	//prop5,eVar5
				} else if (_w.cnnOmniture_source) {
					this.set("raw:business.mny.source",_w.cnnOmniture_source);	//prop5,eVar5
				}
				this.set("raw:business.mny.special_features",v.branding);	//prop8,eVar8
				if((!v.series) || (v.series == "") || (v.series == "none")) {
					this.set("raw:business.mny.video.series","no value set");//prop11,eVar11
				} else {
					this.set("raw:business.mny.video.series",v.series);		//prop11,eVar11
				}
				if (_w.cnnOmniture_prop24) {
					this.set("raw:business.mny.video.player",_w.cnnOmniture_prop24);	//prop16,eVar16
				} else if (_w.cnnOmniture_playername) {
					this.set("raw:business.mny.video.player",_w.cnnOmniture_playername);//prop16,eVar16
				} else if (v.cnnOmniture_prop24) {
					this.set("raw:business.mny.video.player",v.cnnOmniture_prop24);		//prop16,eVar16
				}
				if (v.trt) { this.set("business.mny.video.content_length",v.trt+""); }	//eVar20
				if (v.video_length) { this.set("business.mny.video.content_length",v.video_length+""); }	//eVar20
				var d = (v.dateCreated && v.dateCreated.text ? v.dateCreated.text : "");
				var p = (d != "" ? d.split("/") : "");
				if (p != "" && p[0].length != 4) { d = "20"+p[2]+"/"+p[0]+"/"+p[1]; }
				this.set("business.mny.video.publish_date",d);				//eVar51
				if (v.video_publish_date) { this.set("business.mny.video.publish_date",v.video_publish_date+""); }	//eVar51
				if(_w.cnnContentType === "article") {
					this.set("page.template_type", this.get("page.template_type"));		
				} else {
					this.set("page.template_type","adbp:video");				//prop32,eVar32
				}
				this.set("page.content_type","adbp:video start");			//prop33,eVar33
				this.set("raw:video.title",v.headline);						//prop29,eVar41
				this.set("raw:video.id",v.id);								//eVar42
				var starttype = "";				
				this.set("action","link");
				if (v.is_auto && v.is_auto == 1) {
					starttype = "editorial autostart";
					//if (_w.location.href.indexOf("money.cnn.com/video/") > -1) { starttype = "collection autostart"; }
					if (tt.indexOf("index") > -1) { starttype = "hp auto start"; }
					this.push("page.events","video.autostart");	//event34
					this.set("business.money.video_type",starttype); //prop70,eVar70 
					this.set("link",{name: "video-autostart: "+ v.headline, type: "o"});
				} else {
					starttype = "no autostart";
					if (_w.location.href.indexOf("money.cnn.com/video/") == -1 && ct.indexOf("article") == -1){ starttype = "no autostart";}
					this.set("link",{name: "video-start: "+ v.headline, type: "o"});
				}
				this.push("page.events","video.start");	//event32
				vc.start(cid,v.headline);
				this.send();	//omniture
				sendComscoreVideoMetrixBeacon(v.id,1);	//comscore
				sendNielsenVideoCensusBeacon(this.get("m:nielsen"),"start",v.id,v.headline);	//nielsen
				vc.set(cid,"vidStarted",true);
			},
			"video-fifty_percent": function(data,map) {
				var v = data.video||{};
				var cid = data.instance||"";
				var vc = new _jsmd.plugin.gMONVideoCollection();
				if (vc.get(cid,"pastHalf") == false && vc.get(cid,"hasScrubbed") == false) {
					var timeSpent = vc.progress(cid);
					timeSpent = _jsmd.plugin.capMONTimeSpent(timeSpent, v.trt);
					this.set("video.duration_watched",timeSpent+"");	//event36
					this.push("page.events","video.fifty_percent");		//event29
					var video_prop2 = this.get("raw:business.mny.section[0]");	//assign page prop1/eVar1 to temporary variable
					this.set("raw:business.mny.section[0]","Video");			//prop1,eVar1
					this.set("raw:business.mny.section[1]",video_prop2);		//prop2,eVar2
					if (_w.cnnOmniture_prop14) {
					this.set("raw:business.mny.source",_w.cnnOmniture_prop14);	//prop5,eVar5
					} else if (_w.cnnOmniture_source) {
						this.set("raw:business.mny.source",_w.cnnOmniture_source);	//prop5,eVar5
					}
					this.set("raw:business.mny.special_features",v.branding);	//prop8,eVar8
					if((!v.series) || (v.series == "") || (v.series == "none")) {
						this.set("raw:business.mny.video.series","no value set");//prop11,eVar11
					} else {
						this.set("raw:business.mny.video.series",v.series);		//prop11,eVar11
					}
					if (_w.cnnOmniture_prop24) {
						this.set("raw:business.mny.video.player",_w.cnnOmniture_prop24);	//prop16,eVar16
					} else if (_w.cnnOmniture_playername) {
						this.set("raw:business.mny.video.player",_w.cnnOmniture_playername);//prop16,eVar16
					} else if (v.cnnOmniture_prop24) {
						this.set("raw:business.mny.video.player",v.cnnOmniture_prop24);		//prop16,eVar16
					}
					this.set("page.content_type","adbp:video start");			//prop33,eVar33
					this.set("action","link");
					this.set("link",{name: "video-fifty_percent: " + v.headline, type: "o"});
					this.send();	//omniture
					vc.set(cid,"pastHalf",true);
				}
			},
			"video-pause": function(data, map) {
				var v = data.video||{};
				var cid = data.instance||"";
				var paused;
				if(typeof(data.video.paused) == "undefined"){
					paused =false;
				}else{
					paused = data.video.paused;
				}
				var vc = new _jsmd.plugin.gMONVideoCollection();
				var previousPaused = vc.get(cid,"isPaused");
				if(paused != previousPaused){
					vc.pause(cid);
				}
			},
			"video-buffer": function(data, map) {
				var v = data.video||{};
				var cid = data.instance||"";
				var buffering;
				if(typeof(data.video.buffering) == "undefined"){
					buffering =false;
				}else{
					buffering = data.video.buffering;
				}
				var vc = new _jsmd.plugin.gMONVideoCollection();
				var previousBuffering = vc.get(cid,"isBuffering");
				if(buffering != previousBuffering){
				vc.buffer(cid);
				}
			},
			"video-scrub": function(data, map) {
				var v = data.video||{};
				var cid = data.instance||"";
				var vc = new _jsmd.plugin.gMONVideoCollection();
				if (vc.get(cid,"vidStarted") == true) { vc.set(cid,"hasScrubbed",true); }
			},
			"video-complete": function(data, map) {
				var v = data.video||{};
				var cid = data.instance||"";
				var vc = new _jsmd.plugin.gMONVideoCollection();
				var timeSpent = vc.complete(cid);
				timeSpent = _jsmd.plugin.capMONTimeSpent(timeSpent, v.trt);
				this.set("video.duration_watched",timeSpent+"");	//event36
				this.push("page.events","video.complete");			//event33
				var video_prop2 = this.get("raw:business.mny.section[0]");	//assign page prop1/eVar1 to temporary variable
				this.set("raw:business.mny.section[0]","Video");			//prop1,eVar1
				this.set("raw:business.mny.section[1]",video_prop2);		//prop2,eVar2
				this.set("raw:business.mny.special_features",v.branding);	//prop8,eVar8
				if((!v.series) || (v.series == "") || (v.series == "none")) {
						this.set("raw:business.mny.video.series","no value set");//prop11,eVar11
					} else {
						this.set("raw:business.mny.video.series",v.series);		//prop11,eVar11
				}
				this.set("action","link");
				this.set("link",{name: "video-complete: "+ v.headline, type: "o"});
				this.send();	//omniture
				sendNielsenVideoCensusBeacon(this.get("m:nielsen"),"complete",v.id,v.headline,timeSpent);	//nielsen
				this.set(cid,"vidStarted",false);
				this.set(cid,"hasScrubbed",false);
				this.set(cid,"isPaused",false);
				this.set(cid,"isBuffering",false);
				this.set(cid,"pastHalf",false);
		    },
			"seeAll-click": function(data,map) {
				var sa = data.seeAllObj||{};
				this.set("business.mny.page.see_all",sa.seeAllValue);
				this.set("action","link");
				this.set("link",{name: "Best Places to Live 2013: " + sa.action, type: "o"});
				this.push("page.events","see_all.click");	//event69
				this.send();
			},
			"social-click": function(data,map) {
				if(data.clickObj){
					var co = data.clickObj||{};
				}else{
					var co = data||{};
				}
				this.set("action","link");
				this.set("link",{name: "click-interaction: " + co.socialType, type: "o"});
				this.set("business.mny.page.clickType",co.socialType);
				if (co.pageName) {	//reformat URL to remove domain and query string and hash
					var p = co.pageName.toLowerCase();
					p = p.replace(/^.*\/\/[^\/]+/,"");	//remove domain
					p = p.split("?")[0].split("#")[0];	//remove query string and hash
					var a = p.split('/');
					var l = a.length;
					var r = /^index./;
					var pathname = (r.test(a[(l-1)])) ? p.replace(/([^\/]+\.[^\/]+$)/,"") : p;
					r = /([^\/]+\.[^\/]+$)/;
					if (!r.test(pathname)){
						l = pathname.length;
						if(pathname.charAt(l-1) !== "/"){pathname = pathname+"/";}
					}
					co.pageName = pathname;
				}
				this.set("page.name",this.plugin.gADBPPageName(co.pageName));
				this.push("page.events","click.interaction");
				this.send();
			},
			"gallerySlideClick": function(){
				var regx = /\w+\/\d+.html/;
					if(regx.test(_w.location.href) ){
						this.push("page.events","slide.click");
						this.send();    //omniture
					}
			},
			"search-results" : function(data,map) {
				if (typeof data.search_results_count != "undefined") {
					this.set("search.internal.number_results", data.search_results_count + "");
				}
				if (typeof data.search_results_page != "undefined" && data.search_results_page == "1") {
					this.push("page.events","search.results");
				}
				this.send();
			},
			"user-interaction": function(data, map){
				if(data.interactionType && data.interactionType == "cnn_badge"){
					this.set("promo.internal.id",data.interactionType);
				}
				this.send();
			}
		},

		load: function(data) {
			window.tcm_metadata=data;
			window.tcm_metadata.business=window.tcm_metadata.business||data;
		}

    },
    postSend: function() {
        	//do nothing

    }
};

var _jsmd = function() {
	var _w=window;
	
	var prvVersion=_jsmd_default.version||"ADBP-VANILLA";
	var prvRelease=_jsmd_default.release||"ERR",ver=prvVersion+":"+prvRelease;
	if(_jsmd_default.dictionary!=null) {_jsmd_default.dictionary.init["code.version"]=ver;}
	
	var prvDefaultMetadataDictionaryTemplate=_jsmd_default.dictionary|| { 
		init: {
			"business.name":					"turner",					//prop30,eVar30
			"business.lob":						"general",		//hier1
			"business.brand":					"turner",					//hier1
			"page.clean_url":					"raw:gADBPURL|",		//prop26
			"page.domain":						"raw:gADBPURL|domain",	//server,eVar29
			"page.name":						"raw:gADBPPageName|",	//pageName,eVar26
			"page.section[0]":					"raw:gADBPURL|path,1",
			"page.section[1]":					"raw:gADBPURL|path,2",
			"time.hour":						"raw:gADBPTimePart|h",	//prop40,eVar40
			"time.dow":							"gADBPTimePart|d",		//prop40,eVar40
			"time.weekpart":					"gADBPTimePart|w",		//prop40,eVar40
			"page.full_url":					_w.location.href,
			"page.template_type":				"adbp:error",
			"code.version":						prvVersion+":"+prvRelease	//prop35 - do not alter
		}
	};
	
	var prvDefaultVendorMapTemplate=_jsmd_default.map || { 
		"turner": {
			vendors: [
				{
					name:			"Adobe SiteCatalyst H-code",
					account:		"adbp",
					settings:		"adbp",
					variablemap:	"adbp",
					eventmap:		"adbp"
				}
			],
			adbp: {
				account: function() {
					return "turnererrors";
				},
				settings: {
					"trackInlineStats":			true,
					"linkLeaveQueryString":		false
				},
				variablemap: {
					"m:page.name":						["pageName","eVar26"],
					"m:page.section[0]":				["channel","eVar27"],
					"m:page.domain":					["server","eVar29"],
					"m:page.clean_url":					["prop26"],
					"m:search.internal.number_results":	["prop27"],
					"m:page.section[1]":				["prop28","eVar28"],
					"m:video.title":					["prop29","eVar41"],
					"m:business.name":					["prop30","eVar30"],
					"m:page.franchise":					["prop31","eVar31"],
					"m:page.template_type":				["prop32","eVar32"],
					"m:page.content_type":				["prop33","eVar33"],
					"m:user.authenticated":				["prop34","eVar34"],
					"m:user.segment":					["prop36","eVar36"],
					"m:time":							["prop40","eVar40"],
					"m:video.id":						["eVar42"],
					"m:promo.internal.id":				["eVar43"],
					"m:promo.internal.implied":			["eVar48"],				//Campaign Stacking (SEO Driven)
					"m:promo.external.id":				["campaign"],			//Marketing/External Campaigns
					"m:code.version":					["prop35"],
					"m:business.lob|m:business.brand|m:business.friendly_name|m:page.domain|m:page.section[0]|m:page.section[1]":	["hier1"],
					"delimiter":						"|"
				},
				eventmap: {
					"m:page.name":				["event26"],
					"page.view":				["event26"],		
					"search.internal.keyword":	["event27"],		
					"registration.complete":	["event28"],
					"product.view":				["prodView"],
					"product.multiview":		["prodView"],
					"cart.add":					["scAdd"],
					"cart.new":					["scOpen"],
					"checkout.start":			["scCheckout"],
					"checkout.name_address":	["event13"],
					"checkout.validate":		["event14"],
					"purchase.complete":		["purchase"],
					"checkout.validate":		["event14"],
					"promo.internal.id":		["event31"],							
					"video.start":				["event32"],
					"video.complete":			["event33"],
					"video.autostart":			["event34"],
					"ad.start.preroll":			["event35"],
					"user.login":				["event37"],
					"blog.read":				["event38"],		
					"article.read":				["event39"]			
				}
			}
		}
	};
	
	var prvDefaultVendorSpecificTemplate;	// Leave null to use the default version
	
	
	
	
	var pubDefaultMetadataUtilities=_jsmd_default.plugins;
	
	
	
	prvDefaultVendorSpecificTemplate=_jsmd_default.vendor||{
		"Nielsen Hybrid Light Code": {
			delimiter: ":",
			initialize: function(accountf,vendorAction) {
				var a=accountf,o,va=this.get("action"),vc=this.config.vendor;
				if(typeof(accountf)=="function") {a=accountf.call(this)||"IGNORE";}
				vc.action.push([NielsenHybridTag,"push_nielsen",[a]]);
				return o;
	
			},
			destroy: function(vendorObject) {
			}
		  },
		"Adobe SiteCatalyst H-code": {
			delimiter: ":",
			initialize: function(accountf,vendorAction) {
	 			var a=accountf,o,va=this.get("action"),vc=this.config.vendor;
				if(typeof(accountf)=="function") {a=accountf.call(this)||"IGNORE";}
				o=s_gi(a);
				delete o.pageName;
				if(va==="link") {
					var lnk=this.get("link");
					var t=lnk.type,n=lnk.name;
					t=(t==="download"?"d":(t==="exit"?"e":"o"));
					n=(!n?"defaultlink:"+t+":"+_w.location.pathname:n);
					vc.action.push([o,"tl",[true,t,n]]);
				} else {
					events="event26"; // Default ADBP page view standard event
					vc.action.push([o,"t",[]]);
				}
				o.doPlugins=function() { 
					// vendor specific plug-in goes here (ex. eVar48,eVar49,eVar50)
					// contact Mark Stringham at adobe for plug-in
					// mstringh@adobe.com, 801-722-7000 x1208
					
					// only eVar48 (Campaign Stacking) needed for CNN Money
					// ask for cross visit participation visit plug-in
				};
				
				o.products=null;
				return o;
			},
			destroy: function(vendorObject) {
				var unsetList=vendorObject._jsmd.unset_list;
				for(var i=unsetList.length-1;i>=0;i--) { vendorObject[unsetList[i]]="";} // Necessary to remove all previously defined values at the end of the call
				vendorObject.events="";
				vendorObject.products="";
			},
			setEvent: function(obj,key,value) {
				if(!value||!key) return;
				var e=(obj.events&&obj.events.length>0?obj.events.split(","):[]); // Use a null event list if not already defined
				var k=(typeof(key)=="object"?key:[key]);
				for(var i=k.length-1;i>=0;i--) {
					var addEvent = 1;
					for(var j=e.length-1;j>=0;j--) {	//check to make sure the new event doesn't exist in the current list of events
						if(e[j]==k[i]){ addEvent = 0; }
					}
					if(addEvent==1) {
						e.push(k[i]);
						var v1=parseFloat(value);
						if (/[a-zA-Z]/.test(value)) { v1 = value; }	//if "value" contains a letter, don't set the products string
						if(v1!=null&&typeof(v1)=="number"&&v1>0) {
							obj.products=";;;;"+k[i]+"="+value;
						}
					}
				}
				obj.events=e.join(",");
			},
			setProducts: function(obj,productmd) {
				var MAXPRODUCTS=10;
				if(!productmd||(!productmd.list)) return;
				var lst=productmd.list,dim=productmd.dimensions,p=[],tmp,tl,missprod="Missing Product",i;
				if(obj.products!=null) {
					p=obj.products.split(",");
				}
				m=obj["client:merchandising_map"],re=/[\;\\,\|]+/g,rchar="-";
				for(var i=0;i<lst.length&&i<MAXPRODUCTS;i++) {
					tl=lst[i];
					tmp=[(!tl.category?"":tl.category.replace(re,rchar)),(!tl.id?missprod:tl.id.replace(re,rchar))];					
					if(tl.quantity!=null&&tl.total_price!=null) {
						tmp[2]=tl.quantity;
						tmp[3]=tl.total_price;
					}
					if(dim!=null&&m!=null) {
						tmp2=[];
						for(var j=m.length-1;j>=0;j--) {
							var subkey=m[j][0],subval=m[j][1];
							for(var k=dim.length-1;j>=0;j--) {
								var lookup=dim[k][subkey];
								if(lookup!=null) {
									tmp2[k]=subval + "=" + lookup.replace(re,rchar);
								}
							}													
						}
						tmp[5]=tmp2.join("|");
					}
					p.push(tmp.join(";"));
				}
				for(i=p.length-1;i>=0;i--) {
					if(p[i].length<7) {
						p.splice(i,1);
					} 
				}
				obj.products=p.join(",");
			},
			setVariable: function(obj,key,value,unsetList) {
				if(!value||value.length==0) { return;}
				function inLookupDynamicShorthand(key) {
					var shorthand=key.split("eVar").join("v").split("prop").join("c").split("channel").join("ch");
					if(shorthand==="pageName") return "pageName";
					return (shorthand!==key?shorthand:null);
				}
				if(typeof(key)=="string") {obj[key]=value;}
				else {
					var l=key.length,i,k,shorthand=inLookupDynamicShorthand(key[0]);
					for(i=0;i<l;i++) {
						k=key[i];
						if(value!=null) {
							if(i>0&&shorthand!=null) {obj[k]="D="+shorthand;}
							else {obj[k]=value; if("pageName".indexOf(k)==-1){unsetList.push(k);}}
						}
					}
				}
			}
		}
	};
	// Class Definitions
	function CAnalyticsObject(initObj,mapObj,vendorObj) {
		var me=this;
		me.version=prvVersion;
		me.mdata={};
		me.config={};
		me.config.init=initObj.init||prvDefaultMetadataDictionaryTemplate.init;
		me.config.map=mapObj||prvDefaultVendorMapTemplate;
		me.config.vendor=vendorObj||prvDefaultVendorSpecificTemplate;
		me.plugin=initObj.plugin||pubDefaultMetadataUtilities;
		me.init();
	}
	// Public methods
	CAnalyticsObject.prototype.init=function(){
		var i=this.config.init,j,p=this.plugin;
		if(p) {
			if(p.tAll) {
				j=p.tAll.split("|");p.tF=[];var k,t,l=j.length;
				for(k=0;k<l;k++) {t=j[k];if(p[t]){p.tF.push(p[t]);}}
			}
		}
		if(i!=null) {
			if(typeof(i.preinit)=="function") i.preinit.call(this);
			if(i!=null) {
				for(j in i) { this.set(j,i[j]); }
			}
			if(typeof(i.postinit)=="function") i.postinit.call(this);
		}
	 };
	CAnalyticsObject.prototype.get=function(n){ 
		var rval=[],prefix=n.split(":")[0],bname=null,t=n, reUnsafe,i,tarray=(n.indexOf("|")!=-1?n.split("|"):[n]);//,re=/[^\w\.\[\]\{\}\:\-\(\)]+/g;
		for(i=0;i<tarray.length;i++) {
			n=tarray[i];
			try {
				switch(prefix) {
					case "js": t=n.replace("js:",""); break;
					case "mb": t=n.replace("mb:","this.mdata.business."+this.mdata.business["name"]+"."); break;
					default: t="this.mdata."+n.replace(prefix+":",""); break; // Primary for JS literals
				}
				rval.push(eval((!reUnsafe?t:t.replace(reUnsafe,""))));
			} catch(err) {}
		}
		return (rval.length>0?(rval.length==1?rval[0]:rval):null);
	};
	CAnalyticsObject.prototype.getnn=function(n){var a=this.get(n); return (!a?"":a);};
	CAnalyticsObject.prototype.set=function(n,v) { return (n==="preinit"||n==="postinit"?null:prvSetCommonFunction.call(this,n,v,"set")); };
	CAnalyticsObject.prototype.push=function(n,v) { return (n==="preinit"||n==="postinit"?null:prvSetCommonFunction.call(this,n,v,"push"));};
	CAnalyticsObject.prototype.load=function(v) {if(_jsmd_default.dynamic!=null&&typeof(_jsmd_default.dynamic.load)=="function"){
													_jsmd_default.dynamic.load.call(this,v);} 
												else {this.mdata=v;} };	
	CAnalyticsObject.prototype.trackMetrics=function(action,data,map) {
		var defaultDynamicNS=(!_jsmd_default.dynamic?{}:_jsmd_default.dynamic.actions);
			var act=defaultDynamicNS[action];
			var t=action.split("-");
			var c="";
			if(t.length > 0){
				t.pop();
				c = t.join("-");
			}
			var common=defaultDynamicNS[c+"-common"];
			if(typeof(act)=="string"&&act.indexOf("alias:")==0) {act=defaultDynamicNS[act.split("alias:")[1]];}
			this.config.map.isDynamic=action;
			try {
				if(typeof(common)=="function") {
					common.call(this,data,map);
				}
				act.call(this,data,map);
			} catch(e) {}
			this.config.map.isDynamic=false;
	};
	Object.jsmdArraySize = function(jsmdVendorObj) {
		var jsmdArraySize = 0, key;
		for (key in jsmdVendorObj) {
        if (jsmdVendorObj.hasOwnProperty(key)) jsmdArraySize++;
		}
		return jsmdArraySize;
    };


	CAnalyticsObject.prototype.map=function(mapObj) {
		if(mapObj) {mapObj.dirty=1; this.config.map=mapObj;}
		var me=this,v1,v2,b1,m=this.config.map; // Used for inner-function references to the object

		if(m.dirty!=0) {
			this.config.vendor.action=[];
			for(v1 in m) {
				v2=m[v1];
				var va = (v2.vendors)?new arrayExtender(v2.vendors):null;
				if(va&&typeof(va.forEach)=="function") {
				if((navigator.appVersion.indexOf("Trident/4.0")!=-1)){ //For IE8
				var jsmdArraySize = Object.jsmdArraySize(va);
				for(var i=0;i<jsmdArraySize;i++){
				inDoVendorInitialize(va[i]);
				}
				}
				else{
				va.forEach(inDoVendorInitialize);
				}
				}
			}
			m.dirty=0;
		};
		function inDoVendorInitialize(map) {
			// Vendor mapping / instantiation logic
			// Do prevendor if defined
			var vendorLogic=me.config.vendor,n=map.name;
			if(!vendorLogic[n]){return;}
			var vendorInstantiate=vendorLogic[n].initialize,pre=map.prevendor,post=map.postvendor,acctKeys=map.account,emapKeys=map.eventmap,
				cmapKeys=map.settings,vmapKeys=map.variablemap,delimiter=v2.delimiter,dynamicFunctionCall=me.config.map.isDynamic;
			if(dynamicFunctionCall!=null && dynamicFunctionCall && map.dynamic_actions!=null) {
				var z,y,al=map.dynamic_actions,al2;
				for(z in al) {
					if(dynamicFunctionCall.indexOf(z)!=-1) {
						al2=al[z];
						cmapKeys=al2.settings||cmapKeys;
						vmapKeys=al2.variablemap||vmapKeys;
						emapKeys=al2.eventmap||emapKeys;
						acctKeys=al2.account||acctKeys;	
						pre=al2.prevendor||pre;
						post=al2.postvendor||post;
						if(al2.ignore!=null) {return;}			
					}
				}
			}
			if(!acctKeys&&!v2[acctKeys]) return; // Avoid null account error
			var accts=v2[acctKeys].account,premap=v2[acctKeys].premap,postmap=v2[acctKeys].postmap;
			if(typeof(pre)=="function") {pre.call(me,map);} // Do pre-Vendor ETL & Logic if defined.
			// Instantiate vendor objects listed in the vendor definitions of the map object
			if(typeof(vendorInstantiate)=="function" && typeof(accts)=="function") {
				vObj=vendorInstantiate.call(me,accts);
				me.v=vObj;
				// Do premap ETL / Logic if defined
				var i,t,mapBlock;
				if(premap&&premap.call) { premap.call(me);}
				if(cmapKeys!=null) {
				// Map all settings
				for(i=0;i<cmapKeys.length;i++) {mapBlock=v2[cmapKeys[i]]; if(mapBlock&&mapBlock.settings){inDoMap.call(me,"settings",mapBlock.settings);}}
				}
				if(vmapKeys!=null) {
				// Map all variables
				for(i=0;i<vmapKeys.length;i++) {mapBlock=v2[vmapKeys[i]]; if(mapBlock&&mapBlock.variablemap){inDoMap.call(me,"variables",mapBlock.variablemap);}}
				}
				if(emapKeys!=null) {
				// Map all events
				for(i=0;i<emapKeys.length;i++) {mapBlock=v2[emapKeys[i]]; if(mapBlock&&mapBlock.eventmap){inDoMap.call(me,"events",mapBlock.eventmap);}}
				}
				// Do Products mapping
				if(typeof(vendorLogic[n].setProducts)=="function") {vendorLogic[n].setProducts.call(me,vObj,me.mdata.product);}
				// Do postmap if defined
				if(postmap&&postmap.call) { postmap.call(me);} // Do post-map ETL & Logic if defined
			}
			if(post&&post.call) { post.call(me,map);} // Do postvendor if defined
			delete me.v;
			function inDoMap(mapType,mapObj) {
				var me=this,i,vl=vendorLogic[n], // Shortcut to vendor logic array
					setv=vl.setVariable,  // reference to the vendor-specific setVariable function, if it exists
					sete=vl.setEvent,		// reference to the vendor-specific setEvent function, if it exists
					setc=vl.setConfig,		// Reference to the vendor-specific setConfig function, if it exists
					v=vObj,								// Shortcut to the vendor Object itsets
					inclusion=null,exclusion=null,					// Used during dynamic function calls to filter / exclude mappings
					doFilteredSettings=false,								// No filtering on settings by default
					delim=mapObj.delimiter||delimiter||vl.delimiter;	// Default delimiter - we use either the mapObject-defined delimiter, or the previously defined delimiter, or the vendor-specific delimiter, whichever is defined first	
				if(dynamicFunctionCall!=null&&typeof(dynamicFunctionCall)=="string") {
					var tl1=mapBlock["filters"],tl2;
					if((tl2=(tl1!=null&&tl1[dynamicFunctionCall]!=null?tl1[dynamicFunctionCall]:null))!=null) {
											inclusion=tl2["include"];
											exclusion=tl2["exclude"];
											doFilteredSettings=tl2["do-settings"];
					}				
				}
				if(!v._jsmd) {
					v._jsmd={unset_list:[]};  // Setup an array to hold all variables that have been set.  This is used to "clear" variables once the object is destroyed
					if(vl.destroy!=null) {v._jsmd.destroy=vl.destroy;} // Shortcut to vendor object destructor, if defined
				} 
				var set=function(f,lookupType){									// Inner setter function that calls the vendor-specific set functions
					var i,m=mapObj,res,dof=(typeof(lookupType)=="function"),skip,matchi,matche,i2;			// m is the map Object defined in the earlier scope.  It will be iterated through entirely.  dof is the do-function check flag, to determine if we should call the function or just set the value.
					var doFilterSettingsCheck=(f!==setc||(f===setc&&doFilteredSettings==true))&&(inclusion!=null||exclusion!=null);
					for(i in m){
						skip=false;
						if(doFilterSettingsCheck){	
							matche=false; matchi=false;
							if(typeof(inclusion)=="object") {
								for(i2=inclusion.length;i2>=0;i2--) {matchi=matchi||(i.indexOf(inclusion[i2])!=-1?true:false);}
							} else {
								matchi=(inclusion!=null&&i.indexOf(inclusion)!=-1?true:false);
							}
							if(typeof(exclusion)=="object") {
								for(i2=exclusion.length;i2>=0;i2--) {matche=matche||(i.indexOf(exclusion[i2])!=-1?true:false);}
							} else {
								matche=(exclusion!=null&&i.indexOf(exclusion)!=-1?true:false);
							}
							skip=(matchi==false)||(matche==true);
						}
						if(!skip&&(res=(dof?lookupType(i):i))!=null&&typeof(m[i])!="function"){	// Lookup the actual metadata value that we iterate through (if it's an actual metadata value - if it's an actual value, just use it without the lookup)
							f.call(me,v,m[i],res,v._jsmd.unset_list);}								// Once we have the metadata value (or literal value), call the vendor-specific logic to set the value at a vendor level
					}
				};
				sete=(!sete?setv:sete); setc=(!setc?function(vo,k,v){return setv(vo,v,k);}:setc);delim=(!delim?":":delim);  // Default setter logic.  Basically used in the event that we don't have vendor-specific setters defined
				if(mapType==="settings" && typeof(setc)=="function") {			// Do actions for the "settings" map block
					set(setc,true);												// Iterate through each setting & set it in teh vendor-specific object
				}
				if(mapType==="variables" && typeof(setv)=="function") {			// Do actions for the "variables" map block
					set(setv,inLookupValue);									// Iterate through each variable definition and set it in the vendor-specific logic
				}
				if(mapType==="events" && typeof(sete)=="function") {			// Do actions for the "events" map block.
					set(sete,inLookupEventValue);								// Iterate thorugh each variable definition and set it using the vendor-specific logic
				};
				function inLookupEventValue(v) {
					var e=new arrayExtender(me.mdata.page.events),getChk=me.get(v),rval=null;
					if((e!=null&&e.contains(v))) {rval=v;}
					//if(getChk!=null) {rval=(v.indexOf("v:")==0?getChk:v);}	// If the actual metadata lookup value begins with a "v:", then return the actual value, otherwise return the event number specified.
					if(getChk!=null) {rval=getChk;}
					return rval;												 // Return the actual event value if it's defined.
				}
				function inLookupValue(v) {
					var rval=v,i,t;												// Setup values - rval is the return value, everthing else is temporary or iterator variabes
					rval=me.get(v);												// Get the value being looked up from the metadata getter function
					if(rval!=null&&typeof(rval)=="object") {					// See if it's an object
						if(!rval.join) {										// If it's an object, see if it supports join
							t=[];for (i in rval) {t.push(rval[i]);}				// If not, then proxy our own join function
							rval=t;
						}
						rval=rval.join(delim);									// Use join with whatever the default delimiter is to serialze the value 
					}
					return rval;												// Return the looked-up metadata dictionary value
				};
			}
		};
	};
	CAnalyticsObject.prototype.send=function(mapObj) {
		this.map(mapObj);
		// Do the vendor-specific send command for all vendor objects		
		var action=this.config.vendor.action,l=action.length,args,f,vo;
		while(l--){ 
			vo=action[l][0];f=action[l][1];args=action[l][2];
			if(vo && vo[f].apply) { 
				try {
					vo[f].apply(vo,args); // Send the vendor-specific analytics beacon or function 
					if(vo._jsmd.destroy!=null) {vo._jsmd.destroy(vo); vo._jsmd=null;} // If a destructor function exists, do it and clear the setter list
					if(_jsmd_default != null && _jsmd_default.postSend != null){_jsmd_default.postSend();} // Call the postSend function if it exists
				} catch(err){}
			}
		}
	};

	// Privledged Methods (hidden, but common to all class methods & module functions.  When calling from within an instance method, you must use the "call" syntax)
	function prvSetCommonFunction(n,v,type) {
		var me=this,israw=(typeof(v)=="string"&&v.indexOf("raw:")==0?true:false);
		if(n.indexOf("raw:")==0) {n=n.substr(4); israw=true;}
		me.config.map.dirty=1;
		function inDefaultTransforms(v) {
			var plug=me.plugin,defF=new arrayExtender(plug.tF),rval=v;
			try{
				if(typeof(defF)=="object"){rval=defF.dosequential(plug,rval);}
				if(typeof(defF)=="function"){rval=defF.call(plug,rval);}
			}catch(e){}
			return rval;
		}
		function inTranslatePluginValues(v) {
			var rval=null,plug=me.plugin,pA=v.split("|"),t=pA[0].split("raw:"),israw=(t.length>1?true:false),f;
			pA[0]=(!israw?pA[0]:t[1]); 
			if(pA[1]&&pA[1].indexOf(",")!=-1) {t=pA.pop(); pA=pA.concat(t.split(","));}
			try {
				f=pA.splice(0,1)[0];
				if(typeof(plug[f])=="function") {
					plug.md=me;
					rval=plug[f].apply(plug,pA);
				}
			} catch(err) {}
			return rval;
		}
		n=(n.indexOf("m:")==0||n.indexOf("v:")==0?n.substr(2):n);
		if(n.indexOf("mb:")==0) {n="business."+this.get("business.name")+"."+n.substr(2);}
		var narray=n.split("."),nlast,i,vfinal,last=me.mdata,t1,z,are=/([^\[]+)\[(\d+)\]/;
		if(typeof(v)=="object") { vfinal=v;}
		if(typeof(v)=="function") { vfinal=v.call(me);}
		if(typeof(v)=="string") { vfinal=(v!=null&&v.indexOf!=null&&("gt".indexOf(v.substr(0,1))!=-1||v.indexOf("raw:")==0)&&v.indexOf("|")!=-1?inTranslatePluginValues(v):v) ;}		
		vfinal=(!israw?inDefaultTransforms(vfinal):vfinal);
		type=(!type?"set":type);
		nlast=narray[narray.length-1];
		last=me.mdata; z=narray.length-1;
		for(i=0;i<z;i++) {
			t1=narray[i];a=are.exec(t1);
			if(a) {
				var a1=a[1],a2=a[2];
				if(!last[a1]) {last[a1]=[];}
				t1=a2; last=last[a1];
			}
			if(!last[t1]) {last[t1]={};}
			last=last[t1];
		}
		a=are.exec(nlast);
		if(!a) {
			if(type==="set") last[nlast]=vfinal;
			else {
				if(!(last[nlast]!=null&&typeof(last[nlast].push)=="function")) {last[nlast]=[];}
				last[nlast].push(vfinal);
			}
		} else {
			if(!last[a[1]]) last[a[1]]=[];
			last[a[1]][a[2]]=vfinal;
			return vfinal;
		}
		return last[nlast];
	};


	
	arrayExtender.prototype = new Array();
	
	function arrayExtender(a){
		try{
			this.push.apply(this, a);
			return this;
		}catch(e){
			var err = e;
			return a;
		}
	}

	arrayExtender.prototype.forEach = (function(){
		var forEachFunction = function(f,tObj){
			var l=this.length,i;
			if((navigator.appVersion.indexOf("MSIE 7.")!=-1)){
				if(l == 0){
					try{
						l = 0;
						for(var p in this){
							var pName = p+"";
							if(!isNaN(parseInt(pName))){
								l+=1;
							}
						}
					}catch(e){}
				}
			}
			else if((navigator.appVersion.indexOf("MSIE 8.")!=-1)) {
				try {
					var compatMode = _jsmd.plugin.gIreportgetMetaCompatible("IE=EmulateIE7");
					if((compatMode && compatMode.indexOf("EmulateIE7")!=-1)){
						if(l == 0){
							try{
								l = 0;
								for(var p in this){
									var pName = p+"";
									if(!isNaN(parseInt(pName))){
										l+=1;
									}
								}
							}catch(e){}
						}
					}
				} catch(e) {}
			}
			
			if(typeof f=="function"){
				for(i=0;i<l;i++){
					if(i in this){
						f.call(tObj,this[i],i,this);
					}
				}
			}
		};
		
	 	if((navigator.appVersion.indexOf("MSIE 7.")==-1)){
	 		return Array.prototype.forEach||forEachFunction;
		}else { return forEachFunction; }
	 })();
	
	arrayExtender.prototype.contains = Array.prototype.contains||function(obj){
		var i=this.length;
		if((navigator.appVersion.indexOf("MSIE 7.")!=-1)){
			if(i == 0 || !i){
				try{
					i = 0;
					for(var p in this){
						var pName = p+"";
						i+=1;
					}
				}catch(e){}
			}
		}
		else if((navigator.appVersion.indexOf("MSIE 8.")!=-1)) {
			try {
				var compatMode = _jsmd.plugin.gIreportgetMetaCompatible("IE=EmulateIE7");
				if((compatMode && compatMode.indexOf("EmulateIE7")!=-1)) {
					if(i == 0 || !i){
						try{
							i = 0;
							for(var p in this){
								var pName = p+"";
								i+=1;
							}
						}catch(e){}
					}
				}
			} catch(e) {}
		}
		while(i--){
			if(this[i]===obj){return true;}
		}
		return false;
	};
	
	arrayExtender.prototype.dosequential=function(o,val) {
		var rval=val,l=this.length;
		if((navigator.appVersion.indexOf("MSIE 7.")!=-1)){
			if(l == 0 || !l){
				try{
					l = 0;
					for(var p in this){
						var pName = p+"";
						l+=1;
					}
				}catch(e){}
			}
		}
		else if((navigator.appVersion.indexOf("MSIE 8.")!=-1)) {
			try {
				var compatMode = _jsmd.plugin.gIreportgetMetaCompatible("IE=EmulateIE7");
				if((compatMode && compatMode.indexOf("EmulateIE7")!=-1)) {
					if(l == 0 || !l){
						try{
							l = 0;
							for(var p in this){
								var pName = p+"";
								l+=1;
							}
						}catch(e){}
					}
				}
			} catch(e) {}
		}
		for (i=0;i<l;i++) {if(typeof(this[i])=="function"){rval=this[i].call(o,rval);}}
		return rval;
	};
	
	
	Function.prototype.jsmdBind = function(scope) {
	  var _function = this;
	  
	  return function() {
	    return _function.apply(scope, arguments);
	  }
	}
	
	
	var prvLastObject=null;
	function prvReturnLastObject(){return prvLastObject;}
	
	function publicInitialize(initObject, mapObject,vendorObject) {
		var io=_w._jsmdDefaultMetadataDictionaryTemplate||prvDefaultMetadataDictionaryTemplate,
			mo=_w._jsmdDefaultVendorMapTemplate||prvDefaultVendorMapTemplate,
			vo=_w._jsmdDefaultVendorSpecificTemplate||prvDefaultVendorSpecificTemplate;
		io=(!initObject?io:initObject);
		mo=(!mapObject?mo:mapObject);
		vo=(!vendorObject?vo:vendorObject);
		prvLastObject=new CAnalyticsObject(io,mo,vo);
		return prvLastObject;
	}
	
	
	_w.JSON=window.JSON||null;
	if(!_w.JSON){_w.JSON={}}
	(function(){"use strict";function f(n){return n<10?'0'+n:n}if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+f(this.getUTCMonth()+1)+'-'+f(this.getUTCDate())+'T'+f(this.getUTCHours())+':'+f(this.getUTCMinutes())+':'+f(this.getUTCSeconds())+'Z':null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key)}if(typeof rep==='function'){value=rep.call(holder,key,value)}switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null'}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null'}v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v}if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==='string'){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v)}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v)}}}}v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v}}if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' '}}else if(typeof space==='string'){indent=space}rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify')}return str('',{'':value})}}if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j}throw new SyntaxError('JSON.parse')}}}());
	
	function doImageBeaconGeneral(url,parameters) {
		for(p in parameters) {
			url = url.split("${"+p+"}").join(escape(parameters[p]));
		}
		url=url.split("${random}").join(_jsmd.getRandom());
		var isSSL=(window.location.protocol.toLowerCase().indexOf('https')!=-1);
		try { 
			var beaconImage = new Image();
			beaconImage.src=(isSSL?url.split("http:").join("https:"):url);
		} catch (e){}
	}
	function _doOrAddLoad(f) {	
		function _addLoadEvent(func) { 
			if (window.addEventListener) // W3C standard
			{
			  window.addEventListener('load', func, false); 
			} 
			else if (window.attachEvent) // MS Browsers
			{
			  window.attachEvent('onload', func);
			}
			else {
				if(typeof(window.onload)=="function") {
				var old = window.onload;
				   window.onload = function()
				   {
				       old();
				       func();
				   };
				} else {
					window.onload=func;
				}
			}
		}
		if(document && document.getElementById
		             && document.getElementsByTagName
		             && document.body
		             && document.head) {
			try {f();} catch(e){}
		} else {
			_addLoadEvent(f);
		}
	}
	// Module Instantiation & access
	return {
		init:publicInitialize,
		JSMD:CAnalyticsObject,
		plugin:pubDefaultMetadataUtilities,
		last:prvReturnLastObject,
		getRandom:function(){return Math.floor(Math.random()*9999999999999999);},
		doImageBeacon:doImageBeaconGeneral,
		addOnLoad:_doOrAddLoad
	};
}();
function trackMetrics(action,data,mapObj,loaderFunction) {
	var realaction=action,realdata=data,realmap=mapObj,realload=loaderFunction;
	if(typeof(action)=="object") {
		if(action.type!=null) {realaction=action.type;}
		if(action.action!=null) {realaction=action.action;}
		if(action.data!=null) {realdata=action.data;}
		if(action.map!=null) {realmap=action.map;}
		if(action.load!=null) {realmap=action.load;}
	}
	if(typeof(realdata)=="object") {
		if(realdata.data!=null) {realdata=realdata.data;}
		if(realdata.map!=null) {realmap=realdata.map;}
		if(realdata.load!=null) {realload=realdata.load;}
	}
	if(typeof(realmap)=="object") {
		if(realmap.map!=null) {realmap=realmap.map;}
		if(realmap.load!=null) {realload=realmap.load;}
	}
	var defaultDynamicNS=_jsmd_default.dynamic;
	if(defaultDynamicNS!=null && typeof(defaultDynamicNS.load)=="function") {realload=defaultDynamicNS.load;}
	if(typeof(realload)=="function") {realload.call(this,realdata);}
	var tmpObj=_jsmd.init();
	tmpObj.trackMetrics(realaction,realdata,realmap);
};

/* CUSTOM LOGIC / EVENTS / FUNCTIONS */
function sendVideoEvent(data, event, id){
    try {
		var currVidObj = (typeof data != "string" ? data : _w.JSON.parse(data));
		trackMetrics({
			type: event,
			data: {
				instance: id,
				video: currVidObj
			}
		});
    } catch(e){}
}
function sendGalleryEvent(event){
    try {
		trackMetrics({
			type: event,
			data: {}
		});
    } catch(e){}
}


var rsid = "";
var isFirstCall = false;
var currentPageName = "";

function sendComscoreVideoMetrixBeacon(videoId,contentFlag) {
var loc = window.cnnSection.toLowerCase();;
	var c6_com = null;
	try {
	switch (loc) {
		case "news":
			c6_com = "business";
			break;
		case "business news":
			c6_com = "business";
			break;
		case "markets":
			c6_com = "markets";
			break;
		case "technology":
			c6_com = "tech";
			break;			
		case "media":
			c6_com = "media";
			break;			
		case "pf":
			c6_com = "personal finance";
			break;
		case "personal finance":
			c6_com = "personal finance";
			break;			
		case "small business":
			c6_com = "small business";
			break;			
		case "luxury":
			c6_com = "luxury";
			break;			
	}
	} catch (e){}
	_jsmd.doImageBeacon("http://b.scorecardresearch.com/p?c1=${c1}&c2=${c2}&c3=${c3}&c4=${c4}&c5=${c5}&c6=${c6}&rn=${random}", {
			c1:'1', 		// Video metrix tag identifier
			c2:'8587182', 	// Turner Specific Tag
			c3:'00003', 	// Report-suite numeric identifier for comparisons to Omniture
			c4:'8587295',	// SI Specific Tag
			c5:(contentFlag==1?'020000':'010000'),
			c6:c6_com
		}
	);
}
function sendNielsenVideoCensusBeacon(config,state,videoId,videoTitle,duration) {
	var url="http://secure-${sfcode}.imrworldwide.com/cgi-bin/m?ci=${clientid}&c6=${prod},${vcid}&cc=1&tl=${state}-${videoId}&rnd=${random}&cg=${videoTitle}",
		nVC=(!config?null:config["video-census"]);
	if(!nVC) {return;}
	switch(state) {
		case "start":
			nVC.state="dav0";
			nVC.videoId=videoId;
			nVC.videoTitle=videoTitle;
			_jsmd.doImageBeacon(url,nVC);
			break;
		case "complete":
			nVC.state="dav2";
			nVC.videoId=videoId;
			nVC.videoTitle=videoTitle;
			_jsmd.doImageBeacon(url,nVC);
			break;
	}
}
function sendComscoreBeacon(videoId,contentFlag) {
	// send the correct beacon information to comscore
	try {
	    // contentFlag default = 0 and will use the ad value for c5.  passing a 1 will use the content value for c5
		// set default comscore values.
		var c1 = '1';
		var c2 = '8587182';
		var c3 = '00003';
		var c4 = '8587295';
		var c5 = '010000';  // default code for ad content
		if (contentFlag == 1) { c5 = '020000';} // checks to see if player is showing content or an ad	            
		var beaconImage = new Image();
		beaconImage.src = 'http://b.scorecardresearch.com/p?c1='+c1+'&c2='+c2+'&c3='+c3+'&c4='+c4+'&c5='+c5+'';
  } catch(err) {}
}


function logMetrics(_dataObj){
	var a = _dataObj.action;
	var data = _dataObj.data;
	var jslm = jsmd.sessionMetrics;
	var isVal = false;

	try{
		if(!jslm.pageName){
			jslm.pageName = jsmd.mdata.page.name
		}
		var cp = data.component+"";
		var sod = jslm.data;
		for(var p in sod){
			if(p == cp && p=="quote_bubble"){
				isVal = true;	
			}else if(p == cp){
				isVal = true;
				var e5 = sod[p].event5;
				var evc = (a==="navhover")?{event5:(e5*1+1)}:{event5:e5};
				sod[p] = evc;
			}
		}
		if(!isVal){
			var evc;
			if (a.indexOf("quote")!=-1){
				//evc = (a == "quotehover")?{event8:1}:{event8:0};
			}else{
				evc = (a==="navhover")?{event5:1}:{event5:1};
			}
			jslm.data[(cp)] = evc;
		}
	}catch(e){console.log("error: "+e)}
	console.log("test");
}

_jsmd.JSMD.prototype.sessionMetrics = {
	data:{},
	pageName:null
};

function sADBPSessionData(){
    var win = window.top || window;
    var session = jsmd.sessionMetrics;
    win.name = JSON.stringify(session);
    console.log("test");
}

if (window.addEventListener) window.addEventListener("unload", sADBPSessionData, false); 
else if (window.attachEvent) window.attachEvent("onunload", sADBPSessionData); 
else window.onunload = sADBPSessionData;



/* TRANSPORT / RAW FILES ONLY BELOW THIS LINE */
function trackComscoreVideoMetrixBeacon(config,videoId,contentFlag) {
	var configVals =(!config?null:config["video-metrix"]);
	if(!configVals) {return;}
	_jsmd.doImageBeacon("http://b.scorecardresearch.com/p?c1=${c1}&c2=${c2}&c3=${c3}&c4=${c4}&c5=${c5}&rn=${random}", {
			c1:configVals.c1,	// Video metrix tag identifier
			c2:configVals.c2, 	// Turner Specific Tag
			c3:configVals.c3, 	// Report-suite numeric identifier for comparisons to Omniture
			c4:configVals.c4,	// NCAA Specific Tag
			c5:(contentFlag==1?'020000':'010000')
		}
	);
}

function trackNielsenVideoCensusBeacon(config,state,videoId,videoTitle,duration) {
	var url="http://secure-${sfcode}.imrworldwide.com/cgi-bin/m?ci=${clientid}&c6=${prod},${vcid}&cc=1&tl=${state}-${videoId}&rnd=${random}&cg=${videoTitle}",
		nVC=(!config?null:config["video-census"]);
	if(!nVC) {return;}
	switch(state) {
		case "start":
			nVC.state="dav0";
			break;
		case "complete":
			nVC.state="dav2";
			break;
	}
	nVC.videoId=videoId;
	nVC.videoTitle=videoTitle;
	_jsmd.doImageBeacon(url,nVC);
}



var NielsenHybridTag=function(){
	function doNielsen(a) {
	    var d = new Image(1, 1);
	    d.onerror = d.onload = function () {
	      d.onerror = d.onload = null;
	    };
	    d.src = ["//secure-us.imrworldwide.com/cgi-bin/m?ci=", escape(a), "&cg=0&cc=1&si=", escape(window.location.href), "&rp=", escape(document.referrer), "&ts=compact&rnd=", (new Date()).getTime()].join('');
  }
  return { push_nielsen:doNielsen };
}();




var s_code='',s_objectID;function s_gi(un,pg,ss){var c="s.version='H.26.1';s.an=s_an;s.logDebug=function(m){var s=this,tcf=new Function('var e;try{console.log(\"'+s.rep(s.rep(s.rep(m,\"\\\\\",\"\\\\"
+"\\\\\"),\"\\n\",\"\\\\n\"),\"\\\"\",\"\\\\\\\"\")+'\");}catch(e){}');tcf()};s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}retur"
+"n y};s.fl=function(x,l){return x?(''+x).substring(0,l):x};s.co=function(o){return o};s.num=function(x){x=''+x;for(var p=0;p<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;ret"
+"urn 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',f=\"+~!*()'\",i,c=s.charSet,n,l,e,y='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3){x=encodeURIComponent("
+"x);for(i=0;i<f.length;i++) {n=f.substring(i,i+1);if(x.indexOf(n)>=0)x=s.rep(x,n,\"%\"+n.charCodeAt(0).toString(16).toUpperCase())}}else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.su"
+"bstring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else x=s.rep(escape(''+x),'+"
+"','%2B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00"
+"'+x.substring(i);i=x.indexOf('%',i)}}}return x};s.epa=function(x){var s=this,y,tcf;if(x){x=s.rep(''+x,'+',' ');if(s.em==3){tcf=new Function('x','var y,e;try{y=decodeURIComponent(x)}catch(e){y=unesc"
+"ape(x)}return y');return tcf(x)}else return unescape(x)}return y};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r"
+";z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);c=a.indexOf('=');if(c>=0)a=a.substring(0,c);if(t.substring("
+"0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var s=this;s.fsg='';s.pt(x,',','fsf'"
+",f);return s.fsg};s.mpc=function(m,a){var s=this,c,l,n,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(v&&v=='prerender'){if(!s.mpq){s.mpq=new Array;l=s.sp('webkitvisibilitychange,visi"
+"bilitychange',',');for(n=0;n<l.length;n++){s.d.addEventListener(l[n],new Function('var s=s_c_il['+s._in+'],c,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(s.mpq&&v==\"visible\"){whil"
+"e(s.mpq.length>0){c=s.mpq.shift();s[c.m].apply(s,c.a)}s.mpq=0}'),false)}}c=new Object;c.m=m;c.a=a;s.mpq.push(c);return 1}return 0};s.si=function(){var s=this,i,k,v,c=s_gi+'var s=s_gi(\"'+s.oun+'\")"
+";s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=undefined){if(typeof(v)!='number')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'}}c+=\"s.lnk=s.eo=s.linkName=s.li"
+"nkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostnam"
+"e,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'"
+".','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.ape(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<"
+"0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-6"
+"0);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':''"
+");return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s._in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i"
+";l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv>=5&&(!s.isopera||s.apv>=7)){tc"
+"f=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,'onerror',0,o);r=s[f](a);s.eh(s"
+".wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfsoe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0"
+";return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return "
+"s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,l=s.rl[u],n,r;s.rl[u]=0;if(l)fo"
+"r(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,r.t,r.u)}};s.flushBufferedRequests=function(){};s.mr=function(sess,q,rs,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,tb=s.trackin"
+"gServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Object,l,imn='s_i_'+s._in+'_'+un,im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net';if(dc)dc=(''+dc).toLow"
+"erCase();else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobile?'5.1':'1')+'/'+s.vers"
+"ion+(s.tcn?'T':'')+'/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl(rs,2047)}if(s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if"
+"(!s.rc[un]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]"
+"=r;return ''}imn+='_'+s.rc[un];s.rc[un]++}if(s.debugTracking){var d='AppMeasurement Debug: '+rs,dl=s.sp(rs,'&'),dln;for(dln=0;dln<dl.length;dln++)d+=\"\\n\\t\"+s.epa(dl[dln]);s.logDebug(d)}im=s.wd["
+"imn];if(!im)im=s.wd[imn]=new Image;im.s_l=0;im.onload=new Function('e','this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.bcr();s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');"
+"if(!s.nrs){s.nrs=1;s.m_m('rs')}else s.nrs++;im.src=rs;if(s.useForcedLinkTracking||s.bcf){if(!s.forcedLinkTrackingTimeout)s.forcedLinkTrackingTimeout=250;setTimeout('if(window.s_c_il)window.s_c_il['"
+"+s._in+'].bcr()',s.forcedLinkTrackingTimeout);}else if((s.lnk||s.eo)&&(!ta||ta=='_self'||ta=='_top'||ta=='_parent'||(s.wd.name&&ta==s.wd.name))){b=e=new Date;while(!im.s_l&&e.getTime()-b.getTime()<"
+"500)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf=function(t,a"
+"){if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,p,l=0,q,a,b='',c='',t;if("
+"x&&x.length>255){y=''+x;i=y.indexOf('?');if(i>0){q=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCase();j=0;if(h.substring(0,7)=='http://')j+=7;else if(h.substring(0,8)=='https://')j+=8;i=h.indexO"
+"f(\"/\",j);if(i>0){h=h.substring(j,i);p=y.substring(i);y=y.substring(0,i);if(h.indexOf('google')>=0)l=',q,ie,start,search_key,word,kw,cd,';else if(h.indexOf('yahoo.co')>=0)l=',p,ei,';if(l&&q){a=s.s"
+"p(q,'&');if(a&&a.length>1){for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.substring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c)q=b+'&'+c;else c=''}i=253-(q.l"
+"ength-c.length)-y.length;x=y+(i>0?p.substring(0,i):'')+'?'+q}}}}return x};s.s2q=function(k,v,vf,vfp,f){var s=this,qs='',sk,sv,sp,ss,nke,nk,nf,nfl=0,nfn,nfm;if(k==\"contextData\")k=\"c\";if(v){for(s"
+"k in v)if((!f||sk.substring(0,f.length)==f)&&v[sk]&&(!vf||vf.indexOf(','+(vfp?vfp+'.':'')+sk+',')>=0)&&(!Object||!Object.prototype||!Object.prototype[sk])){nfm=0;if(nfl)for(nfn=0;nfn<nfl.length;nfn"
+"++)if(sk.substring(0,nfl[nfn].length)==nfl[nfn])nfm=1;if(!nfm){if(qs=='')qs+='&'+k+'.';sv=v[sk];if(f)sk=sk.substring(f.length);if(sk.length>0){nke=sk.indexOf('.');if(nke>0){nk=sk.substring(0,nke);n"
+"f=(f?f:'')+nk+'.';if(!nfl)nfl=new Array;nfl[nfl.length]=nf;qs+=s.s2q(nk,v,vf,vfp,nf)}else{if(typeof(sv)=='boolean'){if(sv)sv='true';else sv='false'}if(sv){if(vfp=='retrieveLightData'&&f.indexOf('.c"
+"ontextData.')<0){sp=sk.substring(0,4);ss=sk.substring(4);if(sk=='transactionID')sk='xact';else if(sk=='channel')sk='ch';else if(sk=='campaign')sk='v0';else if(s.num(ss)){if(sp=='prop')sk='c'+ss;els"
+"e if(sp=='eVar')sk='v'+ss;else if(sp=='list')sk='l'+ss;else if(sp=='hier'){sk='h'+ss;sv=sv.substring(0,255)}}}qs+='&'+s.ape(sk)+'='+s.ape(sv)}}}}}if(qs!='')qs+='&.'+k}return qs};s.hav=function(){va"
+"r s=this,qs='',l,fv='',fe='',mn,i,e;if(s.lightProfileID){l=s.va_m;fv=s.lightTrackVars;if(fv)fv=','+fv+','+s.vl_mr+','}else{l=s.va_t;if(s.pe||s.linkType){fv=s.linkTrackVars;fe=s.linkTrackEvents;if(s"
+".pe){mn=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[mn].trackEvents}}}if(fv)fv=','+fv+','+s.vl_l+','+s.vl_l2;if(fe){fe=','+fe+',';if(fv)fv+=',events,'}if ("
+"s.events2)e=(e?',':'')+s.events2}for(i=0;i<l.length;i++){var k=l[i],v=s[k],b=k.substring(0,4),x=k.substring(4),n=parseInt(x),q=k;if(!v)if(k=='events'&&e){v=e;e=''}if(v&&(!fv||fv.indexOf(','+k+',')>"
+"=0)&&k!='linkName'&&k!='linkType'){if(k=='timestamp')q='ts';else if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='pageURL'){q='g';if(v.length>255){s.pageURLRest=v.subs"
+"tring(255);v=v.substring(0,255);}}else if(k=='pageURLRest')q='-g';else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationSer"
+"ver'){q='vmf';if(s.ssl&&s.visitorMigrationServerSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase"
+"()=='AUTO')v='ISO8859-1';else if(s.em==2||s.em==3)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProv"
+"ider')q='vvp';else if(k=='currencyCode')q='cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='"
+"c';else if(k=='javascriptVersion')q='j';else if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionTyp"
+"e')q='ct';else if(k=='homepage')q='hp';else if(k=='plugins')q='p';else if(k=='events'){if(e)v+=(v?',':'')+e;if(fe)v=s.fs(v,fe)}else if(k=='events2')v='';else if(k=='contextData'){qs+=s.s2q('c',s[k]"
+",fv,k,0);v=''}else if(k=='lightProfileID')q='mtp';else if(k=='lightStoreForSeconds'){q='mtss';if(!s.lightProfileID)v=''}else if(k=='lightIncrementBy'){q='mti';if(!s.lightProfileID)v=''}else if(k=='"
+"retrieveLightProfiles')q='mtsr';else if(k=='deleteLightProfiles')q='mtsd';else if(k=='retrieveLightData'){if(s.retrieveLightProfiles)qs+=s.s2q('mts',s[k],fv,k,0);v=''}else if(s.num(x)){if(b=='prop'"
+")q='c'+n;else if(b=='eVar')q='v'+n;else if(b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+s.ape(q)+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}return qs};s.ltdf=function(t,h"
+"){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';var qi=h.indexOf('?'),hi=h.indexOf('#');if(qi>=0){if(hi>=0&&hi<qi)qi=hi;}else qi=hi;h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+"
+"1))=='.'+t)return 1;return 0};s.ltef=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef"
+"=s.linkExternalFilters,lif=s.linkInternalFilters;lif=lif?lif:s.wd.location.hostname;h=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.inde"
+"xOf('#')!=0&&h.indexOf('about:')!=0&&h.indexOf('javascript:')!=0&&(lef||lif)&&(!lef||s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function('e','var s=s_c_"
+"il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=this;s.t();s.lnk=0;if(b)return this[b](e);return true');s.bcr=function(){var s=this;if(s.bct&&s.bce)s.bct.dispatchEvent(s.bce);if(s.bcf){if(typeof(s.bcf"
+")=='function')s.bcf();else if(s.bct&&s.bct.href)s.d.location=s.bct.href}s.bct=s.bce=s.bcf=0};s.bc=new Function('e','if(e&&e.s_fe)return;var s=s_c_il['+s._in+'],f,tcf,t,n,nrs,a,h;if(s.d&&s.d.all&&s."
+"d.all.cppXYctnr)return;if(!s.bbc)s.useForcedLinkTracking=0;else if(!s.useForcedLinkTracking){s.b.removeEventListener(\"click\",s.bc,true);s.bbc=s.useForcedLinkTracking=0;return}else s.b.removeEvent"
+"Listener(\"click\",s.bc,false);s.eo=e.srcElement?e.srcElement:e.target;nrs=s.nrs;s.t();s.eo=0;if(s.nrs>nrs&&s.useForcedLinkTracking&&e.target){a=e.target;while(a&&a!=s.b&&a.tagName.toUpperCase()!="
+"\"A\"&&a.tagName.toUpperCase()!=\"AREA\")a=a.parentNode;if(a){h=a.href;if(h.indexOf(\"#\")==0||h.indexOf(\"about:\")==0||h.indexOf(\"javascript:\")==0)h=0;t=a.target;if(e.target.dispatchEvent&&h&&("
+"!t||t==\"_self\"||t==\"_top\"||t==\"_parent\"||(s.wd.name&&t==s.wd.name))){tcf=new Function(\"s\",\"var x;try{n=s.d.createEvent(\\\\\"MouseEvents\\\\\")}catch(x){n=new MouseEvent}return n\");n=tcf("
+"s);if(n){tcf=new Function(\"n\",\"e\",\"var x;try{n.initMouseEvent(\\\\\"click\\\\\",e.bubbles,e.cancelable,e.view,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.m"
+"etaKey,e.button,e.relatedTarget)}catch(x){n=0}return n\");n=tcf(n,e);if(n){n.s_fe=1;e.stopPropagation();if (e.stopImmediatePropagation) {e.stopImmediatePropagation();}e.preventDefault();s.bct=e.tar"
+"get;s.bce=n}}}}}');s.oh=function(o){var s=this,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h.indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&&o.p"
+"rotocol.length>1?o.protocol:(l.protocol?l.protocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.host:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/':''"
+")+h}return h};s.ot=function(o){var t=o.tagName;if(o.tagUrn||(o.scopeName&&o.scopeName.toUpperCase()!='HTML'))return '';t=t&&t.toUpperCase?t.toUpperCase():'';if(t=='SHAPE')t='';if(t){if((t=='INPUT'|"
+"|t=='BUTTON')&&o.type&&o.type.toUpperCase)t=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p=o.protocol;c=o.onclick;if("
+"o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerCase().indexOf('javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');x=2}else if(t=='INPUT'"
+"||t=='SUBMIT'){if(o.value)n=o.value;else if(o.innerText)n=o.innerText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}return o.s_oi"
+"d};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?t.substring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u+',').indexOf(','+un+',')>=0){if(u!=s.un&&s.un.indexOf(',')>=0)q='&u="
+"'+u+q+'&u=0';return q}return ''};s.rq=function(un){if(!un)un=this.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un);return s.pt(un,',','rq',0)};s.sqp=function("
+"t,a){var s=this,e=t.indexOf('='),q=e<0?'':s.epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){var s=this;s.squ[un]=q;return 0};s.sq=functio"
+"n(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s.sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)if(x&&(!Object||!Object.prototype||!Object.pro"
+"totype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]]?',':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return"
+" s.c_w(k,v,0)};s.wdl=new Function('e','var s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o=s.d.links[i];oc=o.onclick?\"\"+o.onclick:\""
+"\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf(\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s=this;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s"
+".b&&s.b.attachEvent)s.b.attachEvent('onclick',s.bc);else if(s.b&&s.b.addEventListener){if(s.n&&((s.n.userAgent.indexOf('WebKit')>=0&&s.d.createEvent)||(s.n.userAgent.indexOf('Firefox/2')>=0&&s.wd.M"
+"ouseEvent))){s.bbc=1;s.useForcedLinkTracking=1;s.b.addEventListener('click',s.bc,true)}s.b.addEventListener('click',s.bc,false)}else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=function(x){var s=this,v=s.vi"
+"sitorSampling,g=s.visitorSamplingGroup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e))return 0;n=x}if(n%10000>"
+"v)return 0}return 1};s.dyasmf=function(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.substring(0,i),x=t.substring(i"
+"+1);if(s.pt(x,',','dyasmf',m))return n}return 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowerCase();if(x&&l){if(!m)m="
+"s.wd.location.host;if(!m.toLowerCase)m=''+m;l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.sa=function(un){var s=t"
+"his;if(s.un&&s.mpc('sa',arguments))return;s.un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r,l,i;i"
+"f(!s.m_l)s.m_l=new Object;if(!s.m_nl)s.m_nl=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s;m._n="
+"n;m._l=new Array('_c','_in','_il','_i','_e','_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l=m._l;f"
+"or(i=0;i<l.length;i++)if(m[l[i]])r[l[i]]=m[l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._in+'],c=s[g+\""
+"_c\"],m,x,f=0;if(s.mpc(\"m_a\",arguments))return;if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m"
+"._i||g!=\"m_\"+n)){m._i=f=1;if((\"\"+x).indexOf(\"function\")>=0)x(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,i,x,m,"
+"f='_'+t,r=0,u;if(s.m_l&&s.m_nl)for(i=0;i<s.m_nl.length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m[t]()}"
+"}if(u)r=1;u=m[t+1];if(u&&!m[f]){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl,i,o;i"
+"f(g)for(i=0;i<g.length;i++){o=g[i];if(o)s.loadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':');if(i"
+">=0){g=n.substring(i+1);n=n.substring(0,i)}else g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');i='s_s"
+":'+s._in+':'+n+':'+g;b='var s=s_c_il['+s._in+'],o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'')+')}"
+"';f2=b+'o.c++;if(!s.maxDelay)s.maxDelay=250;if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s.d.cre"
+"ateElement(\"script\");if(o){o.type=\"text/javascript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':"
+"'')+'}}catch(e){o=0}return o');o=tcf(s,c,i,u,f1,f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m=s.m_i"
+"(n);m._e=1}return m};s.voa=function(vo,r){var s=this,l=s.va_g,i,k,v,x;for(i=0;i<l.length;i++){k=l[i];v=vo[k];if(v||vo['!'+k]){if(!r&&(k==\"contextData\"||k==\"retrieveLightData\")&&s[k])for(x in s["
+"k])if(!v[x])v[x]=s[k][x];s[k]=v}}};s.vob=function(vo){var s=this,l=s.va_g,i,k;for(i=0;i<l.length;i++){k=l[i];vo[k]=s[k];if(!vo[k])vo['!'+k]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=new Dat"
+"e,i,vo,f=0;if(s.dll)for(i=0;i<s.dll.length;i++){vo=s.dll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if(!s.dli"
+")s.dli=setTimeout(s.dlt,s.maxDelay)}else s.dll=0');s.dl=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.vob(vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if(!s.ma"
+"xDelay)s.maxDelay=250;s.dlt()};s.gfid=function(){var s=this,d='0123456789ABCDEF',k='s_fid',fid=s.c_r(k),h='',l='',i,j,m=8,n=4,e=new Date,y;if(!fid||fid.indexOf('-')<0){for(i=0;i<16;i++){j=Math.floo"
+"r(Math.random()*m);h+=d.substring(j,j+1);j=Math.floor(Math.random()*n);l+=d.substring(j,j+1);m=n=16}fid=h+'-'+l;}y=e.getYear();e.setYear(y+2+(y<1900?1900:0));if(!s.c_w(k,fid,e))fid=0;return fid};s."
+"applyADMS=function(){var s=this,vb=new Object;if(s.wd.ADMS&&!s.visitorID&&!s.admsc){if(!s.adms)s.adms=ADMS.getDefault();if(!s.admsq){s.visitorID=s.adms.getVisitorID(new Function('v','var s=s_c_il['"
+"+s._in+'],l=s.admsq,i;if(v==-1)v=0;if(v)s.visitorID=v;s.admsq=0;if(l){s.admsc=1;for(i=0;i<l.length;i++)s.t(l[i]);s.admsc=0;}'));if(!s.visitorID)s.admsq=new Array}if(s.admsq){s.vob(vb);vb['!visitorI"
+"D']=0;s.admsq.push(vb);return 1}else{if(s.visitorID==-1)s.visitorID=0}}return 0};s.track=s.t=function(vo){var s=this,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000)"
+":tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.getYear(),vt=tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+"
+"tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q='',qs='',code='',vb=new Object;if(s.mpc('t',arguments))return;s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tfs.location,a,o,i,x='',"
+"c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(String&&String.prototype){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>"
+"=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new Object;tcf=new Function('o','var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next){j='1.7';if"
+"(a.reduce){j='1.8';if(j.trim){j='1.8.1';if(Date.parse){j='1.8.2';if(Object.create)j='1.8.5'}}}}}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaEnabled"
+"()?'Y':'N';if(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){bw=s.d"
+".documentElement.offsetWidth;bh=s.d.documentElement.offsetHeight;if(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\":\"N\""
+"}catch(e){}return hp');hp=tcf(s,tl);tcf=new Function('s','var e,ct=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)while(pn<"
+"s.pl.length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.browserHe"
+"ight=bh;s.connectionType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.vob(vb);s.voa(vo)}s.fid=s.gfid();if(s.applyADMS())return '';if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);if(!s.a"
+"bort){var l=s.wd.location,r=tfs.document.referrer;if(!s.pageURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer){s.referrer=r;s._1_referrer=1}s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s.eo:s.l"
+"nk,p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(o){t=s.ot(o);n=s.oid(o);x=o.s_oidt}}if(!n||t"
+"=='BODY')o='';if(o){oc=o.onclick?''+o.onclick:'';if((oc.indexOf('s_gs(')>=0&&oc.indexOf('.s_oc(')<0)||oc.indexOf('.tl(')>=0)o=0}}if(o){if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeaveQuery"
+"String||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s.linkType.toLowerCase():s.lt(h);if(t&&(h||l)){s.pe='lnk_'+(t=='d'||t=='e'?t:'o');s.pev1=(h?s.ape(h):'');s.pev2=(l?s.ape(l):'')}else trk=0;i"
+"f(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o.sourceIndex;if(o.dataset&&o.dataset.sObjectId){s.wd.s_objectID=o.dataset.sObjectId;}else if(o.getAttribute&&o.getAttribute('data-s-object-"
+"id')){s.wd.s_objectID=o.getAttribute('data-s-object-id');}else if(s.useForcedLinkTracking){s.wd.s_objectID='';oc=o.onclick?''+o.onclick:'';if(oc){var ocb=oc.indexOf('s_objectID'),oce,ocq,ocx;if(ocb"
+">=0){ocb+=10;while(ocb<oc.length&&(\"= \\t\\r\\n\").indexOf(oc.charAt(ocb))>=0)ocb++;if(ocb<oc.length){oce=ocb;ocq=ocx=0;while(oce<oc.length&&(oc.charAt(oce)!=';'||ocq)){if(ocq){if(oc.charAt(oce)=="
+"ocq&&!ocx)ocq=0;else if(oc.charAt(oce)==\"\\\\\")ocx=!ocx;else ocx=0;}else{ocq=oc.charAt(oce);if(ocq!='\"'&&ocq!=\"'\")ocq=0}oce++;}oc=oc.substring(ocb,oce);if(oc){o.s_soid=new Function('s','var e;"
+"try{s.wd.s_objectID='+oc+'}catch(e){}');o.s_soid(s)}}}}}if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oi"
+"dt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}else trk=0}if(trk||qs){s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,ta);qs='';s.m_m('t');if"
+"(s.p_r)s.p_r();s.referrer=s.lightProfileID=s.retrieveLightProfiles=s.deleteLightProfiles=''}s.sq(qs)}}}else s.dl(vo);if(vo)s.voa(vb,1);s.abort=0;s.pageURLRest=s.lnk=s.eo=s.linkName=s.linkType=s.wd."
+"s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd.s_linkName=s.wd.s_linkType='';return code};s.trackLink=s.tl=function(o,t,n,vo,f){var s=this;s.lnk=o;s.linkType=t;s.li"
+"nkName=n;if(f){s.bct=o;s.bcf=f}s.t(vo)};s.trackLight=function(p,ss,i,vo){var s=this;s.lightProfileID=p;s.lightStoreForSeconds=ss;s.lightIncrementBy=i;s.t(vo)};s.setTagContainer=function(n){var s=th"
+"is,l=s.wd.s_c_il,i,t,x,y;s.tcn=n;if(l)for(i=0;i<l.length;i++){t=l[i];if(t&&t._c=='s_l'&&t.tagContainerName==n){s.voa(t);if(t.lmq)for(i=0;i<t.lmq.length;i++){x=t.lmq[i];y='m_'+x.n;if(!s[y]&&!s[y+'_c"
+"']){s[y]=t[y];s[y+'_c']=t[y+'_c']}s.loadModule(x.n,x.u,x.d)}if(t.ml)for(x in t.ml)if(s[x]){y=s[x];x=t.ml[x];for(i in x)if(!Object.prototype[i]){if(typeof(x[i])!='function'||(''+x[i]).indexOf('s_c_i"
+"l')<0)y[i]=x[i]}}if(t.mmq)for(i=0;i<t.mmq.length;i++){x=t.mmq[i];if(s[x.m]){y=s[x.m];if(y[x.f]&&typeof(y[x.f])=='function'){if(x.a)y[x.f].apply(y,x.a);else y[x.f].apply(y)}}}if(t.tq)for(i=0;i<t.tq."
+"length;i++)s.t(t.tq[i]);t.s=s;return}}};s.wd=window;s.ssl=(s.wd.location.protocol.toLowerCase().indexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagName){s.h=s.d.getElementsByTagN"
+"ame('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netscape6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf('Oper"
+"a')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netscape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6));els"
+"e if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s.ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if(s.em.toPrecision)s.em=3;el"
+"se if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}if(s.oun)s.sa(s.oun);s.sa(un);s.vl_l='timestamp,dynamicVariablePrefix,visitorID,fi"
+"d,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServerSecure,ppu,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,contextData,currencyCode,ligh"
+"tProfileID,lightStoreForSeconds,lightIncrementBy,retrieveLightProfiles,deleteLightProfiles,retrieveLightData';s.va_l=s.sp(s.vl_l,',');s.vl_mr=s.vl_m='timestamp,charSet,visitorNamespace,cookieDomain"
+"Periods,cookieLifetime,contextData,lightProfileID,lightStoreForSeconds,lightIncrementBy';s.vl_t=s.vl_l+',variableProvider,channel,server,pageType,transactionID,purchaseID,campaign,state,zip,events,"
+"events2,products,linkName,linkType';var n;for(n=1;n<=75;n++){s.vl_t+=',prop'+n+',eVar'+n;s.vl_m+=',prop'+n+',eVar'+n}for(n=1;n<=5;n++)s.vl_t+=',hier'+n;for(n=1;n<=3;n++)s.vl_t+=',list'+n;s.va_m=s.s"
+"p(s.vl_m,',');s.vl_l2=',tnt,pe,pev1,pev2,pev3,resolution,colorDepth,javascriptVersion,javaEnabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,pageURLRest,plugins';s.vl_t+=s.vl"
+"_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trackingServer,trackingServerSecure,trackingServerBase,fpCookieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dynamicA"
+"ccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownloadLinks,trackExternalLinks,trackInlineStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilters,link"
+"TrackVars,linkTrackEvents,linkNames,lnk,eo,lightTrackVars,_1_referrer,un';s.va_g=s.sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);s.contextData=new Object;s.retrieveLightData=new Object;if(!ss)s.wds();if(pg){"
+"s.wd.s_co=function(o){return o};s.wd.s_gs=function(un){s_gi(un,1,1).t()};s.wd.s_dc=function(un){s_gi(un,1).t()}}",
w=window,l=w.s_c_il,n=navigator,u=n.userAgent,v=n.appVersion,e=v.indexOf('MSIE '),m=u.indexOf('Netscape6/'),a,i,j,x,s;if(un){un=un.toLowerCase();if(l)for(j=0;j<2;j++)for(i=0;i<l.length;i++){s=l[i];x=s._c;if((!x||x=='s_c'||(j>0&&x=='s_l'))&&(s.oun==un||(s.fs&&s.sa&&s.fs(s.oun,un)))){if(s.sa)s.sa(un);if(x=='s_c')return s}else s=0}}w.s_an='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
w.s_sp=new Function("x","d","var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.subst"
+"ring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");
w.s_jn=new Function("a","d","var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");
w.s_rep=new Function("x","o","n","return s_jn(s_sp(x,o),n)");
w.s_d=new Function("x","var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d"
+"=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn("
+"x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");
w.s_fe=new Function("c","return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
w.s_fa=new Function("f","var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':"
+"a");
w.s_ft=new Function("c","c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i"
+"f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")"
+"'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
c=s_d(c);if(e>0){a=parseInt(i=v.substring(e+5));if(a>3)a=parseFloat(i)}else if(m>0)a=parseFloat(u.substring(m+10));else a=parseFloat(v);if(a<5||v.indexOf('Opera')>=0||u.indexOf('Opera')>=0)c=s_ft(c);if(!s){s=new Object;if(!w.s_c_in){w.s_c_il=new Array;w.s_c_in=0}s._il=w.s_c_il;s._in=w.s_c_in;s._il[s._in]=s;w.s_c_in++;}s._c='s_c';(new Function("s","un","pg","ss",c))(s,un,pg,ss);return s}
function s_giqf(){var w=window,q=w.s_giq,i,t,s;if(q)for(i=0;i<q.length;i++){t=q[i];s=s_gi(t.oun);s.sa(t.un);s.setTagContainer(t.tagContainerName)}w.s_giq=0}s_giqf()
