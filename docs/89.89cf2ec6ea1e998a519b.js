(self.webpackChunktadoba_ui=self.webpackChunktadoba_ui||[]).push([[89],{5089:(e,t,i)=>{"use strict";i.r(t),i.d(t,{ContactModule:()=>k});var a=i(98),s=i(1990),o=i(8348),r=i(2730),n=i(293),l=i(3161),p=i(5639),g=i(3426),c=i(5472),d=i(838),m=i(9782),h=(i(8707),i(1012),i(4487));i(8359),i(4213);const y=["*"];class u{constructor(e){this._ngZone=e,this._pending=[],this._listeners=[],this._targetStream=new d.X(void 0)}_clearListeners(){for(const e of this._listeners)e.remove();this._listeners=[]}getLazyEmitter(e){return this._targetStream.pipe((0,h.w)(t=>{const i=new m.y(a=>{if(!t)return void this._pending.push({observable:i,observer:a});const s=t.addListener(e,e=>{this._ngZone.run(()=>a.next(e))});return this._listeners.push(s),()=>s.remove()});return i}))}setTarget(e){const t=this._targetStream.value;e!==t&&(t&&(this._clearListeners(),this._pending=[]),this._targetStream.next(e),this._pending.forEach(e=>e.observable.subscribe(e.observer)),this._pending=[])}destroy(){this._clearListeners(),this._pending=[],this._targetStream.complete()}}const _={center:{lat:37.421995,lng:-122.084092},zoom:17,mapTypeId:"roadmap"},f="500px",T="500px";let v=(()=>{class e{constructor(e,t,i){this._elementRef=e,this._ngZone=t,this._eventManager=new u(this._ngZone),this.height=f,this.width=T,this._options=_,this.boundsChanged=this._eventManager.getLazyEmitter("bounds_changed"),this.centerChanged=this._eventManager.getLazyEmitter("center_changed"),this.mapClick=this._eventManager.getLazyEmitter("click"),this.mapDblclick=this._eventManager.getLazyEmitter("dblclick"),this.mapDrag=this._eventManager.getLazyEmitter("drag"),this.mapDragend=this._eventManager.getLazyEmitter("dragend"),this.mapDragstart=this._eventManager.getLazyEmitter("dragstart"),this.headingChanged=this._eventManager.getLazyEmitter("heading_changed"),this.idle=this._eventManager.getLazyEmitter("idle"),this.maptypeidChanged=this._eventManager.getLazyEmitter("maptypeid_changed"),this.mapMousemove=this._eventManager.getLazyEmitter("mousemove"),this.mapMouseout=this._eventManager.getLazyEmitter("mouseout"),this.mapMouseover=this._eventManager.getLazyEmitter("mouseover"),this.projectionChanged=this._eventManager.getLazyEmitter("projection_changed"),this.mapRightclick=this._eventManager.getLazyEmitter("rightclick"),this.tilesloaded=this._eventManager.getLazyEmitter("tilesloaded"),this.tiltChanged=this._eventManager.getLazyEmitter("tilt_changed"),this.zoomChanged=this._eventManager.getLazyEmitter("zoom_changed"),this._isBrowser=(0,a.NF)(i),this._isBrowser&&window}set center(e){this._center=e}set zoom(e){this._zoom=e}set options(e){this._options=e||_}ngOnChanges(e){(e.height||e.width)&&this._setSize();const t=this.googleMap;t&&(e.options&&t.setOptions(this._combineOptions()),e.center&&this._center&&t.setCenter(this._center),e.zoom&&null!=this._zoom&&t.setZoom(this._zoom),e.mapTypeId&&this.mapTypeId&&t.setMapTypeId(this.mapTypeId))}ngOnInit(){this._isBrowser&&(this._mapEl=this._elementRef.nativeElement.querySelector(".map-container"),this._setSize(),this._ngZone.runOutsideAngular(()=>{this.googleMap=new google.maps.Map(this._mapEl,this._combineOptions())}),this._eventManager.setTarget(this.googleMap))}ngOnDestroy(){this._eventManager.destroy()}fitBounds(e,t){this._assertInitialized(),this.googleMap.fitBounds(e,t)}panBy(e,t){this._assertInitialized(),this.googleMap.panBy(e,t)}panTo(e){this._assertInitialized(),this.googleMap.panTo(e)}panToBounds(e,t){this._assertInitialized(),this.googleMap.panToBounds(e,t)}getBounds(){return this._assertInitialized(),this.googleMap.getBounds()||null}getCenter(){return this._assertInitialized(),this.googleMap.getCenter()}getClickableIcons(){return this._assertInitialized(),this.googleMap.getClickableIcons()}getHeading(){return this._assertInitialized(),this.googleMap.getHeading()}getMapTypeId(){return this._assertInitialized(),this.googleMap.getMapTypeId()}getProjection(){return this._assertInitialized(),this.googleMap.getProjection()}getStreetView(){return this._assertInitialized(),this.googleMap.getStreetView()}getTilt(){return this._assertInitialized(),this.googleMap.getTilt()}getZoom(){return this._assertInitialized(),this.googleMap.getZoom()}get controls(){return this._assertInitialized(),this.googleMap.controls}get data(){return this._assertInitialized(),this.googleMap.data}get mapTypes(){return this._assertInitialized(),this.googleMap.mapTypes}get overlayMapTypes(){return this._assertInitialized(),this.googleMap.overlayMapTypes}_setSize(){if(this._mapEl){const e=this._mapEl.style;e.height=null===this.height?"":Z(this.height)||f,e.width=null===this.width?"":Z(this.width)||T}}_combineOptions(){var e,t;const i=this._options||{};return Object.assign(Object.assign({},i),{center:this._center||i.center||_.center,zoom:null!==(t=null!==(e=this._zoom)&&void 0!==e?e:i.zoom)&&void 0!==t?t:_.zoom,mapTypeId:this.mapTypeId||i.mapTypeId||_.mapTypeId})}_assertInitialized(){}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(o.SBq),o.Y36(o.R0b),o.Y36(o.Lbi))},e.\u0275cmp=o.Xpm({type:e,selectors:[["google-map"]],inputs:{height:"height",width:"width",center:"center",zoom:"zoom",options:"options",mapTypeId:"mapTypeId"},outputs:{boundsChanged:"boundsChanged",centerChanged:"centerChanged",mapClick:"mapClick",mapDblclick:"mapDblclick",mapDrag:"mapDrag",mapDragend:"mapDragend",mapDragstart:"mapDragstart",headingChanged:"headingChanged",idle:"idle",maptypeidChanged:"maptypeidChanged",mapMousemove:"mapMousemove",mapMouseout:"mapMouseout",mapMouseover:"mapMouseover",projectionChanged:"projectionChanged",mapRightclick:"mapRightclick",tilesloaded:"tilesloaded",tiltChanged:"tiltChanged",zoomChanged:"zoomChanged"},exportAs:["googleMap"],features:[o.TTD],ngContentSelectors:y,decls:2,vars:0,consts:[[1,"map-container"]],template:function(e,t){1&e&&(o.F$t(),o._UZ(0,"div",0),o.Hsn(1))},encapsulation:2,changeDetection:0}),e})();const b=/([A-Za-z%]+)$/;function Z(e){return null==e?"":b.test(e)?e:`${e}px`}let x=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({}),e})();function z(e,t){if(1&e&&(o.TgZ(0,"div"),o._UZ(1,"google-map",1),o.qZA()),2&e){const e=o.oxw();o.xp6(1),o.Q6J("options",e.options)}}let w=(()=>{class e{constructor(e){this.options={center:{lat:23.698452658467275,lng:90.3470423839077},zoom:4,styles:[{elementType:"geometry",stylers:[{color:"#ebe3cd"}]},{elementType:"labels.text.fill",stylers:[{color:"#523735"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f1e6"}]},{featureType:"administrative",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#c9b2a6"}]},{featureType:"administrative.land_parcel",elementType:"geometry.stroke",stylers:[{color:"#dcd2be"}]},{featureType:"administrative.land_parcel",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#ae9e90"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"poi",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#93817c"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#a5b076"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#447530"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#f5f1e6"}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#fdfcf8"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#f8c967"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#e9bc62"}]},{featureType:"road.highway.controlled_access",elementType:"geometry",stylers:[{color:"#e98d58"}]},{featureType:"road.highway.controlled_access",elementType:"geometry.stroke",stylers:[{color:"#db8555"}]},{featureType:"road.local",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#806b63"}]},{featureType:"transit",stylers:[{visibility:"off"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"transit.line",elementType:"labels.text.fill",stylers:[{color:"#8f7d77"}]},{featureType:"transit.line",elementType:"labels.text.stroke",stylers:[{color:"#ebe3cd"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#dfd2ae"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#b9d3c2"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#92998d"}]}]},this.apiLoaded=e.jsonp("https://maps.googleapis.com/maps/api/js?key=AIzaSyB6exYq_khq_qi0z0kY61V601krRPjQyHA","callback").pipe((0,p.U)(()=>!0),(0,g.K)(()=>(0,l.of)(!1)))}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(c.eN))},e.\u0275cmp=o.Xpm({type:e,selectors:[["ll-google-location-map"]],decls:2,vars:3,consts:[[4,"ngIf"],[1,"ll-google-map",3,"options"]],template:function(e,t){1&e&&(o.YNc(0,z,2,1,"div",0),o.ALo(1,"async")),2&e&&o.Q6J("ngIf",o.lcZ(1,1,t.apiLoaded))},directives:[a.O5,v],pipes:[a.Ov],styles:[""]}),e})();const M=[{path:"",component:(()=>{class e{constructor(){this.particlesOptions={particles:{color:{value:["#ffffff","#ffffff"]},size:{value:1},lineLinked:{enable:!0,color:"random"},move:{enable:!0,speed:1}}}}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["ll-contact"]],decls:63,vars:4,consts:[[1,"_hero","pt-32","pb-32","bg-white-100","text-center",2,"padding-bottom","1vh !important"],[1,"container",2,"background-color","#4a7e4a !important","padding-top","2vh"],[2,"color","white"],[1,"breadcrumb","flex","justify-center","items-center"],[1,"px-1","mr-3","text-white-500","hover:text-white",2,"color","white",3,"routerLink"],["href","javascript:void(0)",1,"text-accent"],[1,"_hero__particles","hidden","md:block",2,"max-height","20vh",3,"id","options"],[1,"pt-10"],[1,"container"],[1,"grid","grid-cols-12","gap-4","lg:gap-8","xxl:gap-16"],[1,"contact__form","col-span-12","lg:col-span-7"],[1,"mb-8"],[1,"flex","flex-wrap","sm:flex-nowrap","sm:space-x-5","mt-3"],["type","text","placeholder","Your Name",1,"border","border-gray-200","p-2","px-4","w-full","sm:w-1/2","rounded-sm"],["type","number","placeholder","Your Number",1,"border","border-gray-200","p-2","px-4","w-full","sm:w-1/2","rounded-sm","mt-3","sm:mt-0"],["type","email","placeholder","Your Email",1,"border","border-gray-200","p-2","px-4","w-full","rounded-sm","mt-5"],["type","text","placeholder","Subject",1,"border","border-gray-200","p-2","px-4","w-full","rounded-sm","mt-5"],["cols","10","rows","3","placeholder","Tell us about desired property",1,"border","border-gray-200","p-3","mt-5","w-full","rounded-sm","mt-5",3,"value"],[1,"px-5","py-2","bg-accent","text-white","mt-5","rounded","font-medium"],[1,"col-span-12","lg:col-span-5","bg-black","bg-opacity-90","text-white","rounded","p-8","xxl:px-16","mt-10","lg:mt-0"],[1,"flex","space-x-4","mt-14"],[1,"flex","pt-1","bg-purple-600","rounded-lg"],["color","accent"],[1,"flex-1"],["href","callto:125512556523",1,"text-gray-300","font-semibold","hover:text-accent"],["href","callto:125512556523",1,"text-gray-300","font-semibold","hover:text-accent","mt-2","inline-block"],[1,"flex","space-x-4","mt-8"],["href","mailto:mail@example.com",1,"text-gray-300","font-semibold","hover:text-accent"],["href","mailto:mail@example.com",1,"text-gray-300","font-semibold","hover:text-accent","mt-2","inline-block"],["target","_blank","href","https://www.google.com/maps/@23.6982376,90.3462922,19.25z",1,"text-gray-300","hover:text-accent","font-semibold"],[1,"col-span-12","mt-5"]],template:function(e,t){1&e&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"h3",2),o._uU(3,"Contact Us"),o.qZA(),o.TgZ(4,"nav",3),o.TgZ(5,"a",4),o._uU(6,"Home"),o.qZA(),o.TgZ(7,"a",5),o._uU(8,"Contact"),o.qZA(),o.qZA(),o._UZ(9,"ng-particles",6),o.qZA(),o.qZA(),o.TgZ(10,"div",7),o.TgZ(11,"div",8),o.TgZ(12,"div",9),o.TgZ(13,"div",10),o.TgZ(14,"div",11),o.TgZ(15,"h3"),o._uU(16,"Leave us a message"),o.qZA(),o.TgZ(17,"p"),o._uU(18,"You will receive a response within 24 hours from our team."),o.qZA(),o.qZA(),o.TgZ(19,"form"),o.TgZ(20,"div",12),o._UZ(21,"input",13),o._UZ(22,"input",14),o.qZA(),o._UZ(23,"input",15),o._UZ(24,"input",16),o.TgZ(25,"textarea",17),o._uU(26,"          "),o.qZA(),o.TgZ(27,"button",18),o._uU(28,"Send Message"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(29,"div",19),o.TgZ(30,"h3"),o._uU(31,"Contact info"),o.qZA(),o.TgZ(32,"div",20),o.TgZ(33,"div",21),o.TgZ(34,"mat-icon",22),o._uU(35,"settings_phone"),o.qZA(),o.qZA(),o.TgZ(36,"div",23),o.TgZ(37,"a",24),o._uU(38,"+1255 - 1255 - 6523"),o.qZA(),o._UZ(39,"br"),o.TgZ(40,"a",25),o._uU(41,"+1255 - 1255 - 6523"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(42,"div",26),o.TgZ(43,"div",21),o.TgZ(44,"mat-icon",22),o._uU(45,"mail_outline"),o.qZA(),o.qZA(),o.TgZ(46,"div",23),o.TgZ(47,"a",27),o._uU(48,"mail@example.com"),o.qZA(),o._UZ(49,"br"),o.TgZ(50,"a",28),o._uU(51,"mail@example.com"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(52,"div",26),o.TgZ(53,"div",21),o.TgZ(54,"mat-icon",22),o._uU(55,"map"),o.qZA(),o.qZA(),o.TgZ(56,"div",23),o.TgZ(57,"a",29),o._uU(58," Bowery St, New York, "),o._UZ(59,"br"),o._uU(60," NY 10013, USA "),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(61,"div",30),o._UZ(62,"ll-google-location-map"),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&e&&(o.xp6(5),o.Q6J("routerLink","/"),o.xp6(4),o.Q6J("id","product_hero")("options",t.particlesOptions),o.xp6(16),o.Q6J("value",""))},directives:[s.yS,r.nH,n.Hw,w],styles:[""]}),e})()}];let A=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[s.Bz.forChild(M)],s.Bz]}),e})();var q=i(1703);let k=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[a.ez,A,q.m,x,c.Ed,r.Ae]]}),e})()}}]);