import { MENU_ITEMS, SOCIAL_MEDIA } from "@/constant/menu"

import Menu from "@/components/elements/Menu"
import SocialMedia from "@/components/elements/SocialMedia"
import Breakline from "@/components/elements/Breakline"

function Navigation() {
  const filteredMenu = MENU_ITEMS?.filter(item => item?.isShow)
  const filteredSocialMedia = SOCIAL_MEDIA?.filter(item => item?.isShow)
  return (
    <div>
      <Menu list={filteredMenu}/>
      <Breakline />
      <SocialMedia items={filteredSocialMedia}/>
    </div>
  )
}

export default Navigation