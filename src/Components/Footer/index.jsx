import logoHimaster from '../../assets/image/logo-himaster-xs.svg'
// import logoHimaster from '../../assets/image/logo-himaster-xs.png'

export default function Footer({ backgroundColor = '#fff' }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2em 0', backgroundColor }}>
            <div style={{ display: 'flex', gap: '5px' }}>
                <object data={logoHimaster} width="30" height="30" >Logo Himaster</object>
                <h3 style={{
                    fontWeight: 'bolder'
                }}>
                    Divisi Keilmuan Himaster
                </h3>
            </div>
            <div style={{ display: 'flex' }}>
                <h4 style={{
                    color: '#5D5D5D'
                }}>&copy; 2021 All Right Reserved -&nbsp;</h4>
                <h4>Designed By USKW</h4>
            </div>
        </div>
    )
}