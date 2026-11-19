# Script to shorten descriptions and remove scrollbars in OnlineDegreeSection.jsx files

$countries = @(
    @{
        Name = "France"
        Path = "components\StudyInFrance\OnlineDegreeSection.jsx"
        Replacements = @(
            @{ Old = '"Discover France's prestigious universities, diverse programmes, and innovative culture while unlocking global opportunities."'; New = '"Discover France's prestigious universities, diverse programmes, and innovative culture."' }
            @{ Old = '"Your budget depends on your qualification, program, and institution. Public universities in France offer relatively affordable tuition for international students compared to other European destinations."'; New = '"Public universities in France offer relatively affordable tuition for international students."' }
            @{ Old = '"Your living costs depend on your city, accommodation, commute, and daily routine. Beyond budgeting, prepare for France's rich culture, student-friendly cities, and diverse regional traditions."'; New = '"Your living costs depend on your city, accommodation, and daily routine."' }
            @{ Old = '"French scholarships can reward academic performance, research potential, or specific fields of study. Opportunities differ by degree level, so check eligibility and funding terms before applying."'; New = '"French scholarships reward academic performance, research potential, or specific fields of study."' }
            @{ Old = '"France offers a temporary residence permit for eligible international graduates to search for work or start a business after completing their studies. Duration and eligibility depend on your qualification."'; New = '"France offers a temporary residence permit for eligible international graduates to search for work."' }
        )
    }
)

foreach ($country in $countries) {
    $filePath = Join-Path $PSScriptRoot $country.Path
    
    if (Test-Path $filePath) {
        Write-Host "Processing $($country.Name)..." -ForegroundColor Cyan
        
        $content = Get-Content $filePath -Raw -Encoding UTF8
        
        foreach ($replacement in $country.Replacements) {
            if ($content -match [regex]::Escape($replacement.Old)) {
                $content = $content -replace [regex]::Escape($replacement.Old), $replacement.New
                Write-Host "  - Shortened description" -ForegroundColor Green
            }
        }
        
        # Remove scrollbar classes
        $content = $content -replace 'overflow-y-auto\s+\[scrollbar-width:thin\]', ''
        $content = $content -replace 'overflow-y-auto', ''
        $content = $content -replace '\[scrollbar-width:thin\]', ''
        
        # Clean up extra spaces
        $content = $content -replace '\s{2,}', ' '
        
        Set-Content $filePath $content -Encoding UTF8 -NoNewline
        Write-Host "  ✓ Updated $($country.Name)" -ForegroundColor Green
    } else {
        Write-Host "  ✗ File not found: $filePath" -ForegroundColor Red
    }
}

Write-Host "`nDone!" -ForegroundColor Green
