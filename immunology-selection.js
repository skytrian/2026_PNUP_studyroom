(()=>{
const root=document.getElementById("selectionContent");
if(!root)return;
const units=[
{page:1,title:"면역시스템의 기본 원리와 적응면역",topics:[
["면역의 두 축","미생물에 대한 방어는 초기의 <b>선천면역(Innate immunity)</b> 반응과 뒤이어 나타나는 <b>적응면역(Adaptive immunity)</b> 반응이 협력하여 수행한다.",["선천면역은 여러 미생물 집단이 공유하는 분자 구조와 손상된 숙주세포의 신호를 인식한다.","적응면역은 미생물 및 비미생물 항원 각각에 특이적으로 반응하며, 반복 노출 시 <b>면역학적 기억(Immunologic memory)</b>이 강화된다."]],
["적응면역의 핵심 특징","적응면역은 서로 다른 항원을 구별하는 <b>특이성(Specificity)</b>, 다양한 항원을 인식하는 <b>다양성(Diversity)</b>, 항원 노출을 기억하는 <b>기억(Memory)</b>, 외부 항원과 자기 항원을 구별하는 능력을 갖는다.",["항원에 특이적인 림프구가 활성화되어 증식하고 분화한다.","항원 제거에는 여러 효과기 세포(Effector cells)가 함께 참여할 수 있다."]],
["능동면역과 수동면역","면역은 항원에 대한 자신의 반응으로 획득하는 <b>능동면역(Active immunity)</b>과 항체 또는 효과기 세포를 전달받는 <b>수동면역(Passive immunity)</b>으로 구분한다.",["능동면역: 자신의 면역반응으로 형성된다.","수동면역: 외부에서 전달된 항체 또는 효과기 세포가 방어를 제공한다."]],
["림프구와 면역 유형","<b>림프구(Lymphocytes)</b>는 항원을 특이적으로 인식할 수 있는 세포이며, 주요 하위 집단은 B세포와 T세포이다.",["각 림프구 클론(Clone)은 고유한 항원 수용체와 특이성을 가진다.","<b>체액성 면역(Humoral immunity)</b>: B세포에서 분화한 형질세포(Plasma cell)가 분비하는 항체가 세포 외 미생물 방어에 중요하다. 항체는 미생물을 중화(Neutralization)하고 식세포 및 보체(Complement)를 통한 제거를 촉진한다.","<b>세포매개 면역(Cell-mediated immunity)</b>: T세포와 그 산물이 세포 내 미생물 방어에 중요하다. CD4 보조 T세포(Helper T cell)는 대식세포의 미생물 제거와 B세포의 항체 생성을 돕고, CD8 세포독성 T세포(Cytotoxic T lymphocyte, CTL)는 세포 내 병원체를 가진 세포를 죽인다."]]]},
{page:2,title:"면역계의 세포와 조직 구조",topics:[
["면역계의 공간적 구성","면역세포와 면역조직의 해부학적 배치는 효과적인 선천·적응면역 반응을 만드는 데 중요하다.",["호중구(Neutrophils)와 단핵구(Monocytes)는 감염 부위로 빠르게 이동할 수 있다.","항원 특이 림프구 수가 적더라도, 항원이 몸 어디에 들어왔는지와 관계없이 항원을 찾아 반응할 수 있도록 조직이 구성되어 있다."]],
["주요 면역세포","선천면역과 적응면역의 효과기 기능은 여러 식세포와 림프구가 분담한다.",["호중구(Neutrophil): 분엽핵과 풍부한 리소좀 과립을 가지며 감염·조직 손상 부위에 빠르게 모여 식균작용(Phagocytosis)과 미생물 살해를 수행한다.","조직 거주 대식세포(Tissue-resident macrophage): 조직의 감시 세포(Sentinel cell)로 미생물을 감지하고 면역계에 경고하며, 조직별 특수 기능을 수행한다.","단핵구(Monocyte): 혈액을 순환하다 감염·손상 부위로 이동해 대식세포 등으로 분화하고, 미생물·죽은 세포를 섭취하며 사이토카인과 케모카인을 분비한다.","수지상세포(Dendritic cell, DC): 조직 감시와 항원제시(Antigen presentation)를 수행하며, 미경험 T세포(Naive T cell)를 활성화할 수 있는 전문 항원제시세포(APC)이다.","선천림프구(Innate lymphoid cells, ILCs): 림프구와 비슷한 형태로 사이토카인을 만들며 효과기 T세포와 유사한 기능을 수행한다. NK세포도 여기에 포함되며, 클론별로 다양하게 재배열된 항원 수용체는 발현하지 않는다.","B·T 림프구는 다양하고 특이적인 항원 수용체를 발현하여 적응면역의 특이성과 기억을 담당한다."]],
["CD 명명법","면역세포의 표면 분자는 세포 종류와 하위 집단에 따라 다르게 발현되며, CD(Cluster of Differentiation) 명명법으로 구분한다.",["CD 표지자는 세포 집단을 식별하는 데 활용된다.","세포의 정체는 단일 표지자만이 아니라 표지자 조합과 실험 맥락을 함께 고려한다."]]]},
{page:3,title:"림프구 발달·성숙·순환과 림프기관",topics:[
["B세포와 T세포의 발달","B세포와 T세포는 모두 골수(Bone marrow)의 공통 전구세포에서 유래하지만 성숙 장소가 다르다.",["B세포는 골수에서 발달·성숙한다.","T세포 전구세포는 흉선(Thymus)으로 이동하여 성숙한다.","성숙한 B·T세포는 혈액 순환에 들어가 말초 림프기관(Peripheral lymphoid organs)에 자리 잡는다."]],
["Naive·효과기·기억 림프구","미경험 림프구(Naive lymphocyte)는 성숙했지만 항원에 의해 아직 자극받지 않은 림프구이다.",["항원을 만나면 림프구는 증식(Proliferation)하고 효과기 세포(Effector cell)로 분화한다.","효과기 B세포는 항체를 분비하는 형질세포(Plasma cell)이다.","효과기 T세포에는 사이토카인을 분비하는 CD4 보조 T세포와 CD8 CTL이 포함된다.","일부 자손 세포는 오래 생존하는 기억세포(Memory cell)가 되어 같은 항원에 다시 노출될 때 더 빠르고 강한 반응을 가능하게 한다."]],
["일차·이차 림프기관","일차(Primary/generative) 림프기관은 림프구가 성숙하는 곳이고, 이차(Secondary/peripheral) 림프기관은 항원에 의해 림프구가 활성화되는 곳이다.",["일차 림프기관: 골수와 흉선.","이차 림프기관: 림프절(Lymph node), 비장(Spleen), 점막 및 피부 면역계."]],
["림프절과 비장","조직액은 림프관을 통해 림프절로 배액되고, 미생물 항원은 용해된 형태 또는 DC 내부에 실려 림프절에 도달한다.",["림프절은 말초 조직에서 온 림프 항원을 림프구가 만나는 피막성 이차 림프기관이다.","비장은 혈액 속 노화 또는 옵소닌화된 혈구를 제거하며 혈액을 통해 들어온 항원에 대한 림프구 반응을 조직화한다.","림프절과 비장의 백색수(White pulp)에는 B세포 여포(Follicle)와 T세포 구역이 구분되어 있다.","성숙 DC는 T세포 구역에서 미경험 T세포 활성화를 돕는다."]],
["림프기관의 기질세포","섬유아세포성 망상세포(Fibroblastic reticular cells, FRCs)는 이차 림프기관의 구조와 기능에 필수적인 특수 근섬유아세포이다.",["FRC는 케모카인(Chemokines)을 만들고 FRC 도관(FRC conduits)을 형성해 림프구와 DC의 방향성 이동 및 B/T세포 구역 분리를 돕는다.","여포 수지상세포(Follicular dendritic cells)는 FRC와 관련되며 B세포 여포의 구조와 기능에 필요하다.","이차 림프조직의 발달에는 사이토카인과 림프조직 유도세포(Lymphoid tissue inducer cells)가 관여한다."]]]},
{page:4,title:"백혈구 이동과 케모카인",topics:[
["혈관 밖 유출","백혈구가 혈액에서 조직으로 이동하는 <b>혈관 밖 유출(Leukocyte extravasation/migration)</b>은 주로 후모세혈관 세정맥(Postcapillary venules)에서 일어나며, 백혈구와 혈관 내피의 접착분자 및 케모카인에 의존한다.",["이동은 혈관 내피에 약하게 붙고 구르는 단계에서 시작해 단단한 부착과 내피세포 사이 통과로 이어진다."]],
["Selectin과 Integrin","셀렉틴(Selectins)은 탄수화물 결합 접착분자로, 백혈구와 내피세포 사이의 낮은 친화도 결합과 구름(Rolling)을 매개한다.",["E-selectin과 P-selectin은 활성화된 내피세포에 발현되어 백혈구의 셀렉틴 리간드에 결합한다.","L-selectin은 백혈구에 발현되어 내피세포의 리간드에 결합한다.","인테그린(Integrins)은 백혈구가 활성화된 내피에 단단히 부착(Firm adhesion)하는 데 관여한다.","주요 결합쌍: LFA-1–ICAM-1, VLA-4–VCAM-1."]],
["이동의 순서","백혈구 이동은 순차적인 상호작용으로 진행된다.",["1) Selectin–selectin ligand 결합으로 약한 부착과 rolling.","2) 내피에 제시된 chemokine이 백혈구의 chemokine receptor에 결합해 integrin 친화도를 높인다.","3) 활성화된 integrin이 내피의 Ig superfamily ligand에 결합해 firm adhesion을 만든다.","4) 백혈구가 내피세포 사이의 접합부를 통과해 조직으로 이동한다.","감염 부위의 케모카인과 기타 신호는 백혈구 integrin의 친화도를 높이고, TNF 및 IL-1 같은 사이토카인은 내피의 integrin ligand 발현을 증가시킨다."]],
["케모카인과 이동 방향","케모카인(Chemokines)은 백혈구가 언제·어디로 이동할지 조절하고, 림프기관에서 림프구와 DC의 기능적 위치를 조직화하는 단백질군이다.",["케모카인은 백혈구의 케모카인 수용체(Chemokine receptor)에 결합해 integrin 활성과 이동을 조절한다.","케모카인 농도 기울기(Concentration gradient)는 세포 이동 방향을 안내한다.","백혈구 종류와 분화 단계에 따라 발현하는 케모카인 수용체가 다르며, 조직과 염증 상태에 따라 존재하는 케모카인도 달라진다."]]]},
{page:5,title:"선천면역의 구성과 병원체 인식",topics:[
["선천면역의 특징","선천면역(Innate immunity)은 적응면역이 충분히 발달하기 전에 작동하는 첫 번째 방어선이며, 미생물에 노출되기 전부터 방어 기전을 갖고 있다.",["구성 요소: 상피 장벽(Epithelial barriers), 호중구, 대식세포, NK세포, 불변 수용체를 가진 림프구, 비만세포(Mast cells) 등."]],
["PAMP와 DAMP","패턴인식수용체(Pattern recognition receptors, PRRs)는 세포막·엔도솜·세포질에 존재하며 선천면역의 인식에 관여한다.",["병원체연관분자패턴(Pathogen-associated molecular patterns, PAMPs)은 여러 미생물이 공유하고 포유류 세포에는 일반적으로 존재하지 않으며, 미생물 생존에 중요한 구조인 경우가 많다.","손상연관분자패턴(Damage-associated molecular patterns, DAMPs)은 숙주 유래 분자라도 발현이나 위치가 세포 손상을 나타낼 때 인식되는 신호이다."]],
["주요 패턴인식수용체","다양한 수용체가 미생물 성분을 인식한다.",["Toll-like receptors (TLRs): 세포 표면과 엔도솜에서 세균 세포벽 성분 및 미생물 핵산 등을 인식한다.","RIG-I-like receptors (RLRs): 세포질의 바이러스 RNA를 인식한다.","Cytosolic DNA sensors (CDSs): 세포질의 미생물 DNA를 감지한다.","NOD-like receptors (NLRs): 세균 세포벽 성분 등을 인식하며, 여러 inflammasome의 인식 구성 요소로도 작동한다."]],
["PRR 신호와 유전자 발현","TLR·NLR·RLR 등의 패턴인식수용체는 전사인자(Transcription factors) 신호를 활성화한다.",["NF-κB는 사이토카인, 공자극분자(Costimulators), 염증 관련 분자의 발현을 촉진한다.","인터페론 조절인자(IRF)는 항바이러스 제1형 인터페론(Type I interferon, IFN) 유전자 발현을 촉진한다."]]]},
{page:6,title:"선천면역의 실행과 조절",topics:[
["NK세포의 기능과 인식","자연살해세포(Natural killer cells, NK cells)는 세포독성 기능을 수행하고 IFN-γ를 분비하여 세포독성 T세포와 유사한 일부 기능을 한다.",["NK세포는 감염된 세포를 죽이고, IFN-γ를 통해 대식세포 활성화를 지원한다.","NK세포의 표적 인식은 활성화 수용체와 억제 수용체의 균형으로 조절된다.","억제 수용체는 정상 세포의 MHC class I을 인식한다. 따라서 MHC I 발현이 낮아진 일부 감염 세포는 제거될 수 있다."]],
["식세포와 염증","호중구와 대식세포는 미생물을 포식하고 식포-리소좀(Phagolysosome)에서 활성산소종(ROS), 산화질소(NO), 효소 등을 이용해 살해한다.",["단핵구는 혈액에서 염증 부위로 이동해 조직 대식세포의 전구세포 역할을 한다.","PAMP와 DAMP에 자극된 조직세포가 만드는 사이토카인과 케모카인은 호중구·단핵구 유입을 돕는다.","대식세포는 염증을 촉진하는 사이토카인을 만들며 감염 부위의 조직 복구(Tissue repair)에도 기여한다.","식세포는 TLR, C-type lectin, scavenger receptor, N-formyl peptide receptor 등 여러 수용체로 미생물 산물을 인식한다."]],
["선천면역과 적응면역의 연결","선천면역 중 생성된 분자는 적응면역을 자극하고 적응면역 반응의 성격에도 영향을 준다.",["미생물에 의해 활성화된 DC는 사이토카인과 공자극분자를 만들어 T세포 활성화 및 효과기 T세포 분화를 강화한다.","대체 보체 경로(Alternative pathway)에서 생성된 보체 조각은 B세포 활성화와 항체 생성의 보조 신호를 제공할 수 있다."]],
["음성 피드백과 조절","선천면역은 조직 손상을 제한하기 위한 음성 피드백(Negative feedback) 기전을 갖는다.",["IL-10은 대식세포와 DC의 활성화를 억제하는 사이토카인이다.","자가포식(Autophagy) 관련 유전자 산물은 염증성 사이토카인 분비 조절에 관여한다.","음성 신호전달 경로는 PRR 및 염증성 사이토카인으로부터 발생한 활성화 신호를 차단하거나 낮춘다."]]]},
{page:7,title:"항체의 기본 구조·종류·항원",topics:[
["항체의 기본 역할","항체(Antibodies), 즉 면역글로불린(Immunoglobulins, Igs)은 B림프구가 막 결합형 또는 분비형으로 만드는 당단백질이다.",["막 결합 항체는 B세포 수용체(B-cell receptor, BCR)로 작용하여 항원에 의한 B세포 활성화를 매개한다.","분비 항체는 미생물·독소를 중화하고 여러 효과기 기전을 동원해 결합한 항원을 제거한다."]],
["항체의 분자 구조","항체의 공통 구조는 서로 동일한 중쇄(Heavy chains) 2개와 경쇄(Light chains) 2개로 이루어진 대칭 구조이다.",["각 사슬은 약 110개 아미노산으로 된 면역글로불린 도메인(Ig domains)을 포함하며, 사슬 내 이황화 결합(Disulfide bonds)이 구조를 안정화한다.","중쇄와 경쇄의 N-말단 가변 영역(Variable regions, V regions)이 항체 특이성에 관여한다.","각 V 영역에는 3개의 고변이 영역(Hypervariable regions)이 있으며, 공간적으로 모여 항원 결합 부위(Antigen-combining site)를 형성한다."]],
["항체 종류와 기능","항체의 동형(Isotype)은 중쇄 불변 영역(Constant region, C region)의 차이에 따라 분류한다.",["주요 항체 종류: IgM, IgD, IgG, IgE, IgA.","한 항체 분자 내 경쇄는 κ 또는 λ 중 한 유형이다.","항체의 많은 효과기 기능은 중쇄 C 영역이 매개하지만, 이러한 기능은 V 영역의 항원 결합 부위에 항원이 결합하면서 촉발된다.","단클론항체(Monoclonal antibodies)는 하나의 B세포 클론에서 유래해 하나의 항원 결정기(Antigenic determinant)를 인식하며, 연구·진단·치료에 활용된다."]],
["항원과 에피토프","항원(Antigen)은 항체 또는 T세포 항원 수용체(T-cell receptor, TCR)에 특이적으로 결합하는 물질이다.",["항체는 당, 지질, 탄수화물, 단백질, 핵산 등 다양한 생물학적 분자와 결합할 수 있다.","대부분의 TCR은 펩타이드(Peptide) 항원을 인식한다.","큰 항원 분자는 여러 에피토프(Epitopes, antigenic determinants)를 포함할 수 있다.","선형 에피토프(Linear epitope)는 인접한 아미노산 서열로 이루어지고, 입체형 에피토프(Conformational epitope)는 폴리펩타이드 접힘으로 공간상 가까워진 잔기들로 형성된다."]]]},
{page:8,title:"항체-항원 결합과 면역반응 중 항체 변화",topics:[
["친화도와 결합력","친화도(Affinity)는 하나의 항체 결합 부위와 하나의 에피토프 사이의 결합 강도이며, 결합 자료로부터 계산한 해리상수(Kd) 등으로 표현할 수 있다.",["다가 항원(Polyvalent antigen)은 동일한 에피토프를 여러 개 포함할 수 있다.","항체는 여러 결합 부위를 동시에 사용해 항원에 결합할 수 있다. IgM은 최대 10개의 동일 에피토프에 동시에 결합할 수 있어 전체 결합력(Avidity)이 커질 수 있다."]],
["면역복합체와 교차반응","다가 항원과 항체의 상대 농도에 따라 면역복합체(Immune complexes)가 형성될 수 있으며, 조직에 침착하면 손상을 일으킬 수 있다.",["항체는 작은 화학 구조 차이도 구별할 정도로 특이적일 수 있다.","구조가 유사한 둘 이상의 항원이 같은 항체에 결합하는 교차반응(Cross-reaction)도 가능하다."]],
["항체의 반응 중 변화","하나의 B세포 클론이 만드는 항체는 면역반응 과정에서 구조적 변화를 겪을 수 있다.",["초기 B세포는 막 결합 Ig를 만든다. 활성화된 B세포와 형질세포는 원래 막 결합 수용체와 같은 항원 결합 특이성을 가진 Ig를 분비할 수 있다.","동형전환(Isotype switching)은 V 영역을 바꾸지 않고 C 영역 유전자 구성을 바꾸어 항원 특이성은 유지하면서 효과기 기능을 바꾼다.","친화도 성숙(Affinity maturation)은 항원 특이 항체의 V 영역에 점돌연변이(Point mutations)가 축적되고, 그중 항원에 더 높은 친화도를 가진 변이가 선택되는 과정이다."]]]}
];
const esc=s=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
let active=0;
root.innerHTML='<div class="selection-intro card"><span class="pill">PROFESSOR’S SUMMARY · KOREAN + ENGLISH</span><h2>교수님 요약본 정리</h2><p>첨부된 「면역 중간 영어 요약본」의 내용을 페이지 순서에 맞춰 한국어로 정리했습니다. 주요 개념과 전문 용어는 영어를 병기했습니다. 아래 페이지 필터 또는 검색으로 원하는 내용을 찾을 수 있습니다.</p><div class="selection-controls"><div id="selectionPages" class="chapters"></div><input id="selectionSearch" class="search" type="search" placeholder="용어·개념 검색 (예: affinity, TLR, lymph node)" aria-label="교수님 요약본 검색"></div><div id="selectionCount" class="muted" aria-live="polite"></div></div><div id="selectionResults"></div><p class="footnote">정리 기준: 사용자가 첨부한 교수님 요약 PDF 8쪽. 요약본에 없는 세부 사항은 임의로 추가하지 않았습니다.</p>';
const pages=root.querySelector("#selectionPages"),search=root.querySelector("#selectionSearch"),results=root.querySelector("#selectionResults"),count=root.querySelector("#selectionCount");
pages.innerHTML='<button class="chbtn active" data-page="0">전체 8쪽</button>'+units.map(u=>'<button class="chbtn" data-page="'+u.page+'">p.'+u.page+'</button>').join("");
function render(){
 const q=search.value.trim().toLocaleLowerCase();
 const shown=units.filter(u=>(!active||u.page===active)&&(!q||(u.title+" "+u.topics.map(t=>t[0]+" "+t[1]+" "+t[2].join(" ")).join(" ")).toLocaleLowerCase().includes(q)));
 count.textContent=shown.length+"개 페이지 표시 · "+(active?"PDF "+active+"쪽":"전체 PDF")+" · 검색어 "+(q||"없음");
 results.innerHTML=shown.length?shown.map(u=>'<section class="selection-page"><div class="selection-page-head"><span class="pill">PDF PAGE '+u.page+'</span><h2>'+esc(u.title)+'</h2></div><div class="selection-grid">'+u.topics.map((t,i)=>'<article class="card selection-topic"><h3><span class="selection-number">'+(i+1)+'</span>'+t[0]+'</h3><p>'+t[1]+'</p><ul class="bullet">'+t[2].map(b=>'<li>'+b+'</li>').join("")+'</ul></article>').join("")+'</div></section>').join(""):'<div class="empty">검색 결과가 없습니다. 다른 영어 용어 또는 한국어 개념을 입력해 보세요.</div>';
 pages.querySelectorAll("[data-page]").forEach(b=>b.classList.toggle("active",Number(b.dataset.page)===active));
}
pages.querySelectorAll("[data-page]").forEach(b=>b.addEventListener("click",()=>{active=Number(b.dataset.page);render()}));
search.addEventListener("input",render);
render();
})();