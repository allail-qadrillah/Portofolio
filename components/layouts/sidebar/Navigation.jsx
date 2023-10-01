import { MENU_ITEMS, SOCIAL_MEDIA } from "@/constant/menu"
import Menu from "@/components/elements/Menu"
function Navigation() {
  const filteredMenu = MENU_ITEMS?.filter(item => item?.isShow)
  const filteredSocialMedia = SOCIAL_MEDIA?.filter(item => item?.isShow)
  console.log(filteredMenu)
  return (
    <div>
      <Menu list={filteredMenu}/>
    </div>
  )
}

export default Navigation