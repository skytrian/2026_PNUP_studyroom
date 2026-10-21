(()=> {
const extra={
1:[
{title:"면역계의 구성과 방어 범위",body:"면역계는 감염성 미생물뿐 아니라 비감염성 이물질, 손상 세포의 산물, 악성 세포의 생성물에도 반응합니다. 면역반응은 여러 세포와 분자가 협동하는 과정입니다.",bullets:["Immunity: 질병으로부터의 보호","Immune system: 숙주 방어에 관여하는 세포와 분자","Immune response: 침입 인자에 대한 세포·분자의 협동 반응","면역학의 핵심 관점: 자기와 비자기의 구별"]},
{title:"선천면역과 적응면역의 비교",priority:true,body:"선천면역은 미생물 집단이 공유하는 보존 패턴과 손상 신호를 빠르게 인식합니다. 적응면역은 매우 다양한 항원 특이적 수용체를 이용하며 기억 반응이 발달합니다.",compare:["선천면역: 빠른 반응, PRR, 제한적인 다양성, 기억은 제한적","적응면역: 초기 반응 형성에 시간 필요, BCR/TCR, 높은 다양성, 기억 형성"],bullets:["선천면역도 인식 특이성이 전혀 없는 것은 아님","적응면역의 특이성은 항원 또는 epitope 수준에서 나타남"]},
{title:"체액성 면역과 세포매개 면역",body:"체액성 면역은 B세포에서 분화한 형질세포가 분비하는 항체를 중심으로 작동하고, 세포매개 면역은 T세포가 감염 세포를 제거하거나 다른 면역세포를 조절하는 데 중심 역할을 합니다.",compare:["Humoral: B cell → plasma cell → antibody","Cell-mediated: helper T cell의 조절·지원, cytotoxic T cell의 표적 세포 제거"],bullets:["항체는 세포 외 미생물·독소 방어에 중요","TCR은 일반적으로 APC가 MHC에 제시한 peptide를 인식"]},
{title:"능동면역·수동면역의 획득 경로",priority:true,body:"능동면역은 자신의 면역계가 항원에 반응해 형성되고 기억이 생길 수 있습니다. 수동면역은 이미 만들어진 항체 등을 전달받아 즉시 보호를 제공하지만, 전달받은 항체 자체가 수혜자의 항원 특이적 기억을 만들지는 않습니다.",bullets:["자연 능동면역: 감염 후 면역 형성","인공 능동면역: 백신 접종","자연 수동면역: 태반을 통한 모체 IgG, 모유의 항체","인공 수동면역: 면역글로불린 또는 항체 제제 투여"]},
{title:"1차·2차 면역반응과 클론 선택",priority:true,body:"각 림프구 클론은 고유한 항원 특이성을 가집니다. 항원에 맞는 클론이 선택된 뒤 증식하고 효과기세포 및 기억세포로 분화합니다. 기억세포는 같은 항원에 재노출되었을 때 더 빠른 반응을 가능하게 합니다.",flow:["항원 인식","특이 클론 선택","클론 증식","효과기·기억세포 분화"],bullets:["형질세포는 항체 분비에 특화된 B세포 분화 상태","기억 B/T 세포는 재노출 시 반응을 촉진"]},
{title:"C3d와 B세포의 보조 활성화 신호",priority:true,body:"항원에 붙은 보체 조각 C3d가 B세포의 CR2(CD21) 보조수용체에 결합하면 BCR이 제공하는 신호를 보강할 수 있습니다. 이는 보체가 선천면역과 적응면역을 연결하는 예입니다.",bullets:["BCR: 항원 특이적 주 신호","C3d–CR2(CD21): B세포 보조 신호","항체와 보체의 기능은 서로 연계될 수 있음"]}
],
2:[
{title:"조혈과 면역세포의 계통",priority:true,body:"조혈모세포(HSC)는 자기 갱신 능력과 여러 혈액세포로 분화할 수 있는 능력을 가집니다. 림프계·골수계 전구세포로 분화한 뒤에는 각 계통의 세포가 성숙합니다.",bullets:["HSC: self-renewal 및 multipotent differentiation","골수계 계통: monocyte/macrophage, neutrophil, eosinophil, basophil 등","림프계 계통: B cell, T cell, NK cell 등","DC는 강의 정리에서 골수계와 림프계 모두와 관련될 수 있다고 설명"]},
{title:"대식세포·호중구·호산구·알레르기 관련 세포",priority:true,body:"면역세포는 과립 성분, 존재 위치, 주요 기능으로 구분합니다. 대식세포는 탐식과 항원제시를 수행할 수 있고, 호중구는 급성 염증 초기의 빠른 탐식 방어에 중요합니다.",bullets:["Macrophage: phagocytosis, 항원제시, 염증 조절; 조직에 따라 microglia(뇌), Kupffer cell(간), alveolar macrophage(폐) 등으로 불림","Neutrophil: 감염 부위에 빠르게 도달하며 azurophilic granule과 여러 효소를 가짐","Eosinophil: 기생충 방어·알레르기, Major Basic Protein(MBP) 포함 과립","Basophil: 혈액 순환, 알레르기 반응에 관여","Mast cell: 주로 조직·혈관 주변에 위치하고 histamine 분비에 관여"]},
{title:"수지상세포(DC)와 소포 수지상세포(FDC)",priority:true,body:"일반적인 수지상세포는 항원을 포획·처리해 T세포에 제시하는 강력한 전문 APC입니다. FDC는 이름과 달리 일반 DC처럼 항원을 처리해 T세포에 제시하는 세포가 아니라, 여포에서 항원 복합체를 표면에 유지해 B세포 반응을 지원합니다.",compare:["Conventional DC: MHC I/II와 공자극분자 발현, naive T cell priming","FDC: MHC class II를 발현하지 않는 것으로 정리되며, 여포에서 항원을 표면에 유지해 B cell을 지원"],bullets:["DC의 CD80/CD86은 공자극에 관여","FDC–B cell–T follicular helper cell 협력은 고친화력 항체 반응과 연결"]},
{title:"T세포 아형과 Flow cytometry",priority:true,body:"유세포 분석에서 점 하나는 개별 세포를 의미합니다. CD3와 CD4/CD8의 조합을 이용해 T세포 집단을 구분하고, CD3와 CD19를 이용하면 기본적인 T/B 세포 구분을 할 수 있습니다.",bullets:["CD3+CD4+: helper T cell","CD3+CD8+: cytotoxic T cell/CTL","CD3+CD4+CD25+: Treg와 연관되는 표현형; 정밀 식별에는 추가 표지자 필요","CD3+CD4−CD8−: double negative(DN), CD3+CD4+CD8+: double positive(DP)","CD19+: B-cell lineage marker","Dot plot의 축과 gating 기준을 확인한 뒤 각 사분면의 세포 집단을 해석"]},
{title:"일차·이차 림프기관과 림프절 미세해부학",priority:true,body:"골수와 흉선은 림프구의 생성·성숙에 관여하는 일차 림프기관이고, 림프절·비장·점막 림프조직은 항원을 만나 면역반응을 조직화하는 이차 림프기관입니다.",bullets:["Lymph node: afferent lymphatic vessel → subcapsular sinus → medullary sinus → efferent lymphatic vessel","Outer cortex/follicle: B-cell zone; germinal center는 활성화된 B세포의 증식·친화력 성숙과 연관","Paracortex: T-cell zone; DC가 항원을 제시","Spleen: red pulp는 혈액세포·입자 여과, white pulp는 혈액 유래 항원에 대한 면역반응","MALT: 장·호흡기·비뇨생식기 등 점막과 관련된 림프조직"]},
{title:"FRC 도관과 림프구 이동 신호",body:"섬유아세포성 망상세포(FRC)는 림프절 내 기질 및 도관 네트워크를 형성해 세포와 물질의 이동을 지원합니다. 케모카인 신호는 T세포 구역과 B세포 여포로의 위치 지정을 돕습니다.",bullets:["T cell/DC의 CCR7은 CCL19·CCL21 신호와 연결","B cell의 CXCR5는 여포의 CXCL13 신호와 연결","Naive T cell은 high endothelial venule(HEV)을 통해 림프절로 들어올 수 있음"]}
],
3:[
{title:"Homing·Recruitment·Migration·Recirculation",body:"Homing은 세포가 특정 조직으로 찾아가는 성질, recruitment는 조직이 필요한 세포를 불러들이는 과정, migration은 세포 이동 자체를 뜻합니다. Recirculation은 면역세포가 혈액과 림프조직 등을 순환하는 과정입니다.",bullets:["Homing receptor와 케모카인 수용체가 조직 선택성에 기여","조직의 항원을 포착한 DC는 림프절로 이동해 T세포 반응을 유도할 수 있음","세포 표면의 수용체·접착분자 조합이 이동 위치를 결정하는 데 중요"]},
{title:"백혈구 혈관 외 유출 4단계",priority:true,body:"혈관 내 백혈구는 selectin 의존성 rolling 이후 chemokine에 의해 활성화되고, integrin을 통해 내피에 단단히 붙은 다음 혈관벽을 통과합니다.",flow:["Rolling","Chemokine activation","Firm adhesion","Transmigration / diapedesis"],bullets:["Rolling: selectin–탄수화물 리간드의 약한 결합","Activation: chemokine receptor 신호가 inside-out signaling 유도","Firm adhesion: integrin–ICAM/VCAM 결합","Transmigration: 내피 장벽을 통과해 조직으로 이동"]},
{title:"접착분자 계열과 대표 결합쌍",priority:true,body:"Selectin은 백혈구를 감속시키는 rolling 단계에, integrin은 단단한 부착에 중요합니다. 내피세포의 ICAM·VCAM은 integrin의 대표적인 결합 상대입니다.",bullets:["P-selectin/E-selectin: 활성화된 내피세포 표면","L-selectin: 백혈구 표면","LFA-1–ICAM-1: firm adhesion의 대표 조합","VLA-4–VCAM-1: firm adhesion의 대표 조합","Mucin-like 탄수화물 리간드는 selectin 결합에 관여","ICAM/VCAM은 immunoglobulin-superfamily CAM에 속함"]},
{title:"Chemokine의 역할과 integrin 활성화",priority:true,body:"Chemokine은 백혈구를 내피 주변으로 유인할 뿐 아니라 이동과 활성화를 유도합니다. Chemokine receptor 신호는 integrin을 저친화성 상태에서 고친화성 상태로 전환시켜 firm adhesion을 가능하게 합니다.",bullets:["Chemokine gradient는 이동 방향에 대한 신호 제공","Inside-out signaling은 integrin의 결합능을 변화시킴","Selectin을 차단하면 rolling에, integrin 또는 ICAM/VCAM을 차단하면 firm adhesion에 영향"]},
{title:"조직별 homing과 염증 부위 진입",body:"조직마다 다른 homing receptor가 세포의 이동 목적지를 결정합니다. 염증이 발생하면 내피의 접착분자 발현과 혈관 투과성 변화가 백혈구 유입을 돕습니다.",bullets:["장 점막으로 이동하는 림프구에는 조직 특이적인 homing receptor가 관여","혈관 투과성 증가는 염증 부위에서 혈장 성분·면역세포가 조직으로 이동하는 것과 연결","이동 단계별 분자를 표적하면 백혈구의 조직 유입을 조절할 수 있음"]}
],
4:[
{title:"상피 장벽과 항균 펩타이드",priority:true,body:"선천면역의 첫 방어선에는 상피 장벽과 항균 분자가 포함됩니다. Defensin은 양전하성 항균 펩타이드의 예로, 미생물 막과 상호작용해 방어에 기여합니다.",bullets:["상피 장벽은 병원체의 침입을 물리적·화학적으로 제한","AMP(antimicrobial peptide)는 미생물 막을 손상시킬 수 있음","강의 정리에서 defensin은 대표적인 cationic peptide로 제시됨"]},
{title:"PAMP·DAMP와 PRR",priority:true,body:"PRR은 미생물의 보존된 PAMP와 손상된 숙주에서 나오는 DAMP를 인식합니다. PAMP가 미생물 생존에 중요한 구조인 경우, 해당 구조의 변형만으로 면역 인식을 피하기 어려울 수 있습니다.",compare:["PAMP: 병원체와 관련된 보존 분자 패턴","DAMP: 숙주 세포 손상·조직 손상에서 유래한 신호"],bullets:["PRR은 BCR/TCR처럼 각 림프구에서 항원 특이적 유전자 재조합으로 만들어지는 수용체와 다름","Mannose receptor, scavenger receptor, CD14, TLR4 등이 대식세포의 미생물 인식과 연결"]},
{title:"PRR의 위치와 인식 대상",priority:true,body:"수용체의 위치를 리간드와 함께 묶어 외우세요. 핵산을 인식하는 일부 TLR은 endosome에 있고, RLR과 NLR은 세포질 신호 감지에 관여합니다.",bullets:["TLR3/7/9: 주로 endosome에서 핵산 인식","TLR4: LPS 인식에 관여하며 세포 표면 신호와 연결","RLR: 세포질 viral RNA 인식","NLR: 세포질의 미생물·손상 신호 인식; 일부 NLR은 inflammasome 형성","Inflammasome은 염증성 반응과 염증성 세포사멸(pyroptosis)에 연결될 수 있음"]},
{title:"PRR 하류 신호: NF-κB와 IRF",priority:true,body:"PRR 활성화 뒤에는 서로 다른 전사 조절 경로가 작동합니다. NF-κB는 염증성 사이토카인 유전자 발현과 연결되고, IRF3/IRF7은 Type I interferon 유도에 중요합니다.",compare:["NF-κB → 염증성 사이토카인","IRF3/IRF7 → Type I IFN (IFN-α/β)"],bullets:["문항에서는 respectively 같은 연결 표현을 주의해 읽기","Type I IFN은 항바이러스 상태 유도에 관여"]},
{title:"포식세포의 탐식·살균과 항원제시",body:"탐식세포는 미생물을 포획한 뒤 탐식포를 형성하고 리소좀과 융합해 분해할 수 있습니다. 일부 처리된 peptide는 MHC class II에 결합해 T세포에 제시됩니다.",flow:["표면 인식·부착","위족 형성 및 포획","Phagosome 형성","Lysosome과 융합·분해","일부 peptide 제시"],bullets:["대식세포는 탐식과 항원제시 모두 수행할 수 있음","산화적 살균에는 reactive oxygen/nitrogen species가 관여","Lysozyme과 defensin 등은 비산화적 방어의 예"]},
{title:"NK cell의 missing-self와 ADCC",priority:true,body:"NK cell은 항원 특이적 BCR/TCR 없이 감염 세포나 종양 세포를 공격할 수 있습니다. 정상 세포의 MHC class I 발현 감소는 억제 신호를 줄이는 missing-self 인식과 연결됩니다.",bullets:["Missing-self: MHC class I 감소 → 억제 신호 감소 → NK cell 살해 가능성 증가","ADCC: 표적에 결합한 IgG의 Fc 부위를 NK cell의 CD16(Fc receptor)이 인식","NKT cell은 TCR과 NK 계열 특성을 함께 가지며 CD1d가 제시하는 지질 항원을 인식할 수 있음"]}
],
5:[
{title:"항체의 기본 구조와 사슬",priority:true,body:"항체는 heavy chain과 light chain으로 구성됩니다. V region은 항원 인식에, constant region은 항체의 종류와 효과기 기능에 중요합니다.",bullets:["항체 하나의 두 light chain은 같은 isotype이어야 하며 κ 또는 λ 중 하나","Fab 쪽은 항원 결합에, Fc 쪽은 Fc receptor·보체 등 효과기 기능에 중요","항원 결합으로 항체 효과기 기능이 유도되며, 대부분의 효과기 기능은 heavy-chain constant region과 연결"]},
{title:"BCR·항체와 TCR의 항원 인식",priority:true,body:"항체/BCR은 단백질뿐 아니라 당·지질 등 다양한 형태의 항원을 인식할 수 있습니다. 일반적인 αβ TCR은 자유 항원 전체가 아니라 MHC에 제시된 peptide를 인식합니다.",compare:["Antibody/BCR: protein, carbohydrate, lipid 등 다양한 항원 형태","TCR: 일반적으로 MHC에 결합된 peptide"],bullets:["B cell은 항원을 직접 인식할 수 있음","T cell 반응은 항원제시와 MHC 제한성에 의존"]},
{title:"Affinity·Avidity·다가성",priority:true,body:"Affinity는 단일 항원결합 부위와 epitope 사이의 결합 강도이고, avidity는 여러 결합이 함께 형성될 때의 전체적인 결합 효과입니다. 항원과 항체의 다가성 및 상대적 농도는 면역복합체 형성에 영향을 줍니다.",compare:["Affinity: single binding interaction","Avidity: multivalent interactions combined"],bullets:["다가 항원은 여러 항체 결합 부위를 동시에 연결할 수 있음","큰 면역복합체의 조직 침착은 항원·항체의 상대적 농도와 복합체 형성 조건에 영향을 받음","V region의 체세포 점돌연변이와 선택은 affinity maturation과 연결"]},
{title:"MHC class I·II와 peptide 결합",priority:true,body:"MHC class I은 대부분의 유핵세포에서 발현되어 세포 내 유래 peptide를 CD8 T세포에 제시합니다. MHC class II는 전문 APC에서 주로 발현되어 외부 유래 peptide를 CD4 T세포에 제시합니다.",bullets:["MHC class II의 peptide-binding groove: α1 및 β1 도메인","MHC class I: CD8 cytotoxic T cell과 연결","MHC class II: CD4 helper T cell과 연결","TCR은 MHC와 peptide 복합체를 함께 인식"]},
{title:"FcRn과 IgG 반감기",priority:true,body:"FcRn(Neonatal Fc receptor)은 산성 endosome에서 IgG의 Fc 부위에 결합해 lysosome 분해를 피하도록 돕습니다. 이후 세포 표면의 중성 pH 환경에서 IgG가 방출되어 혈중 반감기가 연장됩니다.",flow:["IgG endocytosis","Acidic endosome: FcRn binds IgG Fc","Lysosomal degradation reduced","Recycling / release at neutral pH"],bullets:["FcRn은 IgG catabolism을 줄이는 데 중요","태반을 통한 모체 IgG 전달과도 연관"]},
{title:"Western blot·ELISA·Flow cytometry",priority:true,body:"실험법은 무엇을 분리·검출·정량하는지와 결과 형태를 연결해 구분합니다.",compare:["Western blot: 전기영동 분리 → membrane 전이 → 항체로 특정 단백질 검출","ELISA: 항원·항체 반응을 이용한 표적 검출/정량"],bullets:["Flow cytometry: 개별 세포의 산란·형광 신호를 이용해 세포 집단 분석","Immunofluorescence: 형광 표지를 통해 표적의 위치를 시각화","직접법은 표적 항체에 직접 표지를, 간접법은 2차 항체 등을 이용해 신호를 검출하며 신호 증폭이 가능"]}
]
};
for(let n=1;n<=5;n++)chapters[n].sections.push(...extra[n]);
const exp={
1:["재노출 시 기억 B/T 세포가 빠르게 반응하므로 2차 반응은 대체로 더 빠르고 강합니다.","능동면역은 자신의 면역계가 항원에 반응해 기억이 생길 수 있지만, 수동면역은 이미 만들어진 항체를 전달받아 직접적인 기억을 만들지 않습니다."],
2:["CD3는 T세포 계열, CD4/CD8은 대표적인 T세포 아형, CD19는 B세포 계열 표지자입니다. Dot plot의 점 하나는 개별 세포입니다.","Lymph node는 조직에서 유입되는 림프의 항원을, spleen은 혈액 유래 항원을 감시합니다."],
3:["Rolling → Chemokine-mediated activation → Firm adhesion → Transmigration 순서입니다. Selectin은 rolling, integrin–ICAM/VCAM은 firm adhesion에 핵심적입니다.","Chemokine receptor 신호가 inside-out signaling을 유도해 integrin을 고친화성 상태로 바꿉니다."],
4:["NF-κB는 염증성 사이토카인 발현, IRF3/IRF7은 Type I interferon(IFN-α/β) 발현과 연결됩니다.","RLR은 세포질 바이러스 RNA를 감지하고 TLR3/7/9 같은 핵산 감지 TLR은 주로 endosome에 있습니다.","MHC I 감소는 NK cell의 억제 신호를 낮춰 missing-self 반응을 유도할 수 있습니다."],
5:["FcRn은 산성 endosome에서 IgG Fc에 결합해 lysosomal degradation을 줄이고 IgG 반감기를 연장합니다.","Western blot은 분리한 단백질을 항체로 검출하고, ELISA는 표적을 검출·정량하며, flow cytometry는 개별 세포의 산란·형광 신호를 분석합니다.","Affinity는 단일 결합 부위의 결합 강도이고 avidity는 여러 결합의 전체 효과입니다."]
};
const diagrams=[
'<div class="visual"><a href="https://commons.wikimedia.org/wiki/File:Innate_and_Adaptive_Immunity.png" target="_blank" rel="noopener"><img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:FilePath/Innate_and_Adaptive_Immunity.png" alt="Innate and adaptive immunity diagram"></a><p class="muted">외부 참고 그림 1. 선천면역과 적응면역 · <a href="https://commons.wikimedia.org/wiki/File:Innate_and_Adaptive_Immunity.png" target="_blank" rel="noopener">Wikimedia Commons 출처·라이선스</a></p></div>',
'<div class="visual"><a href="https://commons.wikimedia.org/wiki/File:Innate_Immune_cells.svg" target="_blank" rel="noopener"><img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:FilePath/Innate_Immune_cells.svg" alt="Innate immune cell types"></a><p class="muted">외부 참고 그림 2. 선천면역 세포 유형(표지자 조합은 본문 정리 참고) · <a href="https://commons.wikimedia.org/wiki/File:Innate_Immune_cells.svg" target="_blank" rel="noopener">Wikimedia Commons 출처·라이선스</a></p></div>',
'<div class="visual"><a href="https://commons.wikimedia.org/wiki/File:Leukocyte-extravasationn.svg" target="_blank" rel="noopener"><img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:FilePath/Leukocyte-extravasationn.svg" alt="Leukocyte extravasation"></a><p class="muted">외부 참고 그림 3. 백혈구 혈관 외 유출 · <a href="https://commons.wikimedia.org/wiki/File:Leukocyte-extravasationn.svg" target="_blank" rel="noopener">Wikimedia Commons 출처·라이선스(CC BY-SA 4.0)</a></p></div>',
'<div class="visual"><a href="https://commons.wikimedia.org/wiki/File:Toll-like_receptor_pathways.svg" target="_blank" rel="noopener"><img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:FilePath/Toll-like_receptor_pathways.svg" alt="Toll-like receptor signaling pathways"></a><p class="muted">외부 참고 그림 4. Toll-like receptor 신호전달 경로 · <a href="https://commons.wikimedia.org/wiki/File:Toll-like_receptor_pathways.svg" target="_blank" rel="noopener">Wikimedia Commons 출처·라이선스(CC BY-SA 3.0)</a></p></div>',
'<div class="visual"><a href="https://commons.wikimedia.org/wiki/File:Antibody_structure.svg" target="_blank" rel="noopener"><img loading="lazy" src="https://commons.wikimedia.org/wiki/Special:FilePath/Antibody_structure.svg" alt="Antibody structure"></a><p class="muted">외부 참고 그림 5. 항체 구조 · <a href="https://commons.wikimedia.org/wiki/File:Antibody_structure.svg" target="_blank" rel="noopener">Wikimedia Commons 출처·라이선스</a></p></div>'
];
const qs=[
[1,"Which statement best describes immunological memory?",["A secondary response is generally faster and stronger","Innate immunity forms all antigen-specific memory","Repeated exposure always weakens the response","Memory is created only by transferred antibodies"],0,"기억 B/T 세포가 재노출 시 빠르게 반응하므로 2차 반응은 대체로 더 빠르고 강합니다."],
[1,"Which is naturally acquired passive immunity?",["Protection after vaccination","Maternal IgG transferred across the placenta","Antibody production after infection","Clonal expansion after antigen recognition"],1,"태반을 통한 모체 IgG 전달은 자연 수동면역입니다."],
[1,"Which cells use rearranged antigen-specific receptors?",["Neutrophils only","B and T lymphocytes","Red blood cells","Epithelial cells only"],1,"B세포와 T세포는 재조합된 항원 수용체로 특이적 항원을 인식합니다."],
[1,"What is the main outcome of clonal selection?",["All lymphocytes recognize the same antigen","Antigen-specific lymphocytes are selected and expand","Innate receptors undergo V(D)J recombination","Antibodies become TCRs"],1,"항원 특이적 림프구 클론이 선택되어 증식·분화합니다."],
[1,"Which complement fragment can support B-cell co-stimulation?",["C3d","C9 only","FcRn","ICAM-1"],0,"C3d–CR2(CD21) 결합은 B세포 보조 신호를 강화할 수 있습니다."],
[1,"Which is NOT a characteristic of adaptive immunity?",["Specificity","Memory","Self-tolerance","Inability to distinguish self from non-self"],3,"적응면역은 자기와 비자기를 구별하는 자가관용을 갖습니다."],
[2,"Which APC is most important for priming naive T cells?",["Eosinophil","Dendritic cell","Basophil","Erythrocyte"],1,"수지상세포는 항원 제시와 공자극 신호로 naive T cell을 활성화합니다."],
[2,"In a flow-cytometry dot plot, each dot usually represents:",["One antibody molecule","One individual cell","One chromosome","One cytokine"],1,"각 점은 개별 세포를 나타냅니다."],
[2,"Which marker combination identifies helper T cells?",["CD3+CD4+","CD19+CD8+","CD3−CD19−","CD3+CD19+"],0,"CD3+CD4+는 대표적인 helper T-cell 표지자 조합입니다."],
[2,"Which marker is commonly used for B-cell lineage?",["CD3","CD4","CD19","CD8"],2,"CD19는 B세포 계열을 구분하는 대표 표지자입니다."],
[2,"Which organ monitors blood-borne antigens?",["Lymph node","Spleen","Thymus","Bone marrow only"],1,"비장은 혈액 유래 항원을 감시하고 림프절은 림프의 항원을 여과합니다."],
[2,"Which eosinophil granule component is a key basic protein?",["FcRn","MBP","ICAM-1","CD3"],1,"MBP는 Major Basic Protein의 약어입니다."],
[2,"Which are primary lymphoid organs?",["Lymph node and spleen","Bone marrow and thymus","Spleen and MALT","Lymph node and MALT"],1,"골수와 흉선은 일차 림프기관입니다."],
[2,"Which marker combination is associated with cytotoxic T cells?",["CD3+CD8+","CD19+CD4+","CD3−CD8− only","CD19+CD3+"],0,"CD3+CD8+는 대표적인 cytotoxic T-cell 집단입니다."],
[3,"What is the correct sequence of leukocyte extravasation?",["Adhesion → rolling → activation → migration","Rolling → chemokine activation → firm adhesion → transmigration","Activation → migration → rolling → adhesion","Rolling → migration → activation → adhesion"],1,"Rolling → chemokine에 의한 integrin activation → firm adhesion → transmigration 순서입니다."],
[3,"Which molecules are most associated with leukocyte rolling?",["Selectins","MHC class II","FcRn","Immunoglobulin Fc"],0,"Selectin은 약한 결합으로 rolling을 매개합니다."],
[3,"Chemokines promote firm adhesion mainly by:",["Destroying integrins","Converting integrins to a high-affinity state","Removing all ICAM-1","Producing antibodies directly"],1,"Chemokine 신호는 inside-out signaling으로 integrin 친화도를 높입니다."],
[3,"LFA-1 binds which major endothelial ligand?",["CD19","ICAM-1","FcRn","C3d"],1,"LFA-1–ICAM-1 결합은 firm adhesion의 대표 조합입니다."],
[3,"P-selectin and E-selectin are primarily expressed on:",["Activated endothelial cells","All B cells only","Red blood cells","Secreted antibodies"],0,"P/E-selectin은 활성화된 내피세포에 발현됩니다."],
[3,"Blocking integrin activation most directly impairs:",["Antigen recombination","Firm adhesion","IgG recycling only","Antibody secretion only"],1,"Integrin 활성화가 차단되면 firm adhesion이 저해됩니다."],
[4,"PAMPs are best defined as:",["Conserved pathogen-associated molecular patterns","Host antibodies against self","Maternal antibodies","Peptides presented only by MHC II"],0,"PAMP는 병원체의 보존된 분자 패턴이며 PRR이 인식합니다."],
[4,"DAMPs initiate innate responses because they:",["Indicate host-cell or tissue damage","Are rearranged BCRs","Are only antibodies","Always represent live bacteria"],0,"DAMP는 손상된 숙주 세포나 조직에서 유래하는 신호입니다."],
[4,"Which receptor family mainly detects viral RNA in the cytosol?",["RLRs","FcRn","CD19","Selectins"],0,"RLR은 세포질의 바이러스 RNA를 감지합니다."],
[4,"NF-κB activation downstream of PRRs is associated with:",["Inflammatory cytokine gene expression","IgG recycling only","CD4-to-CD8 conversion","MHC peptide binding"],0,"NF-κB는 염증성 사이토카인 발현과 연결됩니다."],
[4,"Which factors are associated with Type I interferon induction?",["IRF3 and IRF7","CD3 and CD4","FcRn and CR2","ICAM-1 and VCAM-1"],0,"IRF3/IRF7은 IFN-α/β 발현 유도에 관여합니다."],
[4,"Why can reduced MHC class I increase NK-cell killing?",["It strengthens the inhibitory signal","It reduces inhibitory recognition of self MHC I","It converts NK cells into B cells","It directly produces IgG"],1,"MHC I 감소는 NK cell의 억제 신호를 낮춰 missing-self 반응을 유도할 수 있습니다."],
[4,"Which cytokine is an important negative regulator of macrophage activity?",["IL-10","IFN-α only","CD8","Erythropoietin"],0,"IL-10은 대표적인 항염증성 사이토카인입니다."],
[5,"The strength of one antigen-binding site interacting with one epitope is:",["Avidity","Affinity","Opsonization","Diapedesis"],1,"Affinity는 단일 결합 부위 수준의 결합 강도입니다."],
[5,"Which receptor helps extend IgG serum half-life?",["FcRn","CD3","LFA-1","RIG-I"],0,"FcRn은 IgG 분해를 줄여 반감기를 연장합니다."],
[5,"Which domains form the MHC class II peptide-binding groove?",["α1 and β1","α3 and β2-microglobulin","Fc and Fab","CD3 and CD4"],0,"MHC class II의 α1과 β1 도메인이 결합 홈을 형성합니다."],
[5,"Which technique separates proteins, transfers them to a membrane, and detects them with antibodies?",["ELISA","Western blot","Flow cytometry","Cell counting"],1,"Western blot은 단백질 분리, membrane transfer, 항체 검출 순서입니다."],
[5,"Which statement about TCR recognition is correct?",["TCR generally recognizes peptide presented by MHC","BCR only recognizes peptide-MHC complexes","TCR and antibody are identical","MHC II is the B-cell receptor"],0,"일반적인 αβ TCR은 MHC에 제시된 peptide를 인식합니다."]
];
const short=[
[1,"Name the theory explaining selective activation and expansion of antigen-specific lymphocyte clones.",["clonal selection theory","clonal selection"],"Clonal selection theory는 항원 특이적 클론의 선택과 증식을 설명합니다."],
[1,"What is protection provided by transferred antibodies called?",["passive immunity"],"Passive immunity는 이미 만들어진 항체를 전달받는 면역입니다."],
[2,"Write the marker combination commonly used to identify helper T cells.",["cd3 cd4","cd3+cd4+","cd3+ cd4+"],"CD3+CD4+는 대표적인 helper T-cell 표지자 조합입니다."],
[3,"Name the signaling process by which chemokines increase integrin affinity.",["inside out signaling","inside-out signaling"],"Inside-out signaling은 integrin을 고친화성 상태로 전환합니다."],
[4,"Give the two major Type I interferons.",["ifn alpha and ifn beta","ifn-alpha and ifn-beta","ifn α and ifn β","ifn-α and ifn-β"],"Type I interferons는 IFN-α와 IFN-β입니다. IFN-γ는 Type II interferon입니다."]
];

qs.push(
[1,"Which complement fragment can provide a co-stimulatory signal through CR2 (CD21) on B cells?",["C3d","C5b","C9","FcRn"],0,"C3d bound with antigen can engage CR2/CD21 and strengthen B-cell activation."],
[2,"Which statement best distinguishes a conventional dendritic cell from a follicular dendritic cell?",["Both primarily activate naive T cells through MHC II","Conventional DC presents processed antigen to T cells; FDC retains antigen for B-cell responses","FDC is the main source of circulating neutrophils","Conventional DC lacks antigen-presenting capacity"],1,"Conventional DC primes T cells; FDC retains antigen on its surface in follicles to support B-cell responses."],
[2,"Which lymph-node region is most associated with the T-cell zone?",["Outer follicle","Paracortex","Red pulp","Germinal center only"],1,"The paracortex is the main T-cell zone and contains dendritic cells."],
[2,"Which chemokine-receptor pairing helps naive T cells and dendritic cells enter the T-cell zone?",["CXCR5–CXCL13","CCR7–CCL19/CCL21","CD19–C3d","FcRn–IgG"],1,"CCR7 responds to CCL19/CCL21 signals associated with the T-cell zone."],
[2,"Which tissue-resident macrophage name is associated with the liver?",["Microglia","Kupffer cells","Alveolar macrophages","Dermal macrophages"],1,"Kupffer cells are liver macrophages; microglia are associated with the brain."],
[3,"Which adhesion-molecule family commonly binds carbohydrate ligands during rolling?",["Selectins","Integrins","MHC molecules","Fc receptors"],0,"Selectins mediate weak adhesive interactions that slow leukocytes during rolling."],
[3,"Which pair is a representative firm-adhesion interaction?",["P-selectin–histamine","LFA-1–ICAM-1","FcRn–C3d","CD19–CD3"],1,"Activated LFA-1 on leukocytes binds ICAM-1 on endothelium."],
[3,"What does leukocyte homing describe?",["Antibody secretion by plasma cells","Directed movement of cells to particular tissues","MHC peptide loading","B-cell receptor rearrangement"],1,"Homing refers to a cell's tissue-directed localization guided by surface receptors and signals."],
[4,"Which innate immune molecule is a cationic antimicrobial peptide associated with epithelial defense?",["Defensin","FcRn","CD19","ICAM-1"],0,"Defensins are antimicrobial peptides that can disrupt microbial membranes."],
[4,"Which receptor family is associated with inflammasome formation?",["Some NLRs","FcRn","CD3","Selectins"],0,"Some NOD-like receptors respond to cytosolic microbial or damage signals and form inflammasomes."],
[4,"Which process describes inflammatory cell death associated with inflammasome signaling?",["Affinity maturation","Pyroptosis","Clonal deletion only","Opsonization"],1,"Pyroptosis is an inflammatory form of cell death linked to strong release of inflammatory mediators."],
[4,"During antibody-dependent cellular cytotoxicity (ADCC), NK cells recognize which antibody region via CD16?",["Fab antigen-binding site","IgG Fc region","MHC II alpha-1 domain","BCR variable region only"],1,"CD16 on NK cells binds the Fc portion of IgG attached to a target cell."],
[5,"Which statement about the two light chains in one antibody is correct?",["One must be kappa and the other lambda","Both are the same isotype: kappa or lambda","Both are heavy chains","Light-chain isotype determines MHC class"],1,"The two light chains in an individual antibody are both kappa or both lambda."],
[5,"Which domains form the MHC class II peptide-binding groove?",["Alpha-1 and beta-1","Alpha-3 and beta-2 microglobulin","Fab and Fc","CD3 and CD4"],0,"The alpha-1 and beta-1 domains form the MHC class II peptide-binding groove."],
[5,"Which result is most directly obtained by flow cytometry?",["A band corresponding to one protein after membrane transfer","Cell-population distribution by scatter and fluorescence","Only total serum antibody concentration","DNA sequence of a receptor"],1,"Flow cytometry analyzes individual cells using scatter and fluorescence signals."]
);
short.push(
[2,"Name the chemokine receptor expressed by naive T cells that responds to CCL19 and CCL21.",["ccr7"],"CCR7 helps guide naive T cells and dendritic cells toward the T-cell zone."],
[3,"What is the process of leukocytes passing through the endothelial barrier called?",["transmigration","diapedesis"],"Transmigration, also called diapedesis, is the final step in the leukocyte extravasation cascade."],
[4,"Name the inflammatory form of cell death associated with inflammasome activity.",["pyroptosis"],"Pyroptosis is inflammatory cell death associated with release of inflammatory mediators."],
[4,"Which receptor on NK cells binds the Fc portion of target-bound IgG during ADCC?",["cd16","fc receptor cd16"],"CD16 recognizes the Fc region of IgG bound to a target cell."],
[5,"Which two MHC class II domains form the peptide-binding groove?",["alpha 1 beta 1","α1 β1","alpha1 and beta1"],"The MHC class II peptide-binding groove is formed by the α1 and β1 domains."]
);
cards.push(
{ch:1,q:"Which complement fragment can act with CR2/CD21 as a B-cell co-stimulatory signal?",a:"C3d",why:"C3d associated with antigen can bind CR2/CD21 and reinforce BCR signaling.",star:true},
{ch:1,q:"What is the main difference between active and passive immunity in memory formation?",a:"Active immunity can form immunological memory; passive immunity transfers ready-made antibodies and does not directly create recipient memory.",why:"Active immunity follows the recipient's own response to antigen; passive immunity transfers preformed antibody.",star:true},
{ch:2,q:"Which cells form the main T-cell zone of a lymph node?",a:"T cells and dendritic cells in the paracortex",why:"The paracortex is the T-cell zone; dendritic cells present antigen there.",star:true},
{ch:2,q:"Which chemokine guides B cells toward follicles through CXCR5?",a:"CXCL13",why:"CXCR5–CXCL13 signaling guides naive B cells toward the B-cell follicle.",star:true},
{ch:2,q:"Which macrophage type is found in the brain?",a:"Microglia",why:"Tissue macrophages have location-specific names; microglia are associated with the brain.",star:false},
{ch:3,q:"What does leukocyte homing mean?",a:"Directed localization or movement of a cell to a particular tissue",why:"Homing receptors and chemokine signals help determine the destination tissue.",star:true},
{ch:3,q:"Which adhesion-molecule pair is associated with VLA-4-mediated firm adhesion?",a:"VLA-4–VCAM-1",why:"Integrin VLA-4 binds endothelial VCAM-1 in firm adhesion.",star:true},
{ch:4,q:"What is the name of inflammatory cell death associated with inflammasomes?",a:"Pyroptosis",why:"Inflammasome-associated signaling can lead to inflammatory cell death.",star:true},
{ch:4,q:"Which NK-cell receptor binds IgG Fc during ADCC?",a:"CD16",why:"CD16 is an Fc receptor on NK cells that recognizes target-bound IgG.",star:true},
{ch:5,q:"Which two domains form the MHC class II peptide-binding groove?",a:"α1 and β1",why:"The α1 and β1 domains form the peptide-binding groove.",star:true},
{ch:5,q:"Which antibody region is primarily responsible for Fc-receptor binding and many effector functions?",a:"Heavy-chain constant region (Fc region)",why:"The variable region recognizes antigen; the Fc region mediates many effector functions.",star:true}
);
const essays=["Compare innate and adaptive immunity in recognition, response speed, specificity, and memory.","Explain the roles of selectins, chemokines, integrins, and ICAM/VCAM during leukocyte extravasation.","Compare NF-κB and IRF3/IRF7 signaling downstream of PRRs.","Explain how FcRn contributes to maternal IgG transfer and the prolonged half-life of IgG.","Compare Western blot, ELISA, and flow cytometry by principle and output."];
let deck=[],given={},submitted=false;
const el=id=>document.getElementById(id);
const normalize=s=>String(s||"").toLowerCase().replace(/[^a-z0-9αβ]+/g," ").trim().replace(/\s+/g," ");
const escape=s=>String(s).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
function isRight(q){return q.type==="short"?q.accept.some(a=>normalize(a)===normalize(given[q.id]||"")):Number(given[q.id])===q.ans}
function begin(){let m=qs.map((q,i)=>({id:"m"+i,ch:q[0],q:q[1],opts:q[2],ans:q[3],why:q[4],type:"mc"}));if(el("examSet").value==="B")m.reverse().forEach((q,i)=>{q.id="b"+i;const shift=i%4;q.opts=q.opts.slice(shift).concat(q.opts.slice(0,shift));q.ans=(q.ans-shift+4)%4});deck=m.concat(short.map((q,i)=>({id:"s"+i,ch:q[0],q:q[1],accept:q[2],why:q[3],type:"short"})));given={};submitted=false;el("examIntro").classList.add("hidden");el("examResult").innerHTML="";draw()}
function draw(){let h='<div class="card"><b>Answer in English.</b><p class="muted">객관식은 하나를 고르고, 단답형은 핵심 용어를 영어로 입력하세요. 제출 후 한국어 해설을 확인할 수 있습니다.</p></div>';deck.forEach((q,i)=>{h+='<article class="mock-question"><div class="qmeta"><span>Q'+(i+1)+' · Ch '+q.ch+' · '+(q.type==="short"?"Short answer":"Multiple choice")+'</span><span>'+(q.type==="short"?"":"4 choices")+'</span></div><h3>'+q.q+'</h3>';if(q.type==="short")h+='<input class="mock-answer" id="in-'+q.id+'" placeholder="Type your answer in English" value="'+escape(given[q.id]||"")+'" '+(submitted?"disabled":"")+'>';else h+='<div class="options">'+q.opts.map((o,j)=>'<label class="option"><input type="radio" name="in-'+q.id+'" value="'+j+'" '+(String(given[q.id])===String(j)?"checked":"")+' '+(submitted?"disabled":"")+'><span><b>'+String.fromCharCode(65+j)+'.</b> '+o+'</span></label>').join("")+'</div>';if(submitted)h+='<div class="mock-feedback '+(isRight(q)?"":"wrong")+'"><b>'+(isRight(q)?"Correct":"Review")+'</b><p><b>정답:</b> '+(q.type==="short"?q.accept[0]:String.fromCharCode(65+q.ans)+". "+q.opts[q.ans])+'</p><p>'+q.why+'</p></div>';h+='</article>'});h+='<div class="mock-toolbar"><button class="btn primary" id="submitMock" '+(submitted?"disabled":"")+'>'+(submitted?"채점 완료":"답안 제출 및 한국어 해설 보기")+'</button><button class="btn" id="retryMock">다시 풀기</button></div>';el("examArea").innerHTML=h;if(!submitted){deck.forEach(q=>{if(q.type==="short")el("in-"+q.id).oninput=e=>given[q.id]=e.target.value;else document.querySelectorAll('input[name="in-'+q.id+'"]').forEach(x=>x.onchange=()=>given[q.id]=Number(x.value))});el("submitMock").onclick=()=>{deck.forEach(q=>{if(q.type==="short")given[q.id]=el("in-"+q.id).value;else{const x=document.querySelector('input[name="in-'+q.id+'"]:checked');if(x)given[q.id]=Number(x.value)}});submitted=true;draw()}}el("retryMock").onclick=begin;if(submitted){const score=deck.filter(isRight).length;el("examResult").innerHTML='<div class="card"><h2>채점 결과</h2><p><b>'+score+' / '+deck.length+'</b> 정답 · '+Math.round(score/deck.length*100)+'%</p><p class="muted">단답형은 핵심 용어 중심 자동 채점이므로 표기 차이로 오답 처리될 수 있습니다. 해설과 정답을 함께 확인하세요.</p></div>'}}
el("startExam").onclick=begin;el("showExamResults").onclick=()=>{if(!submitted){alert("먼저 답안을 제출해 주세요.");return}el("examResult").scrollIntoView({behavior:"smooth",block:"start"})};
el("essayPrompts").innerHTML=essays.map((q,i)=>'<div class="essay-item"><b>Essay '+(i+1)+'</b><p>'+q+'</p></div>').join("");
const old=window.renderSummary;
function decorate(){const root=el("summaryContent");if(!root)return;const active=el("summaryChapters").querySelector(".chbtn.active");const n=active?Number(active.dataset.ch):1;const existing=root.querySelector(".visual");if(existing)existing.remove();const intro=root.querySelector(".card");if(intro)intro.insertAdjacentHTML("afterend",diagrams[n-1]);root.querySelectorAll(".predict-explanation").forEach((p,i)=>p.textContent=(exp[n]||[])[i]||"강의 개념의 정의와 작동 순서를 연결해 설명하세요.")}
if(typeof old==="function"){window.renderSummary=function(){old();decorate()};window.renderSummary()}

/* Focused active-recall tab based on the uploaded immunology notes. */
const targetMemoryCards = [
{g:"tlr",label:"TLR3",q:"TLR3의 리간드는 무엇이며 어떤 미생물을 인식하는가?",a:"리간드: double-stranded RNA (dsRNA)\n대상: 바이러스, 특히 dsRNA 또는 복제 중 dsRNA를 만드는 바이러스",why:"TLR3는 endosome의 핵산 감지 TLR입니다."},
{g:"tlr",label:"TLR4",q:"TLR4의 리간드는 무엇이며 어떤 미생물을 인식하는가?",a:"리간드: Lipopolysaccharide (LPS)\n대상: 그람음성균(Gram-negative bacteria)",why:"LPS는 그람음성균 외막의 대표적인 구성 성분입니다."},
{g:"tlr",label:"TLR5",q:"TLR5의 리간드는 무엇이며 어떤 미생물을 인식하는가?",a:"리간드: Flagellin (편모 단백질)\n대상: 편모를 가진 세균(flagellated bacteria)",why:"TLR5는 세균 편모의 단백질 성분을 인식합니다."},
{g:"tlr",label:"TLR7",q:"TLR7의 리간드는 무엇이며 어떤 미생물을 인식하는가?",a:"리간드: single-stranded RNA (ssRNA)\n대상: RNA 바이러스",why:"TLR7은 endosome에 위치하는 핵산 감지 TLR입니다."},
{g:"tlr",label:"TLR8",q:"TLR8의 리간드는 무엇이며 어떤 미생물을 인식하는가?",a:"리간드: single-stranded RNA 및 RNA 분해 산물\n대상: 바이러스",why:"강의 자료는 TLR7·TLR8을 ssRNA 인식 수용체로 묶어 제시합니다."},
{g:"tlr",label:"TLR9",q:"TLR9의 리간드는 무엇이며 어떤 미생물을 인식하는가?",a:"리간드: unmethylated CpG-rich DNA\n대상: 세균 및 바이러스 등 미생물 유래 DNA",why:"TLR9는 endosome에서 CpG motif가 풍부한 DNA를 인식합니다."},
{g:"cytokine",label:"TNF",q:"TNF의 주요 기능은?",a:"대표적인 염증성(pro-inflammatory) 사이토카인. 내피 활성화와 염증 반응을 촉진하며 전신적으로 발열·급성기 반응 등에 관여",why:"PDF는 TNF를 IL-1·IL-6와 함께 초기 염증성 사이토카인으로 강조합니다."},
{g:"cytokine",label:"IL-1",q:"IL-1의 주요 기능은?",a:"염증 촉진, 발열 및 혈관 내피 활성화 등 염증 반응 유도",why:"IL-1은 TNF·IL-6와 함께 주요 pro-inflammatory cytokine입니다."},
{g:"cytokine",label:"IL-6",q:"IL-6의 주요 기능은?",a:"염증 반응과 전신 급성기 반응(acute-phase response)에 관여",why:"PDF에서 TNF·IL-1·IL-6는 초기에 분비되는 대표 염증성 사이토카인으로 제시됩니다."},
{g:"cytokine",label:"IL-12",q:"IL-12는 주로 어떤 세포를 활성화하며 어떤 면역반응을 연결하는가?",a:"NK cell 및 T cell을 활성화하고 IFN-γ 생성과 세포매개 면역 반응을 촉진",why:"PDF는 IL-12를 주로 세포 활성화와 연결해 강조합니다."},
{g:"cytokine",label:"IL-10",q:"IL-10의 주요 기능과 염증 반응에서의 역할 시기는?",a:"항염증성(anti-inflammatory) 사이토카인. 대식세포·수지상세포의 염증성 활성과 사이토카인 생성을 억제해 반응을 제한하며, PDF는 후기의 진정 신호로 강조",why:"TNF·IL-1·IL-6의 염증 촉진 작용과 대비해서 암기하세요."},
{g:"cytokine",label:"Type I IFN",q:"Type I interferon의 대표 종류와 핵심 기능은?",a:"IFN-α와 IFN-β. 바이러스 감염 주변 세포에 항바이러스 상태를 유도하고 바이러스 증식을 억제",why:"PDF는 Type I IFN을 항바이러스 반응과 연결합니다. IFN-γ는 Type II IFN입니다."},
{g:"chemokine",label:"B cell",q:"B cell이 여포(follicle)로 이동할 때 인식하는 케모카인–수용체 조합은?",a:"CXCL13 — CXCR5",why:"PDF의 형광 강조 내용: B cell은 CXCR5를 통해 CXCL13 신호를 따라 여포로 이동합니다."},
{g:"chemokine",label:"T cell / DC",q:"T cell과 DC가 T-cell zone으로 이동할 때 인식하는 케모카인–수용체 조합은?",a:"CCL19 및 CCL21 — CCR7",why:"PDF의 형광 강조 내용: T cell과 DC는 CCR7을 발현하고 CCL19·CCL21 신호를 따라 이동합니다."},
{g:"chemokine",label:"역방향 회상",q:"CXCL13의 수용체와 주요 이동 대상은? ",a:"수용체: CXCR5. 주요 대상: B cell이 여포로 이동",why:"케모카인 이름만 보아도 수용체와 세포를 함께 떠올리세요."},
{g:"chemokine",label:"역방향 회상",q:"CCL19·CCL21의 수용체와 주요 이동 대상은?",a:"수용체: CCR7. 주요 대상: T cell 및 DC가 T-cell zone으로 이동",why:"CCL19/CCL21–CCR7 축은 림프절의 T-cell zone 이동에 중요합니다."},
{g:"macrophage",label:"Brain",q:"Brain의 조직 거주 대식세포는?",a:"Microglial cells (Microglia)",why:"PDF의 7개 조직 거주 대식세포 목록 중 뇌에 해당합니다."},
{g:"macrophage",label:"Lung",q:"Lung의 조직 거주 대식세포는?",a:"Alveolar macrophages",why:"폐포(alveoli)에 존재하는 대식세포입니다."},
{g:"macrophage",label:"Liver",q:"Liver의 조직 거주 대식세포는?",a:"Kupffer cells",why:"간의 조직 거주 대식세포입니다."},
{g:"macrophage",label:"Heart",q:"Heart의 조직 거주 대식세포는?",a:"Myocardial macrophages",why:"PDF 표의 표기를 그대로 암기합니다."},
{g:"macrophage",label:"Skin",q:"Skin의 조직 거주 대식세포는?",a:"Dermal macrophages",why:"피부 진피(dermis)에 존재하는 대식세포입니다."},
{g:"macrophage",label:"Spleen",q:"Spleen의 조직 거주 대식세포는?",a:"Sinusoidal macrophages",why:"PDF 표에서는 비장의 세포를 sinusoidal macrophages로 표기합니다."},
{g:"macrophage",label:"Intestines",q:"Intestines의 조직 거주 대식세포는?",a:"Lamina propria macrophages",why:"장 점막고유층(lamina propria)에 존재합니다."}
];
const targetMemoryKey="pnupImmunologyTargetMemoryV1";
let targetGroup="all",targetDeck=[...targetMemoryCards],targetIndex=0,targetKnown=new Set(),targetMissed=new Set(),targetRevealed=false;
try{const st=JSON.parse(localStorage.getItem(targetMemoryKey)||"{}");targetKnown=new Set(st.known||[]);targetMissed=new Set(st.missed||[])}catch(e){}
function saveTargetState(){try{localStorage.setItem(targetMemoryKey,JSON.stringify({known:[...targetKnown],missed:[...targetMissed]}))}catch(e){}}
function targetBuild(group=targetGroup,onlyMissed=false,shuffle=false){targetGroup=group;let arr=targetMemoryCards.filter(c=>(group==="all"||c.g===group)&&(!onlyMissed||targetMissed.has(c.q)));if(shuffle)arr=arr.sort(()=>Math.random()-.5);targetDeck=arr;targetIndex=0;targetRevealed=false;document.querySelectorAll("#memoryGroups [data-group]").forEach(b=>b.classList.toggle("active",b.dataset.group===group));targetRender()}
function targetRender(){const q=document.getElementById("targetQuestion");if(!q)return;const c=targetDeck[targetIndex];const flash=document.getElementById("targetFlashcard");if(!c){document.getElementById("targetQuestion").textContent="이 조건에 남은 카드가 없습니다.";document.getElementById("targetAnswer").innerHTML="전체 카드 또는 다른 묶음을 선택하세요.";document.getElementById("targetAnswer").classList.remove("hidden");document.getElementById("targetPosition").textContent="0 / 0";document.getElementById("targetProgressFill").style.width="0%";return}
document.getElementById("targetGroupLabel").textContent=({tlr:"TLR",cytokine:"선천면역 사이토카인",chemokine:"케모카인·수용체",macrophage:"조직 거주 대식세포"})[c.g]+" · "+c.label;
document.getElementById("targetPosition").textContent=(targetIndex+1)+" / "+targetDeck.length;
q.textContent=c.q;
const ans=document.getElementById("targetAnswer");ans.innerHTML="<b>"+c.a.replace(/\n/g,"<br>")+"</b><p class='muted'>"+c.why+"</p>";ans.classList.toggle("hidden",!targetRevealed);
document.getElementById("targetReveal").textContent=targetRevealed?"정답 숨기기":"정답 보기";
document.getElementById("targetProgressFill").style.width=((targetIndex+1)/targetDeck.length*100)+"%";
const total=targetMemoryCards.length,known=targetKnown.size,missed=targetMissed.size;
document.getElementById("memoryOverview").innerHTML="<b>전체 진행:</b> "+known+" / "+total+"개 외움 · <b>다시 볼 카드:</b> "+missed+"개 <div class='progress'><span style='width:"+(known/total*100)+"%'></span></div><p class='muted'>외움 표시는 기억 상태 기록용입니다. 언제든 다시 보기로 되돌릴 수 있습니다.</p>";
}
document.getElementById("memoryGroups").querySelectorAll("[data-group]").forEach(b=>b.onclick=()=>targetBuild(b.dataset.group,false,false));
document.getElementById("targetReveal").onclick=()=>{targetRevealed=!targetRevealed;targetRender()};
document.getElementById("targetAgain").onclick=()=>{const c=targetDeck[targetIndex];if(c){targetMissed.add(c.q);targetKnown.delete(c.q);saveTargetState()}if(targetIndex<targetDeck.length-1)targetIndex++;targetRevealed=false;targetRender()};
document.getElementById("targetKnown").onclick=()=>{const c=targetDeck[targetIndex];if(c){targetKnown.add(c.q);targetMissed.delete(c.q);saveTargetState()}if(targetIndex<targetDeck.length-1)targetIndex++;targetRevealed=false;targetRender()};
document.getElementById("targetPrev").onclick=()=>{if(targetDeck.length){targetIndex=(targetIndex-1+targetDeck.length)%targetDeck.length;targetRevealed=false;targetRender()}};
document.getElementById("targetNext").onclick=()=>{if(targetDeck.length){targetIndex=(targetIndex+1)%targetDeck.length;targetRevealed=false;targetRender()}};
document.getElementById("targetReviewMissed").onclick=()=>targetBuild(targetGroup,true,true);
document.getElementById("targetReviewAll").onclick=()=>targetBuild(targetGroup,false,true);
document.getElementById("memoryReset").onclick=()=>{if(confirm("이 탭의 암기 진행 상태를 초기화할까요?")){targetKnown.clear();targetMissed.clear();saveTargetState();targetBuild(targetGroup,false,false)}};

document.getElementById("targetReferenceTables").innerHTML =
'<h3>1. Toll-like receptors</h3><div style="overflow-x:auto"><table><thead><tr><th>수용체</th><th>리간드</th><th>대상 미생물</th></tr></thead><tbody>'+
'<tr><td>TLR3</td><td>dsRNA</td><td>바이러스</td></tr><tr><td>TLR4</td><td>LPS</td><td>그람음성균</td></tr><tr><td>TLR5</td><td>Flagellin</td><td>편모 보유 세균</td></tr><tr><td>TLR7</td><td>ssRNA</td><td>RNA 바이러스</td></tr><tr><td>TLR8</td><td>ssRNA</td><td>바이러스</td></tr><tr><td>TLR9</td><td>Unmethylated CpG-rich DNA</td><td>세균·바이러스 등 미생물</td></tr></tbody></table></div>'+
'<h3>2. 선천면역 주요 사이토카인</h3><div style="overflow-x:auto"><table><thead><tr><th>사이토카인</th><th>주요 분비 세포(대표)</th><th>주요 표적(대표)</th><th>핵심 기능</th></tr></thead><tbody>'+
'<tr><td>TNF</td><td>대식세포 등</td><td>혈관 내피, 여러 조직 세포</td><td>염증·내피 활성화, 발열 및 전신 염증 반응</td></tr><tr><td>IL-1</td><td>대식세포 등</td><td>시상하부, 혈관 내피 등</td><td>염증 촉진, 발열·내피 활성화</td></tr><tr><td>IL-6</td><td>대식세포 등</td><td>간세포 등</td><td>염증 및 급성기 반응</td></tr><tr><td>IL-12</td><td>대식세포·DC</td><td>NK cell, T cell</td><td>세포 활성화, IFN-γ 생성 촉진</td></tr><tr><td>IL-10</td><td>대식세포·DC·조절 T세포 등</td><td>대식세포, DC</td><td>항염증, 대식세포·DC 활성 억제</td></tr><tr><td>Type I IFN (IFN-α/β)</td><td>바이러스 감염 세포 및 pDC 등</td><td>주변의 감염 가능 세포</td><td>항바이러스 상태 유도</td></tr></tbody></table></div>'+
'<h3>3. PDF에서 형광 강조된 케모카인 축</h3><div style="overflow-x:auto"><table><thead><tr><th>세포</th><th>케모카인</th><th>수용체</th><th>이동 위치·기능</th></tr></thead><tbody>'+
'<tr><td>B cell</td><td><b>CXCL13</b></td><td><b>CXCR5</b></td><td>B-cell follicle로 이동</td></tr><tr><td>T cell / DC</td><td><b>CCL19, CCL21</b></td><td><b>CCR7</b></td><td>T-cell zone으로 이동</td></tr></tbody></table></div>'+
'<h3>4. 조직 거주 대식세포 7종 (PDF 표기)</h3><div style="overflow-x:auto"><table><thead><tr><th>조직</th><th>세포명</th></tr></thead><tbody>'+
'<tr><td>Brain</td><td>Microglial cells</td></tr><tr><td>Lung</td><td>Alveolar macrophages</td></tr><tr><td>Liver</td><td>Kupffer cells</td></tr><tr><td>Heart</td><td>Myocardial macrophages</td></tr><tr><td>Skin</td><td>Dermal macrophages</td></tr><tr><td>Spleen</td><td>Sinusoidal macrophages</td></tr><tr><td>Intestines</td><td>Lamina propria macrophages</td></tr></tbody></table></div>';


/* 암기표의 열 제목을 모바일 카드에서도 읽을 수 있도록 각 셀에 라벨 부여 */
document.querySelectorAll("#targetReferenceTables table").forEach(table=>{
 const headers=[...table.querySelectorAll("thead th")].map(th=>th.textContent.trim());
 table.querySelectorAll("tbody tr").forEach(row=>{
  [...row.querySelectorAll("td")].forEach((cell,i)=>cell.setAttribute("data-label",headers[i]||"항목"));
 });
});

targetBuild("all",false,false);

})();