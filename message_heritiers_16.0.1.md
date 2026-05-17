🔧 **Mise à jour 16.0.1 — Le Soufflet du Forgeron**

Chers Héritiers,

La Forge est réparée ! Le Registre qui clignotait comme un feu follet a été stabilisé d'un coup de marteau bien placé.

**🔧 Le Soufflet du Forgeron**
`fetchForge`, la fonction qui anime le brasé, s'emballait en boucle : chaque coup de chauffe créait une nouvelle flamme qui relançait le soufflet sans fin. Le Gardien a posé un `useCallback` sur l'enclume pour que la forge ne s'active qu'une seule fois à l'ouverture du Registre. Le Kanban apparaît désormais sans scintillement.

**🧪 243 Sentinelles**
Toujours en faction, aucune faille.

Que vos créations restent stables !
