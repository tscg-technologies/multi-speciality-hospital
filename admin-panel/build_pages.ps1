$pages = @("staff", "departments", "locations", "services", "packages", "resources", "testimonials", "content", "analytics", "settings")

$template = @"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TITLE_REPLACE - Aurevia Admin</title>
    <link rel="stylesheet" href="../assets/css/admin.css">
    <link rel="stylesheet" href="../assets/css/components.css">
    <link rel="stylesheet" href="../assets/css/responsive.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <div class="app-container">
        <aside class="sidebar" id="sidebar"></aside>
        <main class="main-wrapper">
            <header class="top-header" id="topHeader"></header>
            <div class="main-content">
                <div class="section-header">
                    <h2>TITLE_REPLACE Management</h2>
                    <button class="btn btn-primary"><i class="fa-solid fa-plus"></i> Add TITLE_REPLACE</button>
                </div>
                <div class="card">
                    <p>Demonstration view for TITLE_REPLACE directory.</p>
                </div>
            </div>
        </main>
    </div>
    <script src="../assets/js/data.js"></script>
    <script src="../assets/js/layout.js"></script>
</body>
</html>
"@

foreach ($page in $pages) {
    # Capitalize first letter
    $title = $page.Substring(0,1).ToUpper() + $page.Substring(1)
    $content = $template -replace "TITLE_REPLACE", $title
    $filePath = "pages/$page.html"
    Set-Content -Path $filePath -Value $content -Encoding UTF8
}

Write-Host "Pages generated!"
