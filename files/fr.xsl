<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="/">
    <departements>
      <xsl:apply-templates select="mondial/country[name = 'France']/province"/>
    </departements>
  </xsl:template>

  <xsl:template match="province">
    <departement>
      <nom_departement><xsl:value-of select="@name"/></nom_departement>
      <xsl:apply-templates select="city"/>
    </departement>
  </xsl:template>

  <xsl:template match="city">
    <ville><xsl:value-of select="@name"/></ville>
  </xsl:template>

</xsl:stylesheet>
